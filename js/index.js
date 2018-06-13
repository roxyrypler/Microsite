



// get next launch data from api.spacexdata.com
let jsoncopy;
let request = new XMLHttpRequest();
request.open('GET', 'https://api.spacexdata.com/v2/launches/next', true);

request.onload = function () {

  // Begin accessing JSON data here
  let data = JSON.parse(this.response);
  jsoncopy = data;
  if (request.status >= 200 && request.status < 400) {
        console.log(jsoncopy);
	  	timeConverter(jsoncopy.launch_date_unix);
	  setMissionName();
      
  } else {
    alert("failed to load json");
  }
}
request.send();

// get current time

let currentTime = new Date();
console.log(currentTime);

// convert timestamp from spacex and store it in ctime object
let ctime;
let cuttedString;
let recombinedDate;
let countDownDate;

function timeConverter(UNIX_timestamp){
  let a = new Date(UNIX_timestamp * 1000);
  let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  let year = a.getFullYear();
  let month = months[a.getMonth()];
  let date = a.getDate();
  let hour = a.getHours();
  let min = a.getMinutes();
  let sec = a.getSeconds();
  ctime = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  cuttedString = ctime.split(" ");
  recombinedDate = cuttedString[1] + " " + cuttedString[0] + ", " + cuttedString[2] + " " + cuttedString[3];
  countDownDate = new Date(recombinedDate).getTime();
  console.log(recombinedDate);
}


let x = setInterval(function() {
  let now = new Date().getTime();
  let distance = countDownDate - now;
  // calculate dates
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

	
	//update html elements
	document.getElementById("timerDays").innerHTML = days;
	document.getElementById("timerHours").innerHTML = hours;
	document.getElementById("timerMinutes").innerHTML = minutes;
	
	

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("scrolltoVieww").innerHTML = "EXPIRED";
  }
}, 1000);


function setMissionName() {
	document.getElementById("nextLaunchText").innerHTML = jsoncopy.mission_name + " " + "Launches in:";
}



// if small screen and landscape, inform user to rotate device back.

function rotateBack() {
	if(window.innerHeight < window.innerWidth && window.innerHeight < 768 && window.innerWidth < 812){
		document.getElementById("overlay").classList.add("overlay");
		document.body.classList.add("stop-Scrolling");
		console.log("Please use Portrait!");
	}else {
		document.getElementById("overlay").classList.remove("overlay");
		document.body.classList.remove("stop-Scrolling");
		console.log("Normal Mode");
	} 
}
		  






