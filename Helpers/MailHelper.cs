using MailKit.Net.Smtp;
using System.Threading.Tasks;
using MimeKit;
using System;
using Microsoft.Extensions.Options;
using rodriguez_consultores.Options;

namespace rodriguez_consultres.Helpers
{
    public class MailHelper
    {
        private SmtpOptions _smtpOptions;
        public MailHelper(IOptions<SmtpOptions> optionsAccessor)
        {
            _smtpOptions = optionsAccessor.Value;
        }

        private const string SmtpServer = "smtp.office365.com";
        private const int SmtpPortNumber = 587;
        public async Task SendMail(string name, string mail, string message, MailType type)
        {
            switch (type)
            {
                case MailType.ContactMail:
                    await SendContactMail(name, mail, message);
                    break;
                case MailType.ResponseMail:
                    await SendAutomaticResponseMail(name, mail);
                    break;
                default:
                    throw new ArgumentOutOfRangeException(nameof(type));
            }
        }

        private async Task SendContactMail(string name, string mail, string message)
        {
            var mimeMessage = new MimeMessage();
            mimeMessage.From.Add(new MailboxAddress(mail, _smtpOptions.Account));
            mimeMessage.ReplyTo.Add(new MailboxAddress(name, mail));
            mimeMessage.To.Add(new MailboxAddress(_smtpOptions.SendName, _smtpOptions.Send));
            mimeMessage.Subject = "Contacto";
            mimeMessage.Body = new TextPart("plain")
            {
                Text = message
            };
            using (var client = new SmtpClient())
            {
                await client.ConnectAsync(SmtpServer, SmtpPortNumber, false);
                await client.AuthenticateAsync(_smtpOptions.Account, _smtpOptions.Pass);
                await client.SendAsync(mimeMessage);
                await client.DisconnectAsync(true);
            }
        }

        private async Task SendAutomaticResponseMail(string name, string mail)
        {
            var mimeMessage = new MimeMessage();
            mimeMessage.ReplyTo.Add(new MailboxAddress(_smtpOptions.ResponseName, _smtpOptions.Response));
            mimeMessage.From.Add(new MailboxAddress(_smtpOptions.ResponseName, _smtpOptions.Response));
            mimeMessage.To.Add(new MailboxAddress(name, mail));
            mimeMessage.Subject = "Contacto";
            mimeMessage.Body = new TextPart("plain")
            {
                Text = ""
            };
            using (var client = new SmtpClient())
            {
                await client.ConnectAsync(SmtpServer, SmtpPortNumber, useSsl: false);
                await client.AuthenticateAsync(_smtpOptions.Account, _smtpOptions.Pass);
                await client.SendAsync(mimeMessage);
                await client.DisconnectAsync(quit: true);
            }
        }
    }

    public enum MailType
    {
        ContactMail,
        ResponseMail

    }
}