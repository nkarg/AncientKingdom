﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AncientKingdom.Controllers
{
    public class MapController : Controller
    {
        // GET: Map
        [Authorize]
        public ActionResult Index()
        {
            return View();
        }
    }
}