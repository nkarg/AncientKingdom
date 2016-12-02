using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AncientKingdom.Models
{
    public class Highscore
    {
        public string  UserName { get; set; }
        public string GameName { get; set; }
        public int Lives { get; set; }
        public int Tries { get; set; }
    }
}