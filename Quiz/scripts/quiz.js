(function() {
  // html elements
  let submit = $("#submit");
  let question = $("#quiz");
  let nextQuestion = $("#nextQuestion");

  // other variables
  let questionNumber = 0;
  let questionLevel = 0;
  let currentQuestion;
  let pathQuestion = [];
  let user = 0;
  let second = false;

  const questionsMusic = [
    [{
      question: "<img src='../ressources/EP/image_question1.png' alt='partition' width='70%'>",
      answers: {
        a: "<audio controls src='../ressources/EP/1.mp3'/></audio>",
        b: "<audio controls src='../ressources/EP/2.mp3'/></audio>",
      },
      correctAnswer: "a"
    }],
    [{
        question: "<img src='../ressources/S1E/image_question22.png' alt='partition' width='70%'>",
        answers: {
          a: "<audio controls src='../ressources/S1E/1.mp3' preload='auto' />",
          b: "<audio controls src='../ressources/S1E/2.mp3' preload='auto' />"
        },
        correctAnswer: "b"
      },
      {
        question: "<img src='../ressources/S1N/image_question21.png' alt='partition' width='70%'>",
        answers: {
          a: "<audio controls src='../ressources/S1N/1.mp3' preload='auto' />",
          b: "<audio controls src='../ressources/S1N/2.mp3' preload='auto' />",
          c: "<audio controls src='../ressources/S1N/3.mp3' preload='auto' />"
        },
        correctAnswer: "a"
      }
    ],
    [{
        question: "<img src='../ressources/S2E/image_question33.png' alt='partition' width='30%'>",
        answers: {
          a: "<audio controls src='../ressources/S2E/1.mp3' preload='auto' />",
          b: "<audio controls src='../ressources/S2E/2.mp3' preload='auto' />",
        },
        correctAnswer: "a"
      },
      {
        question: "<img src='../ressources/S2N/image_question32.png' alt='partition' width='50%'>",
        answers: {
          a: "<audio controls src='../ressources/S2N/1.mp3' preload='auto' />",
          b: "<audio controls src='../ressources/S2N/2.mp3' preload='auto' />",
          c: "<audio controls src='../ressources/S2N/3.mp3' preload='auto' />"
        },
        correctAnswer: "b"
      },
      {
        question: "<img src='../ressources/S2H/image_question31.png' alt='partition' width='70%'>",
        answers: {
          a: "<audio controls src='../ressources/S2H/1.mp3' preload='auto' />",
          b: "<audio controls src='../ressources/S2H/2.mp3' preload='auto' />",
          c: "<audio controls src='../ressources/S2H/3.mp3' preload='auto' />",
          d: "<audio controls src='../ressources/S2H/4.mp3' preload='auto' />"
        },
        correctAnswer: "a"
      }
    ],
    [{
        question: "<img src='../ressources/S3E/image_question43.png' alt='partition' width='70%'>",
        answers: {
          a: "<audio controls src='../ressources/S3E/1.mp3' preload='auto' />",
          b: "<audio controls src='../ressources/S3E/2.mp3' preload='auto' />"
        },
        correctAnswer: "b"
      },
      {
        question: "<img src='../ressources/S3N/image_question42.png' alt='partition' width='70%'>",
        answers: {
          a: "<audio controls src='../ressources/S3N/1.mp3' preload='auto' />",
          b: "<audio controls src='../ressources/S3N/2.mp3' preload='auto' />",
          c: "<audio controls src='../ressources/S3N/3.mp3' preload='auto' />"
        },
        correctAnswer: "b"
      },
      {
        question: "<img src='../ressources/S3H/image_question41.png' alt='partition' width='70%'>",
        answers: {
          a: "<audio controls src='../ressources/S3H/1.mp3' preload='auto' />",
          b: "<audio controls src='../ressources/S3H/2.mp3' preload='auto' />",
          c: "<audio controls src='../ressources/S3H/3.mp3' preload='auto' />",
          d: "<audio controls src='../ressources/S3H/4.mp3' preload='auto' />"
        },
        correctAnswer: "d"
      }
    ]
  ];

  const questionsSheet = [
    [{
      question: "<audio controls src='../ressources/LP/Zarathoustra_.mp3' preload='auto' />",
      answers: {
        a: "<img src='../ressources/LP/solution.png' alt='partition' width='70%'>",
        b: "<img src='../ressources/LP/1.png' alt='partition' width='70%'>"
      },
      correctAnswer: "a"
    }],
    [{
        question: "<audio controls src='../ressources/S4E/joke.mp3' preload='auto' />",
        answers: {
          a: "<img src='../ressources/S4E/2.png' alt='partition' width='70%'>",
          b: "<img src='../ressources/S4E/3.png' alt='partition' width='70%'>"
        },
        correctAnswer: "b"
      },
      {
        question: "<audio controls src='../ressources/S4N/cave.mp3' preload='auto' />",
        answers: {
          a: "<img src='../ressources/S4N/2.png' alt='partition' width='70%'>",
          b: "<img src='../ressources/S4N/3.png' alt='partition' width='70%'>",
          c: "<img src='../ressources/S4N/thecavesolution.png' alt='partition' width='70%'>"
        },
        correctAnswer: "c"
      }
    ],
    [{
        question: "<audio controls src='../ressources/S5E/cant.mp3' preload='auto' />",
        answers: {
          a: "<img src='../ressources/S5E/1.png' alt='partition' width='70%'>",
          b: "<img src='../ressources/S5E/2.png' alt='partition' width='70%'>"
        },
        correctAnswer: "b"
      },
      {
        question: "<audio controls src='../ressources/S5N/friends.mp3' preload='auto' />",
        answers: {
          a: "<img src='../ressources/S5N/1.png' alt='partition' width='70%'>",
          b: "<img src='../ressources/S5N/2.png' alt='partition' width='70%'>",
          c: "<img src='../ressources/S5N/3.png' alt='partition' width='70%'>"
        },
        correctAnswer: "a"
      },
      {
        question: "<audio controls src='../ressources/S5H/tango.mp3' preload='auto' />",
        answers: {
          a: "<img src='../ressources/S5H/1.png' alt='partition' width='70%'>",
          b: "<img src='../ressources/S5H/2.png' alt='partition' width='70%'>",
          c: "<img src='../ressources/S5H/3.png' alt='partition' width='70%'>",
          d: "<img src='../ressources/S5H/4.png' alt='partition' width='70%'>"
        },
        correctAnswer: "d"
      }
    ],
    [{
        question: "<audio controls src='../ressources/S6E/like.mp3' preload='auto' />",
        answers: {
          a: "<img src='../ressources/S6E/1.png' alt='partition' width='70%'>",
          b: "<img src='../ressources/S6E/2.png' alt='partition' width='70%'>"
        },
        correctAnswer: "b"
      },
      {
        question: "<audio controls src='../ressources/S6N/cash.mp3' preload='auto' />",
        answers: {
          a: "<img src='../ressources/S6N/1.png' alt='partition' width='70%'>",
          b: "<img src='../ressources/S6N/2.png' alt='partition' width='70%'>",
          c: "<img src='../ressources/S6N/3.png' alt='partition' width='70%'>"
        },
        correctAnswer: "c"
      },
      {
        question: "<audio controls src='../ressources/S6H/78.mp3' preload='auto' />",
        answers: {
          a: "<img src='../ressources/S6H/1.png' alt='partition' width='70%'>",
          b: "<img src='../ressources/S6H/2.png' alt='partition' width='70%'>",
          c: "<img src='../ressources/S6H/3.png' alt='partition' width='70%'>",
          d: "<img src='../ressources/S6H/4.png' alt='partition' width='70%'>"
        },
        correctAnswer: "a"
      }
    ]
  ];

  questionSet = [questionsMusic, questionsSheet];
  let questions;

  // Set the user id to know the order of the questions
  function urlUser() {
    const url = new URL(window.location.href);
    if (url.searchParams.get("user") === "0") {
      user = 0;
    } else {
      user = 1;
    }
    questions = questionSet[user];
  }

  function secondQuestionSet() {
    second = true;
    questionNumber = 0;
    questionLevel = 0;
    if (questions === questionsSheet) {
      questions = questionsMusic;
    } else {
      questions = questionsSheet;
    }
  }

  function buildQuestion(number, level) {
    question.empty();
    console.log(number, level);
    currentQuestion = questions[number][level];
    let answers = []
    for (letter in currentQuestion.answers) {
      answers.push(`<label>
             <input type="radio" name="question" value="${letter}">
              ${letter} : ${currentQuestion.answers[letter]}
           </label>`);
    }
    question.append(`<div class="question"> ${currentQuestion.question} </div>
           <div id="answers" class="answers"> ${answers.join("<br>")} </div>`);
  }

  function showIntermediateResult(questionNumb, correctAnswer) {
    let intermediateResult = $("#intermediateResult");
    let songResult = $("#songResult");

    // cleaning
    intermediateResult.empty();
    songResult.empty();

    // TODO test purpose
    console.log("showIntermediateResult");
    if (correctAnswer) {
      intermediateResult.append("Good work! You have correctly responded to the question.");
    } else {
      intermediateResult.append("Too bad! You have not correctly responded. <br> The correct answer was " + currentQuestion.correctAnswer + ".");
      songResult.append(currentQuestion.answers[currentQuestion.correctAnswer]);
    }
    $("#resultModal").modal('show');
  }

  function showResult() {
    console.log(pathQuestion);
    const correctAnswers = pathQuestion.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const resultPercentage = Math.floor((correctAnswers / 7) * 100);
    $("#resultPercentage").attr("style", "width:" + resultPercentage + "%");
    $("#resultPercentageNumeral").append(resultPercentage + "%");
    if (resultPercentage <= 50) {
      $("#score").append("You have responded correctly to " + correctAnswers + " questions on 7.");
    } else {
      $("#score").append("Congratulations! You have responded correctly to " + correctAnswers + " questions on 7.");
    }
    $("#finalResultModal").modal('show');
    downloadResults(resultPercentage);
  }

  function downloadResults(resultPercentage) {
    const currentTime = new Date();
    const day = currentTime.getDay();
    const month = currentTime.getMonth() + 1; // January is number 0
    const year = currentTime.getFullYear();

    const jsonFile = {
      date: day + "/" + month + "/" + year,
      'User': user,
      'Result %': resultPercentage,
      'Array of the path': pathQuestion
    };

    const blob = new Blob([JSON.stringify(jsonFile, null, 3)], {
      type: 'application/json'
    });

    if (window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveBlob(blob, filename);
    } else {
      const elem = window.document.createElement('a');
      elem.href = window.URL.createObjectURL(blob);
      elem.download = "resultQuiz.json";
      document.body.appendChild(elem);
      elem.click();
      document.body.removeChild(elem);
    }
  }

  submit.click(function() {
    if ($("#answers input:checked").length == 0) {
      return;
    }

    // TODO for test purpose
    // console.log($("#answers input:checked").attr("value") +"; "+ currentQuestion.correctAnswer);

    if ($("#answers input:checked").attr("value") === currentQuestion.correctAnswer) {
      pathQuestion.push(1);
      if (questionNumber + 1 === questions.length) {
        if (second) {
          showResult();
          return;
        } else {
          secondQuestionSet();
        }
      }
      questionNumber += 1;
      questionLevel = questionLevel + 1 > 2 ? 2 : questionLevel + 1;
      showIntermediateResult(questionNumber, true);
      //buildQuestion(questionNumber, questionLevel);
    } else {
      pathQuestion.push(0);
      if (questionNumber + 1 === questions.length) {
        if (second) {
          showResult();
          return;
        } else {
          secondQuestionSet();
        }
      }
      if (questionNumber !== 1) {
        questionLevel = questionLevel - 1 < 0 ? 0 : questionLevel - 1;
      }
      questionNumber += 1;
      showIntermediateResult(questionNumber, false);
      //buildQuestion(questionNumber, questionLevel);
    }
  });

  nextQuestion.click(function() {
    buildQuestion(questionNumber, questionLevel);
  });

  // Retrieve user id inside the current url
  urlUser();
  // first call to the method
  buildQuestion(questionNumber, questionLevel);
})();
