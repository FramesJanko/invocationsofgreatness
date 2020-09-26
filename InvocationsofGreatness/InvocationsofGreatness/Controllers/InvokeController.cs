using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using InvocationsofGreatness.ViewModels;

namespace InvocationsofGreatness.Controllers
{
    public class InvokeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        [HttpPost]
        public IActionResult Index(InvokeViewModel model)
        {
            int[] invocationAction = model.Invoke();
            if(invocationAction[0] == 3)
            {
                return RedirectToAction("Coldsnap");
            }
            else if (invocationAction[0] == 2 && invocationAction[1] == 1)
            {
                return RedirectToAction("Ghostwalk");
            }
            else if (invocationAction[0] == 2 && invocationAction[2] == 1)
            {
                return RedirectToAction("Icewall");
            }
            else if (invocationAction[0] == 1 && invocationAction[1] == 2)
            {
                return RedirectToAction("Tornado");
            }
            else if (invocationAction[0] == 1 && invocationAction[2] == 2)
            {
                return RedirectToAction("Forgespirit");
            }
            else if (invocationAction[0] == 1 && invocationAction[1] == 1 && invocationAction[2] == 1)
            {
                return RedirectToAction("Deafeningblast");
            }
            else if (invocationAction[1] == 2 && invocationAction[2] == 1)
            {
                return RedirectToAction("Alacrity");
            }
            else if (invocationAction[2] == 2 && invocationAction[1] == 1)
            {
                return RedirectToAction("Meteor");
            }
            else if (invocationAction[2] == 3)
            {
                return RedirectToAction("Sunstrike");
            }
            else if (invocationAction[1] == 3)
            {
                return RedirectToAction("EMP");
            }
            else
            {
                return View();
            }
        }
        public IActionResult Coldsnap()
        {
            return View();
        }
        public IActionResult Tornado()
        {
            return View();
        }
        public IActionResult Icewall()
        {
            return View();
        }
        public IActionResult Ghostwalk()
        {
            return View();
        }
        public IActionResult Forgespirit()
        {
            return View();
        }
        public IActionResult Alacrity()
        {
            return View();
        }
        public IActionResult Sunstrike()
        {
            return View();
        }
        public IActionResult Meteor()
        {
            return View();
        }
        public IActionResult EMP()
        {
            return View();
        }
        public IActionResult Deafeningblast()
        {
            return View();
        }
    }
}
