$(document).ready(function () {
//home page - start button•••••••••••••••••••••••••••••••••••••••••••••••
    $("#start-button").click(function () {
        showQuestionOne();
    });

//question one••••••••••••••••••••••••••••••••••••••••••••••••••••••••
    function showQuestionOne() {
        $("#start-button").remove();
        const cardEl = $("<div>").addClass("card").css({ "width": "18rem" });
        cardEl.append("<div>" + questions[0]["question"] + "</div>").addClass("card-header");
        const ulEl = $("<ul>", {class: "list-group list-group-flush"});       
        const answerOne = $("<li>" + questions[0]["answers"]["11"] + "</li>").addClass("list-group-item");
        const answerTwo = $("<li>" + questions[0]["answers"]["12"] + "</li>").addClass("list-group-item");
        const answerThree = $("<li>" + questions[0]["answers"]["13"] + "</li>").addClass("list-group-item");
        const answerFour = $("<li>" + questions[0]["answers"]["14"] + "</li>").addClass("list-group-item");
        $(".quiz-space").append(cardEl.append(ulEl.append(answerOne, answerTwo, answerThree, answerFour)));
        $("<button>", {
            class: "btn btn-secondary",
            id: "question-two",
            text: "Go to question two"
        }).appendTo(".quiz-space");
        $("#question-two").click(function () {
            showQuestionTwo();
        });
      }

//question two••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••• 
    function showQuestionTwo() {
        $(".card").remove();
        $(".btn").remove();
        const cardEl = $("<div>").addClass("card").css({ "width": "18rem" });
        cardEl.append("<div>" + questions[1]["question"] + "</div>").addClass("card-header");
        const ulEl = $("<ul>").addClass("list-group list-group-flush");
        const answerOne = $("<li>" + questions[1]["answers"]["21"] + "</li>").addClass("list-group-item ");
        const answerTwo = $("<li>" + questions[1]["answers"]["22"] + "</li>").addClass("list-group-item");
        const answerThree = $("<li>" + questions[1]["answers"]["23"] + "</li>").addClass("list-group-item");
        const answerFour = $("<li>" + questions[1]["answers"]["24"] + "</li>").addClass("list-group-item");
        $(".quiz-space").append(cardEl.append(ulEl.append(answerOne, answerTwo, answerThree, answerFour)));

        $("<button>", {
            class: "btn btn-secondary",
            id: "question-three",
            text: "Go to question three"
        }).appendTo(".quiz-space");
        $("#question-three").click(function () {
            showQuestionThree();
        });
    };


    function showQuestionThree() {
        $(".card").remove();
        $(".btn").remove();
        const cardEl = $("<div>").addClass("card").css({ "width": "18rem" });
        cardEl.append("<div>" + questions[2]["question"] + "</div>").addClass("card-header");
        const ulEl = $("<ul>").addClass("list-group list-group-flush");
        const answerOne = $("<li>" + questions[2]["answers"]["31"] + "</li>").addClass("list-group-item");
        const answerTwo = $("<li>" + questions[2]["answers"]["32"] + "</li>").addClass("list-group-item");
        const answerThree = $("<li>" + questions[2]["answers"]["33"] + "</li>").addClass("list-group-item");
        const answerFour = $("<li>" + questions[2]["answers"]["34"] + "</li>").addClass("list-group-item");
        $(".quiz-space").append(cardEl.append(ulEl.append(answerOne, answerTwo, answerThree, answerFour)));

        $("<button>", {
            class: "btn btn-secondary",
            id: "question-four",
            text: "Go to question four"
        }).appendTo(".quiz-space");
        $("#question-four").click(function () {
            showQuestionFour();
        });
    };

    function showQuestionFour() {
        $(".card").remove();
        $(".btn").remove();
        const cardEl = $("<div>").addClass("card").css({ "width": "18rem" });
        cardEl.append("<div>" + questions[3]["question"] + "</div>").addClass("card-header");
        const ulEl = $("<ul>").addClass("list-group list-group-flush");
        const answerOne = $("<li>" + questions[3]["answers"]["41"] + "</li>").addClass("list-group-item");
        const answerTwo = $("<li>" + questions[3]["answers"]["42"] + "</li>").addClass("list-group-item");
        const answerThree = $("<li>" + questions[3]["answers"]["43"] + "</li>").addClass("list-group-item");
        const answerFour = $("<li>" + questions[3]["answers"]["44"] + "</li>").addClass("list-group-item");
        $(".quiz-space").append(cardEl.append(ulEl.append(answerOne, answerTwo, answerThree, answerFour)));

        $("<button>", {
            class: "btn btn-secondary",
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
