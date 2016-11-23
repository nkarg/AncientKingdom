using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace AncientKingdom.Models
{
    public class AchievementContext: DbContext
    {
        public AchievementContext(): base("DefaultConnection")
        {
          //  Database.SetInitializer(new GameInitialize());
        }
        public DbSet<Game> Games { get; set; }
        public DbSet<UserAchievement> Achievements { get; set; }
    }
}