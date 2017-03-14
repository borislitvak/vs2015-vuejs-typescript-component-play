using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(UserReportVuejsAsp.Startup))]
namespace UserReportVuejsAsp
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
