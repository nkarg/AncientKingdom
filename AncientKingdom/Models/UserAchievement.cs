using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AncientKingdom.Models
{
    public class UserAchievement
    {
        public int UserAchievementID { get; set; }
        public string UserID { get; set; }
        public virtual Game Game { get; set; }
        public int ThiefLives { get; set; }
        public int ThiefTries { get; set; }

    }
}