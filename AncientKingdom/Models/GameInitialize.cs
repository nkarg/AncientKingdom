using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace AncientKingdom.Models
{
    public class GameInitialize: DropCreateDatabaseAlways<AchievementContext>
    {
        protected override void Seed(AchievementContext act)
        {
            act.Games.Add(new Game() { GameID = 1, Name = "Thief", Description = "Lorep" });
            act.Games.Add(new Game() { GameID = 2, Name = "Warrior", Description = "Lorep" });
            act.Games.Add(new Game() { GameID = 3, Name = "Wizard", Description = "Lorep" });

            base.Seed(act);
        }
    }
}