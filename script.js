$(document).ready(function () {


    $("button").click(timerCountdown);

    function timerCountdown() {
        showElements();
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

    function showElements() {
        $("#emptyTime").append("<h5>Time:<span id='current-time'></span></h5>");
        $("#emptyScore").append("<h5>Score:<span></span></h5>");
    }


});
 
