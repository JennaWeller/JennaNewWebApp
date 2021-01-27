using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace JennaNewWebApp.Models
{
    public class GradeCalculatorModel
    {
        [Required(ErrorMessage = "Please enter a name")]
        //a getter/setter that pulls the studentName from the form
        public String studentName { get; set; }
        //a getter/setter that pulls the assignments input box value from the form
        [Required(ErrorMessage = "Please enter a number between 0 and 100 for assignments")]
        [Range(0, 100, ErrorMessage = "Please enter a number between 0 and 100 for assignments")]
        public int assignments { get; set; }
        //a getter/setter that pulls the group project input box value from the form
        [Required(ErrorMessage = "Please enter a number between 0 and 100 for group projects")]
        [Range(0, 100, ErrorMessage = "Please enter a number between 0 and 100 for group projects")]
        public int groupProject { get; set; }
        //a getter/setter that pulls the quizzes input box value from the form
        [Required(ErrorMessage = "Please enter a number between 0 and 100 for quizzes")]
        [Range(0, 100, ErrorMessage = "Please enter a number between 0 and 100 for quizzes")]
        public int quizzes { get; set; }
        //a getter/setter that pulls the exams input box value from the form
        [Required(ErrorMessage = "Please enter a number between 0 and 100 for exams")]
        [Range(0, 100, ErrorMessage = "Please enter a number between 0 and 100 for exams")]
        public int exams { get; set; }
        [Required(ErrorMessage = "Please enter a number between 0 and 100 for intex")]
        [Range(0, 100, ErrorMessage = "Please enter a number between 0 and 100 for intex")]
        public int intex { get; set; }
    }
}
