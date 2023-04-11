$(document).ready(function () {
    $("#start-button").click(function(){
        showScore();
        showQuestionOne();
    });

// show score on page
    function showScore(){
        $("#scoreDiv").append("<h5>Score:<span></span></h5>");
    }



    function showQuestionOne(){
        $("#start-button").remove();
        $(".quiz-space").append("<button>" + questions[0]["question"] + "</button><br/>");
        $(".quiz-space").append("<button>" + questions[0]["answers"]["11"] + "</button>");
        $(".quiz-space").append("<button>" + questions[0]["answers"]["12"] + "</button>");
        $(".quiz-space").append("<button>" + questions[0]["answers"]["13"] + "</button>");
        $(".quiz-space").append("<button>" + questions[0]["answers"]["14"] + "</button><br/><br/>");
        $("#question-two").show();
      }

   $("#question-two").on("click", "#question-two", function(){
    showQuestionTwo();
   });

   function showQuestionTwo(){
    console.log("Hi, I am finally working!");
   };

});