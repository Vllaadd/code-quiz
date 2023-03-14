$(document).ready(function () {


    $("#start-button").click(questionOne);
    $("#question-two").click(questionTwo);

// click button to start the time and show questions 
    function questionOne() {
        showScore();
        questionOne();
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

    function questionOne(){
        $("#start-button").remove();
        console.log(questions[0]["answers"]["12"]);
        $(".quiz-space").append("<button>" + questions[0]["question"] + "</button><br/>");
        $(".quiz-space").append("<button>" + questions[0]["answers"]["11"] + "</button>");
        $(".quiz-space").append("<button>" + questions[0]["answers"]["12"] + "</button>");
        $(".quiz-space").append("<button>" + questions[0]["answers"]["13"] + "</button>");
        $(".quiz-space").append("<button>" + questions[0]["answers"]["14"] + "</button><br/><br/>");
        $(".quiz-space").append("<button id='question-two'>Go to question two</button>");
      }

    function questionTwo(){
        console.log("Hi, I am finally working .... or not...");
    }

    
});