using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AncientKingdom.Startup))]
namespace AncientKingdom
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
