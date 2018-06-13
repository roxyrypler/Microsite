//http://api.open-notify.org/iss-now.json


let uluru;
let marker;
let map;

let mapLatLng;

let jsoncopy;

setInterval(updatemap, 1000);

function updatemap() {
	let request = new XMLHttpRequest();
		request.open('GET', 'http://api.open-notify.org/iss-now.json', true);

		request.onload = function () {

		  // Begin accessing JSON data here
		  let data = JSON.parse(this.response);
		  jsoncopy = data;
		  if (request.status >= 200 && request.status < 400) {
			  //let stringift = JSON.stringify(jsoncopy);
			  
			  let issLat = jsoncopy.iss_position.latitude;
			  let issLong = jsoncopy.iss_position.longitude;
			  
				//console.log("ISS Latitude " + jsoncopy.iss_position.latitude);
				//console.log("ISS Longitude " + jsoncopy.iss_position.longitude);
			  
			  //map = new google.maps.Map(
	  				//document.getElementById('map'), {zoom: 4, center: mapLatLng});
			  
			  	mapLatLng = new google.maps.LatLng(issLat, issLong);
			  	marker = new google.maps.Marker({position: mapLatLng, map: map});
			  	
		  } else {
			alert("failed to load json");
		  }
		}
	request.send();	
	
}



// Initialize and add the map
function initMap() {
  // The location of Uluru
  uluru = {lat: -25.344, lng: 131.036};
  // The map, centered at Uluru
  map = new google.maps.Map(
	  document.getElementById('map'), {zoom: 0, center: uluru});
  // The marker, positioned at Uluru
  marker = new google.maps.Marker({position: mapLatLng, map: map});
}