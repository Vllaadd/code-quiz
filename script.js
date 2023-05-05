var score = 0;
var currentQuestion = 0;

function quizScore(answerID) {
  if (answerID == questions[currentQuestion].correctAnswer) {
    score += 1;
  } else {
    score -= 0.5;
  }
}

function showResults() {
  $("#scoreDiv").text("Score: " + score);
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
      });
      ulEl.append(answer);
  }
  $(".quiz-space").append(cardEl.append(ulEl));
  if (currentQuestion < questions.length - 1) {
    $("<button>", {
      class: "btn btn-primary",
      id: "next-button",
      text: "Next Question " + (questionNumber + 1),
      disabled: true,
    }).appendTo(".quiz-space")
    .click(function () {
      const selectedAnswerID = $(".active").attr("id");
      quizScore(selectedAnswerID);
      currentQuestion++;
      if (currentQuestion < questions.length) {
        showQuestion(currentQuestion);
      } else {
        showResults();
      }
    });
  }
}

$(document).ready(function () {
  $("#start-button").click(function () {
    showQuestion(0);
  });
});


