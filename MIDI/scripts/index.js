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
