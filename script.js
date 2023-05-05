var score = 0;

function quizScore(answerID) {
  if (answerID == questions[currentQuestion].correctAnswer) {
    score += 1;
  } else {
    score -= 0.5;
  }
}

function showResults() {
  $("#score").text(score);
}

var currentQuestion = 0;

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
        quizScore(questionNumber + answerID);
        currentQuestion++;
        if (currentQuestion < questions.length) {
          showQuestion(currentQuestion);
        } else {
          showResults();
        }
        showResults();
      });
    ulEl.append(answer);
  }
  $(".quiz-space").append(cardEl.append(ulEl));
  if (currentQuestion < questions.length - 1) {
    $("<button>", {
      class: "btn btn-primary",
      id: "question-" + (questionNumber + 1),
      text: "Go to question " + (questionNumber + 1),
    }).appendTo(".quiz-space")
      .click(function () {
        showQuestion(questionNumber + 1);
      });
  }
}

$(document).ready(function () {
  $("#start-button").click(function () {
    showQuestion(0);
  });
});


