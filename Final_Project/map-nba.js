      var side_bar_html = ""; 
      var gmarkers = []; 
      var map = null;

function initialize() {
  // create the map
  var myOptions = {
    zoom: 4,
    center: new google.maps.LatLng(39.582226,-97.766602),
	mapTypeControl: false,
	streetViewControl: false,
	fullscreenControl: true,
	scrollwheel: true, 
    mapTypeId: google.maps.MapTypeId.HYBRID,
  }
  map = new google.maps.Map(document.getElementById("map_canvas"),
                                myOptions);
	
		  var noPoi = [
	  {
		  featureType: "poi",
		  stylers: [
			  { visibility: "off" }
		  ]   
	  }
  ];
	map.setOptions({styles: noPoi});
 
  google.maps.event.addListener(map, 'click', function() {
        infowindow.close();
        });

  // add the points
      
var point = new google.maps.LatLng(33.757225,-84.396442);
var marker = createMarker(point,"Atlanta Hawks","<div id='infobox'><h3><a href='http://www.nba.com/hawks/' target='blank'>Atlanta Hawks</a></h3><h4>State Farm Arena</h4></div>")

var point = new google.maps.LatLng(42.366286,-71.062102);
var marker = createMarker(point,"Boston Celtics","<div id='infobox'><h3><a href='http://www.nba.com/celtics/' target='blank'>Boston Celtics</a></h3><h4>TD Garden</h4></div>")

var point = new google.maps.LatLng(40.682635, -73.975167);
var marker = createMarker(point,"Brooklyn Nets","<div id='infobox'><h3><a href='http://www.nba.com/nets/' target='blank'>Brooklyn Nets</a></h3><h4>Barclays Center</h4></div>")

var point = new google.maps.LatLng(35.225163,-80.839289);
var marker = createMarker(point,"Charlotte Hornets","<div id='infobox'><h3><a href='http://www.nba.com/hornets/' target='blank'>Charlotte Hornets</a></h3><h4>Spectrum Center</h4></div>")

var point = new google.maps.LatLng(41.880553,-87.674039);
var marker = createMarker(point,"Chicago Bulls","<div id='infobox'><h3><a href='http://www.nba.com/bulls/' target='blank'>Chicago Bulls</a></h3><h4>United Center</h4></div>")

var point = new google.maps.LatLng(41.496643,-81.688152);
var marker = createMarker(point,"Cleveland Cavaliers","<div id='infobox'><h3><a href='http://www.nba.com/cavaliers/' target='blank'>Cleveland Cavaliers</a></h3><h4>Rocket Mortgage FieldHouse</h4></div>")
 
var point = new google.maps.LatLng(32.790467,-96.8103);
var marker = createMarker(point,"Dallas Mavericks","<div id='infobox'><h3><a href='http://www.bclions.com/' target='blank'>Dallas Mavericks</a></h3><h4>American Airlines Center</h4></div>")
  
var point = new google.maps.LatLng(39.748720,-105.007651);
var marker = createMarker(point,"Denver Nuggets","<div id='infobox'><h3><a href='http://www.nba.com/nuggets/' target='blank'>Denver Nuggets</a></h3><h4>Ball Arena</h4></div>") 

var point = new google.maps.LatLng(42.341275, -83.055110);
var marker = createMarker(point,"Detroit Pistons","<div id='infobox'><h3><a href='http://www.nba.com/pistons/' target='blank'>Detroit Pistons</a></h3><h4>Little Caesars Arena</h4></div>") 

var point = new google.maps.LatLng(37.767881, -122.387370);
var marker = createMarker(point,"Golden State Warriors","<div id='infobox'><h3><a href='http://www.nba.com/warriors/' target='blank'>Golden State Warriors</a></h3><h4>Chase Center</h4></div>") 

var point = new google.maps.LatLng(29.750774,-95.362101);
var marker = createMarker(point,"Houston Rockets","<div id='infobox'><h3><a href='http://www.nba.com/rockets/' target='blank'>Houston Rockets</a></h3><h4>Toyota Center</h4></div>") 

var point = new google.maps.LatLng(39.763973,-86.155437);
var marker = createMarker(point,"Indiana Pacers","<div id='infobox'><h3><a href='http://www.nba.com/pacers/' target='blank'>Indiana Pacers</a></h3><h4>Gainbridge Fieldhouse</h4></div>")  

var point = new google.maps.LatLng(34.043065,-118.267234);
var marker = createMarker(point,"LA Clippers","<div id='infobox'><h3><a href='http://www.nba.com/clippers/' target='blank'>LA Clippers</a></h3><h4>Crypto.com Arena</h4></div>")  

var point = new google.maps.LatLng(34.043065,-118.267234);
var marker = createMarker(point,"LA Lakers","<div id='infobox'><h3><a href='http://www.nba.com/lakers/' target='blank'>LA Lakers</a></h3><h4>Crypto.com Arena</h4></div>")  

var point = new google.maps.LatLng(35.138211,-90.050452);
var marker = createMarker(point,"Memphis Grizzlies","<div id='infobox'><h3><a href='http://www.nba.com/grizzlies/' target='blank'>Memphis Grizzlies</a></h3><h4>FedEx Forum</h4></div>") 

var point = new google.maps.LatLng(25.781412,-80.188015);
var marker = createMarker(point,"Miami Heat","<div id='infobox'><h3><a href='http://www.nba.com/heat/' target='blank'>Miami Heat</a></h3><h4>FTX Arena</h4></div>") 

var point = new google.maps.LatLng(43.045044, -87.917338);
var marker = createMarker(point,"Milwaukee Bucks","<div id='infobox'><h3><a href='http://www.nba.com/bucks/' target='blank'>Milwaukee Bucks</a></h3><h4>Fiserv Forum</h4></div>") 

var point = new google.maps.LatLng(44.979556,-93.276161);
var marker = createMarker(point,"Minnesota Timberwolves","<div id='infobox'><h3><a href='http://www.nba.com/timberwolves' target='blank'>Minnesota Timberwolves</a></h3><h4>Target Center</h4></div>") 

var point = new google.maps.LatLng(29.949032,-90.082082);
var marker = createMarker(point,"New Orleans Pelicans","<div id='infobox'><h3><a href='http://www.nba.com/pelicans/' target='blank'>New Orleans Pelicans</a></h3><h4>Smoothie King Center</h4></div>") 
  
var point = new google.maps.LatLng(40.750436,-73.99331);
var marker = createMarker(point,"New York Knicks","<div id='infobox'><h3><a href='http://www.nba.com/lakers/' target='blank'>New York Knicks</a></h3><h4>Madison Square Gardens</h4></div>")  

var point = new google.maps.LatLng(28.539248,-81.383874);
var marker = createMarker(point,"Orlando Magic","<div id='infobox'><h3><a href='http://www.nba.com/magic/' target='blank'>Orlando Magic</a></h3><h4>Amway Center</h4></div>")  

var point = new google.maps.LatLng(35.463430,-97.515077);
var marker = createMarker(point,"Oklahoma City Thunder","<div id='infobox'><h3><a href='http://www.nba.com/thunder/' target='blank'>Oklahoma City Thunder</a></h3><h4>Paycom Center</h4></div>")  

var point = new google.maps.LatLng(39.901154,-75.171995);
var marker = createMarker(point,"Philadelphia 76ers","<div id='infobox'><h3><a href='http://www.nba.com/sixers/' target='blank'>Philadelphia 76ers</a></h3><h4>Wells Fargo Center</h4></div>") 

var point = new google.maps.LatLng(33.445812,-112.071161);
var marker = createMarker(point,"Phoenix Suns","<div id='infobox'><h3><a href='http://www.nba.com/suns/' target='blank'>Phoenix Suns</a></h3><h4>Footprint Center</h4></div>") 

var point = new google.maps.LatLng(45.531539,-122.666669);
var marker = createMarker(point,"Portland Trail Blazers","<div id='infobox'><h3><a href='http://www.nba.com/blazers/' target='blank'>Portland Trail Blazers</a></h3><h4>Moda Center</h4></div>") 

var point = new google.maps.LatLng(38.580396, -121.499671);
var marker = createMarker(point,"Sacramento Kings","<div id='infobox'><h3><a href='http://www.nba.com/kings/' target='blank'>Sacramento Kings</a></h3><h4>Golden 1 Center</h4></div>") 

var point = new google.maps.LatLng(29.427002,-98.437468);
var marker = createMarker(point,"San Antonio Spurs","<div id='infobox'><h3><a href='http://www.nba.com/spurs/' target='blank'>San Antonio Spurs</a></h3><h4>AT&T Center</h4></div>")  

var point = new google.maps.LatLng(43.64346,-79.379072);
var marker = createMarker(point,"Toronto Raptors","<div id='infobox'><h3><a href='http://www.nba.com/raptors/' target='blank'>Toronto Raptors</a></h3><h4>Scotiabank Arena</h4></div>")  

var point = new google.maps.LatLng(40.768271,-111.901194);
var marker = createMarker(point,"Utah Jazz","<div id='infobox'><h3><a href='http://www.nba.com/jazz/' target='blank'>Utah Jazz</a></h3><h4>Vivint Smart Home Arena</h4></div>") 

var point = new google.maps.LatLng(38.898073,-77.020934);
var marker = createMarker(point,"Washington Wizards","<div id='infobox'><h3><a href='https://www.nba.com/wizards/' target='blank'>Washington Wizards</a></h3><h4>Capital One Arena</h4></div>")

  // put the assembled side_bar_html contents into the side_bar div
  document.getElementById("side_bar").innerHTML = side_bar_html;
}
 
var infowindow = new google.maps.InfoWindow(
  { 
    size: new google.maps.Size(150,50)
  });
    
// This function picks up the click and opens the corresponding info window
function myclick(i) {
  google.maps.event.trigger(gmarkers[i], "click");
}
	
	// enter the sports leagues icon
var icon = '../images/map-icons/nba-pin.svg';	

// A function to create the marker and set up the event window function 
function createMarker(latlng, name, html) {
    var contentString = html;
    var marker = new google.maps.Marker({
        position: latlng,
		icon: icon,
        map: map,
        zIndex: Math.round(latlng.lat()*-100000)<<5
        });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(contentString); 
        infowindow.open(map,marker);
		//map.setZoom(16);
		map.setCenter(marker.getPosition());
        });
	
	google.maps.event.addListener(infowindow, 'closeclick', function() {  
		//map.panTo(this.getPosition());
    	//map.setZoom(4);
    });
	
    // save the info we need to use later for the side_bar
    gmarkers.push(marker);
    // add a line to the side_bar html
    side_bar_html += '<a href="javascript:myclick(' + (gmarkers.length-1) + ')">' + name + '<\/a><br>';
} 