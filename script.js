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
        let display = $(".quizSpace");
       questions.forEach(question =>{
        let questOne = questions[question]
       let qOne = $("<h5></h5>").text(questOne[0]);
       qOne.append(display);
           })
        }
    


});
 
// Object.values(questions).forEach(question => {
//     let questionString = JSON.stringify(question);
//     let questionParsed = JSON.parse(questionString);
//     console.log(questionParsed);
//    let finalQuestion = $("<p>").text(questionParsed);
//     $(".quizSpace").append(finalQuestion);
// })