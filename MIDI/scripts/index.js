audiojs.events.ready(function() {
  var as = audiojs.createAll();
});

// This code loads the IFrame Player API code asynchronously.
const tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// This function creates an <iframe> (and YouTube player)
// after the API code downloads.
let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('introVideo', {
    height: '390',
    width: '640',
    videoId: 'cEqY5VMxtyY',
    playerVars: {
      start: '45',
      end: '75'
    }
  });
}

// time variables
let startTimeFirstPart = 0;
let startTimeSecondPart = 0;
let timeIntervalFirstPart = 0;
let timeIntervalSecondPart = 0;

$("#firstLink").click(function () {
  console.log("firstLink");
  startTimeFirstPart = Date.now();
});

$("#secondLink").click(function () {
  console.log("secondLink");
  startTimeSecondPart = Date.now();
});

$("#buttonFirstPart").click(function () {
  if (startTimeFirstPart === 0) {
    return;
  }
  console.log("firstButton");
  timeIntervalFirstPart = (Date.now() - startTimeFirstPart)/1000.0;
});

$("#buttonSecondPart").click(function () {
  if (startTimeFirstPart === 0 || startTimeSecondPart === 0) {
    return;
  }
  console.log("secondButton");
  timeIntervalSecondPart = (Date.now() - startTimeSecondPart)/1000.0;
  downloadResults();
});

function downloadResults() {
    const currentTime = new Date();
    const day = currentTime.getDay();
    const month = currentTime.getMonth() + 1; // January is number 0
    const year = currentTime.getFullYear();

    const jsonFile = {
      date: day + "/" + month + "/" + year,
      'Duration of the first part (sec)': timeIntervalFirstPart,
      'Duration of the second part (sec)': timeIntervalSecondPart
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
