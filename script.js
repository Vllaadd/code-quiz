$(document).ready(function () {


    $("button").click(startButton);

// click button to start the time and show questions 
    function startButton() {
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
        $("#startBttn").remove();
        questionTwo();
        $(".quiz-space").append("<button id='questionOneBttn' onclick'questionTwo'>Question Two</button>");
       for(let i=0; i<questions.length; i++){
        console.log(questions["question"], questions[0].answers["11"], questions[0].answers["12"], questions[0].answers["13"], questions[0].answers["14"]);
       }
    }
    function questionTwo(){
        $("#questionOneBttn").remove();
        questionThree();
        $(".quiz-space").append("<button id='questionTwoBttn' onclick'questionThree'>Question Two</button>");
       for(let i=0; i<questions.length; i++){
        console.log(questions["question"], questions[1].answers["21"], questions[1].answers["22"], questions[1].answers["23"], questions[1].answers["24"]);
       }
    }
    function questionThree(){
        $("#questionTwoBttn").remove();
        questionFour();
        $(".quiz-space").append("<button id='questionThreeBttn' onclick'questionFour'>Question Two</button>");
       for(let i=0; i<questions.length; i++){
        console.log(questions["question"], questions[2].answers["31"], questions[2].answers["32"], questions[2].answers["33"], questions[2].answers["34"]);
       }
    }
    function questionFour(){
        $("#questionThreeBttn").remove();
        $(".quiz-space").append("<button id='questionFourBttn' onclick'questionFour'>Question Two</button>");
       for(let i=0; i<questions.length; i++){
        console.log(questions["question"], questions[3].answers["41"], questions[3].answers["41"], questions[3].answers["43"], questions[3].answers["44"]);
       }
    }
});