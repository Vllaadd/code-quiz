//calculating score••••••••••••••••••••••••••••••••••••••••••••••••••
    var score = 0;

    function quizScore(answerID){
            if(answerID == questions[currentQuestion].correctAnswer){
                score += 1;
            }else{
                score -=0.5;
            }
        }

        function showResults(){
            $("#score").text(score);
        }


        var currentQuestion = 0;

        $(document).ready(function () {
            $("#start-button").click(function () {
                showQuestionOne;
            });

            $("#question-two").click(function () {
                showQuestionTwo;
            });
            $("#question-three").click(function () {
                showQuestionThree;
            });
            $("#question-four").click(function () {
                showQuestionFour;
            });


        $(".quiz-space").on("click", ".list-group-item", function(){
            var answerID = $(this).attr("id");
            quizScore(answerID);
            currentQuestion +=1;
            if(currentQuestion < questions.length){
                showQuestion(questions[currentQuestion]);
            }else{
                showResults();
            }
        })

//question one••••••••••••••••••••••••••••••••••••••••••••••••••••••••
    function showQuestionOne() {
        $("#start-button").remove();
        const cardEl = $("<div>").addClass("card").css({ "width": "18rem" });
        cardEl.append("<div>" + questions[0]["question"] + "</div>").addClass("card-header");
        const ulEl = $("<ul>", {class: "list-group list-group-flush"});       
        const answerOne = $("<li>")
            .addClass("list-group-item")
            .attr("id", "answer-11")
            .text(questions[0]["answers"]["11"])
            .click(function(){
                quizScore(11);
            })
        const answerTwo = $("<li>")
            .addClass("list-group-item")
            .attr("id", "answer-12")
            .text(questions[0]["answers"]["12"])
            .click(function(){
                quizScore(12);
            })
        const answerThree = $("<li>")
            .addClass("list-group-item")
            .attr("id","answer-13")
            .text(questions[0]["answers"]["13"])
            .click(function(){
                quizScore(13);
            })
        const answerFour = $("<li>")
            .addClass("list-group-item")
            .attr("id", "answer-14")
            .text(questions[0]["answers"]["14"])
            .click(function(){
                quizScore(14);
            })
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
        const cardEl = $("<div>")
            .addClass("card")
            .css({ "width": "18rem" });
        cardEl.append("<div>" + questions[1]["question"] + "</div>")
              .addClass("card-header");
        const ulEl = $("<ul>")
                    .addClass("list-group list-group-flush");
        const answerOne = $("<li>")
            .addClass("list-group-item")
            .attr("id", "answer-21")
            .text(questions[1]["answers"]["21"])
            .click(function(){
                quizScore(21);
            })
        const answerTwo = $("<li>")
            .addClass("list-group-item")
            .attr("id", "answer-22")
            .text(questions[1]["answers"]["22"])
            .click(function(){
                quizScore(22);
            })
        const answerThree = $("<li>")
            .addClass("list-group-item")
            .attr("id","answer-23")
            .text(questions[1]["answers"]["23"])
            .click(function(){
                quizScore(23);
            })
        const answerFour = $("<li>")
            .addClass("list-group-item")
            .attr("id", "answer-24")
            .text(questions[1]["answers"]["24"])
            .click(function(){
                quizScore(24);
            })
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
            .text(questions[2]["answers"]["31"])
            .click(function(){
                quizScore(31);
            })
        const answerTwo = $("<li>")
            .addClass("list-group-item")
            .attr("id", "answer-32")
            .text(questions[2]["answers"]["32"])
            .click(function(){
                quizScore(32);
            })
        const answerThree = $("<li>")
            .addClass("list-group-item")
            .attr("id","answer-33")
            .text(questions[2]["answers"]["33"])
            .click(function(){
                quizScore(33);
            })
        const answerFour = $("<li>")
            .addClass("list-group-item")
            .attr("id", "answer-34")
            .text(questions[2]["answers"]["34"])
            .click(function(){
                quizScore(34);
            })
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
            .text(questions[3]["answers"]["41"])
            .click(function(){
                quizScore(41);
            })
        const answerTwo = $("<li>")
            .addClass("list-group-item")
            .attr("id", "answer-42")
            .text(questions[3]["answers"]["42"])
            .click(function(){
                quizScore(42);
            })
        const answerThree = $("<li>")
            .addClass("list-group-item")
            .attr("id","answer-43")
            .text(questions[3]["answers"]["43"])
            .click(function(){
                quizScore(43);
            })
        const answerFour = $("<li>")
            .addClass("list-group-item")
            .attr("id", "answer-44")
            .text(questions[3]["answers"]["44"])
            .click(function(){
                quizScore(44);
            })
        $(".quiz-space").append(cardEl.append(ulEl.append(answerOne, answerTwo, answerThree, answerFour)));

        $("<button>", {
            class: "btn btn-secondary",
            id: "score-button",
            text: "Game Over"
        }).appendTo(".quiz-space");
       
    };

});
