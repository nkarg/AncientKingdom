using AncientKingdom.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;

namespace AncientKingdom.Controllers
{
    public class AchievementController : Controller
    {
        AchievementContext AC = new AchievementContext();

        // GET: Achievement
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult CreateAchievement(NewAchievement NA)
        {
            var user = System.Web.HttpContext.Current.User;
            var game = AC.Games.FirstOrDefault(x => x.GameID == NA.NewAchievementID);
            //var currentuser = Membership.GetUser(User.Identity.Name);
            var achievement = new UserAchievement()
            {
                ThiefLives =NA.ThiefLives,
                ThiefTries =NA.ThiefTries,
                UserID = user.Identity.Name,
                Game = game
            };
            AC.Achievements.Add(achievement);
            AC.SaveChanges();
            return new HttpStatusCodeResult(HttpStatusCode.OK);
        }

        public ActionResult GetAchievements()
        {
            var achvs = AC.Achievements.Where(x => x.UserID == System.Web.HttpContext.Current.User.Identity.Name).ToList();
            List<GameThief> listita = new List<GameThief>();
            foreach (var item in achvs)
            {
                listita.Add(new GameThief()
                {
                    Lives = item.ThiefLives,
                    Name = item.Game.Name,
                    Tries = item.ThiefTries
                });
            }
            //construir un objeto que tenga el nombre del juego, vidas
            return Json(listita, JsonRequestBehavior.AllowGet);
        }

        public ActionResult GetHighscores()
        {
            var achvs = AC.Achievements.ToList();
            List<Highscore> listita = new List<Highscore>();
            foreach (var item in achvs)
            {
                listita.Add(new Highscore()
                {
                    UserName = item.UserID,
                    GameName = item.Game.Name,
                    Lives = item.ThiefLives,
                    Tries = item.ThiefTries
                });
            }
            //construir un objeto que tenga el nombre del juego, vidas
            return Json(listita.OrderBy(x => x.Tries).OrderBy(x => x.Lives).ToList(), JsonRequestBehavior.AllowGet);
        }
    }
}