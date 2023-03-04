$(document).ready(function () {


    $("button").click(startButton);

// click button to start the time and show questions 
    function startButton() {
        showScore();
        startQuiz();
        // let seconds = 5;
        // const intervAl = setInterval(()=>{
        //     seconds--;
        //     console.log(seconds);
        //     $("#timeDiv").html("Time: " + seconds);
        //     if(seconds<0){
        //         clearInterval(intervAl);
        //         $("#timeDiv").html("Time Is Up!");
        //     };
        // },1000);
    }

// show score on page
    function showScore(){
        $("#scoreDiv").append("<h5>Score:<span></span></h5>");
    }

    function startQuiz(){
        $("#startBttn").remove();
            let keys = Object.keys(questions);
            keys.forEach((key, index)=>{
            let questionsBttn = $("<button></button>").html(`${key} : ${questions[key]}`);
            $(".quizSpace").append(questionsBttn);
            });
        }
        // let questionOne = $("<button></button>").text(question.answers[11]);
        // let questionTwo = $("<button></button>").text(question.answers[12]);
        // let questionThree = $("<button></button>").text(question.answers[13]);
        // let questionFour = $("<button></button>").text(question.answers[14]);
        // let questionFive = $("<button></button>").text(question.answers[15]);
        // let questions = [questionOne, questionTwo, questionThree, questionFour, questionFive];
        // $(".quizSpace").append(questions);
        // })

});
 
