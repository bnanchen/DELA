(function() {
  // setup audio.js
  audiojs.events.ready(function() {
    var as = audiojs.createAll();
  });

  // html elements
  let nextQuestion = $("#next");
  let submit = $("#submit");
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
        a: "<audio src='../ressources/EP/1.mp3' preload='auto' />",
        b: "<audio src='../ressources/EP/2.mp3' preload='auto' />",
      },
      correctAnswer: "a"
    }],
    [{
      question: "<img src='../ressources/S1N/image_question21.png' alt='partition' width='70%'>",
      answers: {
        a: "<audio src='../ressources/S1N/1.mp3' preload='auto' />",
        b: "<audio src='../ressources/S1N/2.mp3' preload='auto' />",
        c: "<audio src='../ressources/S1N/3.mp3' preload='auto' />"
      },
      correctAnswer: "c"
    },
    {
      question: "<img src='../ressources/S1E/image_question22.png' alt='partition' width='70%'>",
      answers: {
        a: "<audio src='../ressources/S1E/1.mp3' preload='auto' />",
        b: "<audio src='../ressources/S1E/2.mp3' preload='auto' />"
      },
      correctAnswer: "b"
    }],
    [{
      question: "<img src='../ressources/S2H/image_question31.png' alt='partition' width='70%'>",
      answers: {
        a: "<audio src='../ressources/S2H/1.mp3' preload='auto' />",
        b: "<audio src='../ressources/S2H/2.mp3' preload='auto' />",
        c: "<audio src='../ressources/S2H/3.mp3' preload='auto' />",
        d: "<audio src='../ressources/S2H/4.mp3' preload='auto' />"
      },
      correctAnswer: "a"
    },
    {
      question: "<img src='../ressources/S2N/image_question32.png' alt='partition' width='70%'>",
      answers: {
        a: "<audio src='../ressources/S2N/1.mp3' preload='auto' />",
        b: "<audio src='../ressources/S2N/2.mp3' preload='auto' />",
        c: "<audio src='../ressources/S2N/3.mp3' preload='auto' />"
      },
      correctAnswer: "b"
    },
    {
      question: "<img src='../ressources/S2E/image_question33.png' alt='partition' width='70%'>",
      answers: {
        a: "<audio src='../ressources/S2N/1.mp3' preload='auto' />",
        b: "<audio src='../ressources/S2N/2.mp3' preload='auto' />",
      },
      correctAnswer: "a"
    }],
    [{
      question: "<img src='../ressources/S3H/image_question41.png' alt='partition' width='70%'>",
      answers: {
        a: "<audio src='../ressources/S3H/1.mp3' preload='auto' />",
        b: "<audio src='../ressources/S3H/2.mp3' preload='auto' />",
        c: "<audio src='../ressources/S3H/3.mp3' preload='auto' />",
        d: "<audio src='../ressources/S3H/4.mp3' preload='auto' />"
      },
      correctAnswer: "d"
    },
    {
      question: "<img src='../ressources/S3N/image_question42.png' alt='partition' width='70%'>",
      answers: {
        a: "<audio src='../ressources/S3N/1.mp3' preload='auto' />",
        b: "<audio src='../ressources/S3N/2.mp3' preload='auto' />",
        c: "<audio src='../ressources/S3N/3.mp3' preload='auto' />"
      },
      correctAnswer: "b"
    },
    {
      question: "<img src='../ressources/S3E/image_question43.png' alt='partition' width='70%'>",
      answers: {
        a: "<audio src='../ressources/S3E/1.mp3' preload='auto' />",
        b: "<audio src='../ressources/S3E/2.mp3' preload='auto' />"
      },
      correctAnswer: "b"
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
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
         );
    }
    question.append(`<div class="question"> ${currentQuestion.question} </div>
           <div id="answers" class="answers"> ${answers.join("<br>")} </div>`);
  }

  nextQuestion.click(function (){
    if ($("#answers input:checked").attr("value") == currentQuestion.correctAnswer) {
      pathQuestion.push(1);
      questionNumber += 1;
      questionLevel = (questionLevel + 1) % questions[questionNumber].length;
      buildQuestion(questionNumber, questionLevel);
    } else {
      pathQuestion.push(0);
      questionNumber += 1;
      questionLevel = questionLevel - 1 < 0 ? 0 : questionLevel - 1;
      buildQuestion(questionNumber, questionLevel);
    }
  });

  buildQuestion(questionNumber, questionLevel);
})();
