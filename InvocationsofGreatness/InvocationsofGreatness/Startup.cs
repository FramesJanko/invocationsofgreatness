using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace InvocationsofGreatness
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllersWithViews();

        // I put this here to get the app to show up on Localhost:5001 root, instead of in /App/Index.html. 
        // See below at appl.UseMvc...
            services.AddMvc(option => option.EnableEndpointRouting = false);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsEnvironment("Development"))
            {
                app.UseDeveloperExceptionPage();
                
            }
            else
            {
                //Add Error Page
            }

            //app.UseDefaultFiles();
            app.UseStaticFiles();
            app.UseNodeModules();

            app.UseRouting();
            
            
            // I put UseMvc here instead of app.UseEndpoints(cfg =>
            //     cfg.MapControllerRoute("Fallback",
            //         etc...
            // because I wanted to get the webapp to show at the root folder, instead of only on /app/index.html
            app.UseMvc(cfg =>
            {
                cfg.MapRoute("Default",
                    "{controller}/{action}/{id?}",
                    new { controller = "Invoke", Action = "Index" });
            });
        }
    }
}
