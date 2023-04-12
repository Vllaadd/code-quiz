$(document).ready(function () {
//home page - start button•••••••••••••••••••••••••••••••••••••••••••••••
    $("#start-button").click(function () {
        showQuestionOne();
    });

    var score = 0;

//question one••••••••••••••••••••••••••••••••••••••••••••••••••••••••
    function showQuestionOne() {
        $("#start-button").remove();
        const cardEl = $("<div>").addClass("card").css({ "width": "18rem" });
        cardEl.append("<div>" + questions[0]["question"] + "</div>").addClass("card-header");
        const ulEl = $("<ul>", {class: "list-group list-group-flush"});       
        const answerOne = $("<li>")
            .addClass("list-group-item")
            .attr("id", "answer-11")
            .text(questions[0]["answers"]["11"]);
        const answerTwo = $("<li>")
            .addClass("list-group-item")
            .attr("id", "answer-12")
            .text(questions[0]["answers"]["12"]);
        const answerThree = $("<li>")
            .addClass("list-group-item")
            .attr("id","answer-13")
            .text(questions[0]["answers"]["13"]);
        const answerFour = $("<li>")
            .addClass("list-group-item")
            .attr("id", "answer-14")
            .text(questions[0]["answers"]["14"]);
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
//score for question one••••••••••••••••••••••••••••••••••••••••••••••••••


//question two••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••• 
    function showQuestionTwo() {
        $(".card").remove();
        $(".btn").remove();
        const cardEl = $("<div>").addClass("card").css({ "width": "18rem" });
        cardEl.append("<div>" + questions[1]["question"] + "</div>").addClass("card-header");
        const ulEl = $("<ul>").addClass("list-group list-group-flush");
        const answerOne = $("<li>")
            .addClass("list-group-item")
            .attr("id", "answer-21")
            .text(questions[1]["answers"]["21"]);
        const answerTwo = $("<li>")
            .addClass("list-group-item")
            .attr("id", "answer-22")
            .text(questions[1]["answers"]["22"]);
        const answerThree = $("<li>")
            .addClass("list-group-item")
            .attr("id","answer-23")
            .text(questions[1]["answers"]["23"]);
        const answerFour = $("<li>")
            .addClass("list-group-item")
            .attr("id", "answer-24")
            .text(questions[1]["answers"]["24"]);
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

//question three••••••••••••••••••••••••••••••••••••••••••••••••••••••
    function showQuestionThree() {
        $(".card").remove();
        $(".btn").remove();
        const cardEl = $("<div>").addClass("card").css({ "width": "18rem" });
        cardEl.append("<div>" + questions[2]["question"] + "</div>").addClass("card-header");
        const ulEl = $("<ul>").addClass("list-group list-group-flush");
        const answerOne = $("<li>")
            .addClass("list-group-item")
            .attr("id", "answer-31")
            .text(questions[2]["answers"]["31"]);
        const answerTwo = $("<li>")
            .addClass("list-group-item")
            .attr("id", "answer-32")
            .text(questions[2]["answers"]["32"]);
        const answerThree = $("<li>")
            .addClass("list-group-item")
            .attr("id","answer-33")
            .text(questions[2]["answers"]["33"]);
        const answerFour = $("<li>")
            .addClass("list-group-item")
            .attr("id", "answer-34")
            .text(questions[2]["answers"]["34"]);
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

 //question four••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••   
    function showQuestionFour() {
        $(".card").remove();
        $(".btn").remove();
        const cardEl = $("<div>").addClass("card").css({ "width": "18rem" });
        cardEl.append("<div>" + questions[3]["question"] + "</div>").addClass("card-header");
        const ulEl = $("<ul>").addClass("list-group list-group-flush");
        const answerOne = $("<li>")
            .addClass("list-group-item")
            .attr("id", "answer-41")
            .text(questions[3]["answers"]["41"]);
        const answerTwo = $("<li>")
            .addClass("list-group-item")
            .attr("id", "answer-42")
            .text(questions[3]["answers"]["42"]);
        const answerThree = $("<li>")
            .addClass("list-group-item")
            .attr("id","answer-43")
            .text(questions[3]["answers"]["43"]);
        const answerFour = $("<li>")
            .addClass("list-group-item")
            .attr("id", "answer-44")
            .text(questions[3]["answers"]["44"]);
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
