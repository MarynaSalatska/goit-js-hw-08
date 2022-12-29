import throttle from 'lodash.throttle';
import Vimeo from '@vimeo/player';
const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

function onVideoPlayer(event) {
  let dataString = event.seconds;
  localStorage.setItem(STORAGE_KEY, dataString);
}

player.on('timeupdate', throttle(onVideoPlayer, 1000));

const saveSeconds = localStorage.getItem(STORAGE_KEY);
if (saveSeconds) {
  player
    .setCurrentTime(saveSeconds)
    .then(function (seconds) {})
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          break;
        default:
          break;
      }
    });
}
