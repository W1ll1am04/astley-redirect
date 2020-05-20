// created by https://github.com/W1ll1am04

// Options
var run = true; // if 'false' then astley-core.js does not run at all apart from defining Options.
var time = 5; // Ajust this to ajust how long console countsdown before it redirects if its astley time.

if (run) {
	function sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}

	async function tptimer() {
		while (time != 0) {
			time--;	// time descrease
			await sleep(1000);	// wait for 1 secound
			if (time == 0) { 	// if time is at 0 then
				location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
			}
		}
	}
	
	window.onload = function() {check_astley()} // start the check_astley() function on window load function.
	
	function check_astley() {
		
		// get the current date
		var cd = new Date();
		var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		
		var astley_update = cd.getDate() + " " + months[cd.getMonth()];
		// check if its 24 october.
		if (astley_update == "24 October") {
			// if yes then start the countdown.
			tptimer()
		}
		else {}
	}
}