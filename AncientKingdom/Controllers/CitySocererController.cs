﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AncientKingdom.Controllers
{
    public class CitySocererController : Controller
    {
        // GET: CitySocerer
        [Authorize]
        public ActionResult Index()
        {
            return View();
        }
    }
}