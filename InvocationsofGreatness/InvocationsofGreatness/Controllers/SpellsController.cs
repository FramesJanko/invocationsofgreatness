using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InvocationsofGreatness.Controllers
{
    public class SpellsController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Coldsnap()
        {
            return View();
        }
    }
}
