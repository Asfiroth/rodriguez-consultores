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
            await Send(mimeMessage).ConfigureAwait(continueOnCapturedContext: false);
        }

        private async Task SendAutomaticResponseMail(string name, string mail)
        {
            var mimeMessage = new MimeMessage();
            mimeMessage.From.Add(new MailboxAddress(_smtpOptions.ResponseName, _smtpOptions.Response));
            mimeMessage.To.Add(new MailboxAddress(name, mail));
            mimeMessage.ReplyTo.Add(new MailboxAddress(_smtpOptions.ResponseName, _smtpOptions.Response));
            mimeMessage.Subject = "Contacto";
            mimeMessage.Body = new TextPart("plain")
            {
                Text = $"Estimado(a) {name}, \nHemos recibido su correo y procederemos a atenderlo, en breves uno de nuestros representantes se pondrá en contacto con usted. \nAtentamente, \nRodríguez Consultores & Asociados."
            };
            await Send(mimeMessage).ConfigureAwait(continueOnCapturedContext: false);
        }

        private async Task Send(MimeMessage message)
        {
            using (var client = new SmtpClient())
            {
                await client.ConnectAsync(SmtpServer, SmtpPortNumber, useSsl: false).ConfigureAwait(continueOnCapturedContext: false);
                client.AuthenticationMechanisms.Remove("XOAUTH2");
                await client.AuthenticateAsync(_smtpOptions.Account, _smtpOptions.Pass).ConfigureAwait(continueOnCapturedContext: false);
                await client.SendAsync(message).ConfigureAwait(continueOnCapturedContext: false);
                await client.DisconnectAsync(quit: true).ConfigureAwait(continueOnCapturedContext: false);
            }
        }
    }

    public enum MailType
    {
        ContactMail,
        ResponseMail

    }
}