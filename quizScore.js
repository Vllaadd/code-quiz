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
            quizscore();
          }



        var score = $("#score").text = 0; 

        function quizScore(answerID, correctAnswer){
            if(answerID == correctAnswer){
                return  + 1
             } else{
                reuturn  - 0.5;
                }
            }
        }

        });