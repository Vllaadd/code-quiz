$(document).ready(function () {


    $("button").click(startButton);

// click button to start the time and show questions 
    function startButton() {
        showScore();
        startQuiz();
        let seconds = 5;
        const intervAl = setInterval(()=>{
            seconds--;
            console.log(seconds);
            $("#timeDiv").html("Time: " + seconds);
            if(seconds<0){
                clearInterval(intervAl);
                $("#timeDiv").html("Time Is Up!");
            };
        },1000);
    }

// show score on page
    function showScore(){
        $("#scoreDiv").append("<h5>Score:<span></span></h5>");
    }

    function startQuiz(){
        questions.forEach(function(question){
            $("#startBttn").remove();
        let questionDiv = $("<button></button>").text(question.answers[11] ++)
        // .text(question.answers[12]).text(question.answers[13]).text(question.answers[14]).text(question.answers[15]);
        // console.log(question.answers)
        // questionOne.text(question.answers[21]);
        $(".quizSpace").append(questionDiv);
        })
        
        // let questionOne = $("<button></button>").text("Question 1");
        // let questionTwo = $("<button></button>").text("Question 2");
        // let questionThree = $("<button></button>").text("Question 3");
        // let questionFour = $("<button></button>").text("Question 4");
        // $(".quizSpace").append(questionTwo, questionThree, questionFour);
    }
        
    
    
    // function questionOne(question){
    //     let questionOne = $("<button></button>");
    //     let questionOneString = JSON.stringify(question);
    //     let questionOneParse = JSON.parse(questionOneString);
    //     questionOne.text(questions[1][1]);
    //     $(".quizSpace").append(questionOne);
    //     }

});
 
