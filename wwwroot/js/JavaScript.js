
$('#submitButton').click(function () {
    //grabbing the value from the input boxes and assigning it to variables to use in grade calculation 
    //declaring variables
    var studentName = $("#studentName").val();
    var assignments = parseInt($("#assignments").val());
    var groupProject = parseInt($("#groupProject").val());
    var quizzes = parseInt($("#quizzes").val());
    var exams = parseInt($("#exams").val());
    var intex = parseInt($("#intex").val());

    if (assignments < 0 || assignments > 100 || groupProject < 0 || groupProject > 100 || quizzes < 0 || quizzes > 100 || exams < 0 || exams > 100 || intex < 0 || intex > 100) {
        alert("Please only input numbers between 0 and 100");
        return;
    }
    //calculating the overall grade
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

    alert(studentName + ' earned a final grade of a(n) ' + letterGrade + " with a percentage of " + finalGrade + "%");

});


