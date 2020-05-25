import MediaPlayer from './mediaplayer.js';

const video = document.querySelector("video");
const player = new MediaPlayer({ el: video });

const playButton = document.querySelector("#playbutton");
const muteButton = document.querySelector("#muteButton");
playButton.onclick = () => player.play();
muteButton.onclick = () => player.mute();