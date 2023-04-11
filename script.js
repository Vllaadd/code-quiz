$(document).ready(function () {
    $("#question-two").hide();

    $("#start-button").click(function(){
        showQuestionOne();
    });

    function showQuestionOne(){
        $("#start-button").remove();
        $(".quiz-space").append("<button>" + questions[0]["question"] + "</button><br/>");
        $(".quiz-space").append("<button>" + questions[0]["answers"]["11"] + "</button>");
        $(".quiz-space").append("<button>" + questions[0]["answers"]["12"] + "</button>");
        $(".quiz-space").append("<button>" + questions[0]["answers"]["13"] + "</button>");
        $(".quiz-space").append("<button>" + questions[0]["answers"]["14"] + "</button><br/><br/>");
        $(".quiz-space").append($("<button>").attr("id", "question-two").text("Go to question two").appendTo(".quiz-space"));
      };


    $("#question-two").click(function(){
    showQuestionTwo();
   });

   function showQuestionTwo(){
    console.log("Hi, I am finally working!");
   };
});
