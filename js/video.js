var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	let marchingVideo = document.querySelector('#player1');
	marchingVideo.autoplay = false;
	marchingVideo.loop = false;	
});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });
let marchingVideo = document.querySelector('#player1')
let playButton = document.querySelector('#play');

let pauseButton = document.querySelector('#pause')
let audioSlider = document.querySelector("#slider")
let volumeIs = document.querySelector('#volume')
playButton.addEventListener("click", playVideo);
function playVideo(){
	marchingVideo.play();
}
pauseButton.addEventListener("click", pauseVideo);
function pauseVideo(){
	marchingVideo.pause();
}

playButton.addEventListener("click", showVolume);
function showVolume(){
	volumeIs.innerHTML = audioSlider.value + "%"
}

audioSlider.addEventListener("change", changeVolume);
function changeVolume(){
	marchingVideo.volume = audioSlider.value * .01
	volumeIs.innerHTML = audioSlider.value + "%"
}

let slowDown = document.querySelector("#slower")
marchingVideo.playbackRate = 1.0
slowDown.addEventListener("click", slow);
function slow(){
	marchingVideo.playbackRate = marchingVideo.playbackRate /= 1.1
	console.log("Playback rate: " + marchingVideo.playbackRate)
}
let speedUp = document.querySelector("#faster")
speedUp.addEventListener("click", faster);
function faster(){
	marchingVideo.playbackRate = marchingVideo.playbackRate *= 1.1
	console.log("Playback rate: " + marchingVideo.playbackRate)
}
let skipAhead = document.querySelector("#skip")
skipAhead.addEventListener("click", ahead);
function ahead(){
	marchingVideo.currentTime = marchingVideo.currentTime + 10
	if(marchingVideo.currentTime >= marchingVideo.duration){
		marchingVideo.currentTime = 0;
		marchingVideo.play();
	}
	console.log("Current time: " + marchingVideo.currentTime);
}
// mute/unmute isn't working
let mute = document.querySelector("#mute")
mute.addEventListener("click", muteVideo)
function muteVideo(){
	if(marchingVideo.muted === false){
		marchingVideo.muted = true
		mute.innerHTML = "Unmute"
	}
	else {
		marchingVideo.muted = false
		mute.innerHTML = "Mute"
	}
}
let oldSchool = document.querySelector("#vintage")
let original = document.querySelector("#orig")

oldSchool.addEventListener("click", older)
function older(){
	let base = document.querySelector('#player1');
	base.setAttribute('class', 'oldSchool');
	console.log(base)
}
original.addEventListener("click", normal)
function normal(){
	let base = document.querySelector("#player1");
	base.setAttribute('class', 'video')
}