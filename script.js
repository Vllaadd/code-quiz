var score = 0;
var currentQuestion = 0;

function quizScore(answerID) {
  if (answerID == questions[currentQuestion].correctAnswer) {
    score += 1;
  } else {
    score -= 0.5;
  }
  $("#score").text("Score: " + score);
}

function showResults() {
  $("#score").text("Score: " + score);
}

function showQuestion(questionNumber) {
  $(".card").remove();
  $(".btn").remove();
  const cardEl = $("<div>")
    .addClass("card")
    .css({ width: "18rem" })
    .append($("<div>").addClass("card-header").text(questions[questionNumber].question));
  const ulEl = $("<ul>", { class: "list-group list-group-flush" });
  const answers = questions[questionNumber].answers;
  for (let answerID in answers) {
    const answer = $("<li>")
      .addClass("list-group-item")
      .attr("id", "answer-" + questionNumber + answerID)
      .text(answers[answerID])
      .click(function () {
        $(this).addClass("active");
        $("#next-button").prop("disabled", false);
        const selectedAnswerID = $(this).attr("id");
        quizScore(selectedAnswerID);
      });
      ulEl.append(answer);
  }
  $(".quiz-space").append(cardEl.append(ulEl));
  if (currentQuestion < questions.length - 1) {
    $("<button>", {
      class: "btn btn-primary",
      id: "next-button",
      text: "Next Question",
      disabled: true,
    }).appendTo(".quiz-space")
    .click(function () {
      currentQuestion++;
      showQuestion(currentQuestion);
    });
  } else {
    $("<button>", {
      class: "btn btn-primary",
      id: "next-button",
      text: "Show Results",
      disabled: true,
    }).appendTo(".quiz-space")
    .click(function () {
      showResults();
    });
  }
}

$(document).ready(function () {
  $("#start-button").click(function () {
    showQuestion(0);
  });
});


