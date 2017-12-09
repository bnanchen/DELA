(function() {
  // setup audio.js
  audiojs.events.ready(function() {
    var as = audiojs.createAll();
  });

  const myQuestions = [
    {
      question: "<img src='../ressources/EP/image_question1.png' alt='partition' width='70%'>",
      answers: {
        a: "<audio src='../ressources/EP/1.mp3' preload='auto' />",
        b: "<audio src='../ressources/EP/2.mp3' preload='auto' />",
      },
      correctAnswer: "a"
    },
    {
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
    },
    {
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
    },
    {
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
    }
  ];

  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      for (letter in currentQuestion.answers) {
        answers.push(
          `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
        );
      }

      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("<br>")} </div>
         </div>`
      );
    });

    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;

    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  // display quiz right away
  buildQuiz();

  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);


  // on submit, show results
  submitButton.addEventListener("click", showResults);
  nextButton.addEventListener("click", showNextSlide);
})();
