const video = document.querySelector("video");
const playButton = document.querySelector("#playbutton");
const muteButton = document.querySelector("#muteButton");

function MediaPlayer(config) {
    this.media = config.el;
}

MediaPlayer.prototype.play = function () {
    (this.media.paused) ? this.media.play() : this.media.pause();
}

MediaPlayer.prototype.mute = function () {
    (this.media.muted) ? this.media.muted = false : this.media.muted = true;
}

const player = new MediaPlayer({ el: video });
playButton.onclick = () => player.play();
muteButton.onclick = () => player.mute();