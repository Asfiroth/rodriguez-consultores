using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using rodriguez_consultores.Options;
using rodriguez_consultres.Helpers;

namespace rodriguez_consultores.Controllers
{
    public class HomeController : Controller
    {
        private IOptions<SmtpOptions> _smtpOptions;
        public HomeController(IOptions<SmtpOptions> optionsAccessor)
        {
            _smtpOptions = optionsAccessor;
        }
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult About()
        {
            return View();
        }

        public IActionResult Contact()
        {
            return View();
        }

        public IActionResult Services()
        {
            return View();
        }
        
        [HttpPostAttribute]
        public async Task<IActionResult> SendMail(string senderName, string senderMail, string message)
        {
            var mailHelper = new MailHelper(_smtpOptions);
            await mailHelper.SendMail(senderName, senderMail, message, MailType.ContactMail);
            await mailHelper.SendMail(senderName, senderMail, message, MailType.ResponseMail);
            return Json(true);
        }


        public IActionResult Error()
        {
            return View();
        }
    }
}
