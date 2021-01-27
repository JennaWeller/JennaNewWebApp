using JennaNewWebApp.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JennaNewWebApp.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        [HttpGet("GradeCalculator")]
        public IActionResult GradeCalculator()
        {
            return View();
        }
        //i believe we called a post method on the gradecalculator form 
        [HttpPost("GradeCalculator")]
        //even though this is the same name as the gradecalculator above it's diff because it is calling the model
        public IActionResult GradeCalculator(GradeCalculatorModel model)
        {
            return View();
        }
    }
}
