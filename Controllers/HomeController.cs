using Microsoft.AspNetCore.Mvc;

namespace rodriguez_consultores.Controllers
{
    public class HomeController : Controller
    {
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

        public IActionResult SendMail()
        {
            return Json(true);
        }


        public IActionResult Error()
        {
            return View();
        }
    }
}
