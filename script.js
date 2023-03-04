$(document).ready(function () {


    $("button").click(timerCountdown);

// click button to start the time and show questions 
    function timerCountdown() {
        showScore();
        startQuiz();
        let seconds = 5;
        const intervAl = setInterval(()=>{
            seconds--;
            console.log(seconds);
            $("#emptyTime").html("Time: " + seconds);
            if(seconds<0){
                clearInterval(intervAl);
                $("#emptyTime").html("Time Is Up!");
            };
        },1000);
    }

// show score on page
    function showScore(){
        $("#emptyScore").append("<h5>Score:<span></span></h5>");
    }

    function startQuiz(){
        $("#startBttn").remove();
        let questionOne = $("<button></button>").text("Question 1");
        let questionTwo = $("<button></button>").text("Question 2");
        let questionThree = $("<button></button>").text("Question 3");
        let questionFour = $("<button></button>").text("Question 4");
        $("#quizSpace").append(questionOne, questionTwo, questionThree, questionFour);
    }


});
 
