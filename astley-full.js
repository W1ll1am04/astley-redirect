// created by https://github.com/W1ll1am04

// Options
const run = true; // if 'false' then astley-full.js does not run at all apart from defining options.
const do_consolelog = true; // if 'true' then log if its astley time or not.
const show_debug_variables = false; // if 'true' then enable the debug feature.
const enable_console_debugger = true; // enable the debug function
const print_time_only = false; // if 'true' then disable writing "Astley time in.." and only write time.
const costum_message = ""; // Add a costum message to log, leave empty for none
const display_innerHTML_id = ""; // specify an innerHTML id for setting visible countdown on page. leave empty to disable.
const ascii_message = false;
const dance_loop_times = 2; // disabled if ascii_message is disabled.
const redirect_date = "24 October";

const moves = ["('-')", "('O')", "('O')", "('-')"];
const moves2 = ["<( (", "<( (>", "( (>", "( (>"];
const moves3 = [" | |", " | |", "| |", "  |  |"];
var current_line = 0;
var debug = false;
const lyrics = [
    "Never gonna give you up",
    "Never gonna let you down",
    "Never gonna run around and desert you",
    "Never gonna make you cry",
    "Never gonna say goodbye",
    "Never gonna tell a lie and hurt you"
];

var time = 5; // Ajust this to ajust how long console countsdown before it redirects, if ascii_message is disabled.
var i = 0;
var speed = 200;

var warn_loop_executed = false;
var warnings = [];

if (run) {
	function sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}
	
	function warn(selected) {
		if (warnings.length == 0) {
			console.log("Warning-information is currently empty.");
			return 0;
		}
		else {
			if (warnings.indexOf(selected) !== -1) {
				if (selected == "null") {
					console.log('warn(): InnerHTML ID is null. This warning appears if no elements with the specified ID exists.');
				}
				else {
					console.warn("No explaination for '" + selected + "' found.")
				}
			}
			else {
				if (warnings.length == 1) {
					console.log("Avaliable parameters: " + warnings);
				}
				else {
					console.log("Please choose between: " + warnings);
				}
			}
			return 1;
		}
	}

	async function tptimer() {
		if (costum_message !== "") {	// check if a costum message to print to log was specified or not
			console.log(costum_message) // log the costum message
		}
		
		while (time != 0) { // while the time is not 0
			if (display_innerHTML_id !== "") { // check if innerHTML_id is disable or not.
				if (document.getElementById(display_innerHTML_id) !== null) { // if element exists
					document.getElementById(display_innerHTML_id).innerHTML = "Astley time in.. " + time
				}
			}
			else { // else if its null
				if (!warn_loop_executed) { // if it has already ran then dont run again.
					warn_loop_executed = true; // has ras = 'true' because it ran.
					if (display_innerHTML_id !== "") { // if it is not unspecified then warn user about this.
						console.warn('InnerHTML ID: ' + "'" + display_innerHTML_id + "'" +' is null. For more information type warn("null")')
						
						// add null as an explain option to warn()
						warnings.push("null");
					}
				}
			}
			
			if (do_consolelog) { // if do console_log is 'true'
				if (ascii_message) {
					var loop_target = dance_loop_times * 5;
					var loops = 0;
					while (true) {
						await sleep(speed);
						console.clear();
						console.log(moves[i% (moves.length - 1 )] + " " + lyrics[current_line]);
						console.log(moves2[i% (moves2.length - 1)]);
						console.log(moves3[i% (moves3.length - 1)]);
						if (show_debug_variables) {
							console.log(current_line);
							console.log(loops);
							console.log(loop_target);
						}
						++i;
						if (loops === loop_target) {
							break;
						}
						if (current_line > 4) {
							
							current_line = 0;
							loops = loops + 5;
						}
						else {
							current_line++;
						}
					}
				}
				else {
					var logp = cfa();
					console.log(logp + time);
								time--;	// time descrease
					await sleep(1000);	// wait for 1 secound
					if (time == 0) { 	// if time is at 0 then
						lreplace();
					}
				}
				if (loops === loop_target) {
					lreplace();
					break;
				}
			}
		}
	}
	
	function cfa() { // define cfa() function, this function checks if its going to add time to the log if so, returns that to logp;
		var result; // define variable to return
		if (!print_time_only) { // If time only is not true, then add string.
			result = "Its astley time in.. " // if print_time_only is 'false' then return astley time context
		}
		else {
			result = "" // if print_time_only is 'true' then return nothing.
		}
		return result; // return
	}
		
	// change this function if you want to load check_astley() thru something else than window.onload
	window.onload = function() {check_astley()}
	
	function lreplace() {
		// Optional things todo before replace goes here.
		
		location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
	}
	
	var astley_update;
	function check_astley() {
		
		// get the current date
		var cd = new Date();
		var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		
		astley_update = cd.getDate() + " " + months[cd.getMonth()];
		
		// check if its 24 october.
		if (astley_update == redirect_date) {
			// if yes then start the countdown.
			tptimer()
		}
		else {
			if (do_consolelog) {
				console.log("its not astley time today.");
			}
		}
	}
	
	// define debug function
	if (enable_console_debugger) {
		function debug(deb) {
			try {
				if (deb ==  "date") {
					console.log("debug: date '" + astley_update + "'");
				}
				else if (deb == "astley_date") {
					console.log("debug: astley_date '" + redirect_date + "'");
				}
				else if (deb == undefined) {
					console.warn('debug: no parameter passed. run "debug("-h")" for more information.');
				}
				else {
					console.warn("debug: invalid parameter: '" + deb + "'.");
				}
			}
			catch (ex) {console.warn("Something went wrong in the debugger. Therefore an exception occured: " + "'" + ex + "'" + ". For more information type warn(debug)")}
		}
	}
}
