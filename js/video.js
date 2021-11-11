var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// play video
document.querySelector("#play").addEventListener("click", function() {
	 console.log("Play Video");
	 video.play();
	var val = document.querySelector("#slider").value;
	volume.innerHTML = (val + "%");
 });

 //pause video
 document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// speed up video 
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate = video.playbackRate / .95;
	console.log("New Speed is " + video.playbackRate)
});

// slow down video 
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackRate = video.playbackRate * .95;
	console.log("New Speed is " + video.playbackRate)
});

//skip ahead
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Original Location " + video.currentTime);

	if (video.currentTime < video.duration - 15){
		video.currentTime += 15
	}

	else{
		video.currentTime = 0;
		console.log("Going back to the beginning")
	}
	console.log("Updated Location "+ video.currentTime)
});

//volume slider 
document.querySelector("#slider").addEventListener("click", function() {
	var percentage = document.querySelector("#slider").value;
	video.volume = percentage/100;
	volume.innerHTML = (percentage + "%");
	console.log(video.volume);
});

//mute
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false){
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
	else{
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
		
	}
	
});




//old school filter - styled
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

//original filter
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});