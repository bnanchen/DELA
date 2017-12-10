(function() {
  // html elements
  let nextQuestion = $("#next");
  let question = $("#quiz");

  // other variables
  let questionNumber = 0;
  let questionLevel = 0;
  let currentQuestion;
  let pathQuestion = [];

  const questions = [
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
    }],
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
    }],
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
    }]
  ];

  function buildQuestion(number, level) {
    question.empty();
    console.log(number, level);
    currentQuestion = questions[number][level];
    let answers = []
    for (letter in currentQuestion.answers) {
      answers.push(`<label>
             <input type="radio" name="question" value="${letter}">
              ${letter} : ${currentQuestion.answers[letter]}
           </label>`
         );
    }
    question.append(`<div class="question"> ${currentQuestion.question} </div>
           <div id="answers" class="answers"> ${answers.join("<br>")} </div>`);
  }

  function showResult() {
    console.log(pathQuestion);
    $("#score").append("Congratulations! You have responded correctly to "+ pathQuestion.reduce((accumulator, currentValue) => accumulator + currentValue, 0) +" questions on "+ questions.length);
    $("#resultModal").modal('show');
  }

  nextQuestion.click(function (){
    if ($("#answers input:checked").length == 0) {
      return;
    }

    if (questionNumber+1 === questions.length-1) {
      nextQuestion.empty();
      nextQuestion.append("Submit");
    }
    // TODO for test purpose
    console.log($("#answers input:checked").attr("value") +"; "+ currentQuestion.correctAnswer);

    if ($("#answers input:checked").attr("value") === currentQuestion.correctAnswer) {
      pathQuestion.push(1);
      if (questionNumber+1 === questions.length) {
        showResult();
        return;
      }
      questionNumber += 1;
      questionLevel = questionLevel + 1 > 2 ? 2 : questionLevel + 1;
      buildQuestion(questionNumber, questionLevel);
    } else {
      pathQuestion.push(0);
      if (questionNumber+1 === questions.length) {
        showResult();
        return;
      }
      if (questionNumber !== 1) {
        questionLevel = questionLevel - 1 < 0 ? 0 : questionLevel - 1;
      }
      questionNumber += 1;
      buildQuestion(questionNumber, questionLevel);
    }
  });

  // first call to the method
  buildQuestion(questionNumber, questionLevel);
})();
