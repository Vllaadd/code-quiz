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
        $(".quiz-space").append("<button onclick'questionTwo'>Question Two</button>");
       for(let i=0; i<questions.length; i++){
        console.log(questions["question"], questions[0].answers["11"], questions[0].answers["12"], questions[0].answers["13"], questions[0].answers["14"]);
       }
    }


});