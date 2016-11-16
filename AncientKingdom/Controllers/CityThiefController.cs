using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AncientKingdom.Controllers
{
    public class CityThiefController : Controller
    {
        // GET: CityThief
        [Authorize]
        public ActionResult Index()
        {
            return View();
        }
    }
}