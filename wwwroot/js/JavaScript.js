//declaring variables
var studentName;
var assignments;
var groupProject;
var quizzes;
var exams;
var intex;
var finalGrade;
var letterGrade;
var submit = document.getElementById("calculategrade");

submit.addEventListener("click", function () {
    //grabbing the value from the input boxes and assigning it to variables to use in grade calculation 
    studentName = document.getElementById("studentName").value;
    assignments = parseInt(document.getElementById("assignments").value);
    groupProject = parseInt(document.getElementById("groupProject").value);
    quizzes = parseInt(document.getElementById("quizzes").value);
    exams = parseInt(document.getElementById("exams").value);
    intex = parseInt(document.getElementById("intex").value);


    finalGrade = (assignments * .50) + (groupProject * .10) + (quizzes * .10) + (exams * .20) + (intex * .10);
    //if statements to figure out the letter grade based on their final grade percentage 
    if (finalGrade >= 94) {
        letterGrade = "A";
    }
    else if (finalGrade >= 90) {
        letterGrade = "A-";
    }
    else if (finalGrade >= 87) {
        letterGrade = "B+";
    }
    else if (finalGrade >= 84) {
        letterGrade = "B";
    }
    else if (finalGrade >= 80) {
        letterGrade = "B-";
    }
    else if (finalGrade >= 77) {
        letterGrade = "C+";
    }
    else if (finalGrade >= 74) {
        letterGrade = "C";
    }
    else if (finalGrade >= 70) {
        letterGrade = "C-";
    }
    else if (finalGrade >= 67) {
        letterGrade = "D+";
    }
    else if (finalGrade >= 64) {
        letterGrade = "D";
    }
    else if (finalGrade >= 60) {
        letterGrade = "D-";
    }
    else {
        letterGrade = "E";
    }
    //pop-up to say what grade the student earned - both letter and percentage 
    alert(studentName + ' earned a final grade of a ' + letterGrade + " with a percentage of " + finalGrade + "%");

});


