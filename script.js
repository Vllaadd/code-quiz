$(document).ready(function () {
//home page - start button•••••••••••••••••••••••••••••••••••••••••••••••
    $("#start-button").click(function () {
        showQuestionOne();
    });

    //question one••••••••••••••••••••••••••••••••••••••••••••••••••••••••
    function showQuestionOne() {
        $("#start-button").remove();
        $(".quiz-space").append("<button>" + questions[0]["question"] + "</button><br/>");
        $(".quiz-space").append("<button>" + questions[0]["answers"]["11"] + "</button>");
        $(".quiz-space").append("<button>" + questions[0]["answers"]["12"] + "</button>");
        $(".quiz-space").append("<button>" + questions[0]["answers"]["13"] + "</button>");
        $(".quiz-space").append("<button>" + questions[0]["answers"]["14"] + "</button><br/><br/>");
        $("<button>", {
            id: "question-two",
            text: "Go to question two"
        }).appendTo(".quiz-space");
        $("#question-two").click(function () {
            showQuestionTwo();
        });
    };

//question two••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••• 
    function showQuestionTwo() {
        $("#question-two").remove();
        $(".quiz-space").append("<button>" + questions[1]["question"] + "</button><br/>");
        $(".quiz-space").append("<button>" + questions[1]["answers"]["21"] + "</button>");
        $(".quiz-space").append("<button>" + questions[1]["answers"]["22"] + "</button>");
        $(".quiz-space").append("<button>" + questions[1]["answers"]["23"] + "</button>");
        $(".quiz-space").append("<button>" + questions[1]["answers"]["24"] + "</button><br/><br/>");
        $("<button>", {
            id: "question-three",
            text: "Go to question three"
        }).appendTo(".quiz-space");
        $("#question-three").click(function () {
            showQuestionThree();
        });
    };

    function showQuestionThree() {
        $("#question-three").remove();
        $(".quiz-space").append("<button>" + questions[2]["question"] + "</button><br/>");
        $(".quiz-space").append("<button>" + questions[2]["answers"]["31"] + "</button>");
        $(".quiz-space").append("<button>" + questions[2]["answers"]["32"] + "</button>");
        $(".quiz-space").append("<button>" + questions[2]["answers"]["33"] + "</button>");
        $(".quiz-space").append("<button>" + questions[2]["answers"]["34"] + "</button><br/><br/>");
        $("<button>", {
            id: "question-four",
            text: "Go to question four"
        }).appendTo(".quiz-space");
        $("#question-four").click(function () {
            showQuestionFour();
        });
    };

    function showQuestionFour() {
        $("#question-three").remove();
        $(".quiz-space").append("<button>" + questions[3]["question"] + "</button><br/>");
        $(".quiz-space").append("<button>" + questions[3]["answers"]["41"] + "</button>");
        $(".quiz-space").append("<button>" + questions[3]["answers"]["42"] + "</button>");
        $(".quiz-space").append("<button>" + questions[3]["answers"]["43"] + "</button>");
        $(".quiz-space").append("<button>" + questions[3]["answers"]["44"] + "</button><br/><br/>");
        $("<button>", {
            id: "score-button",
            text: "See Your Score"
        }).appendTo(".quiz-space");
        $("#score-button").click(function () {
            seeYourScore();
        });
    };

    function seeYourScore(){
        console.log("Congratulations! Your Score is One million Points")
    }

});
