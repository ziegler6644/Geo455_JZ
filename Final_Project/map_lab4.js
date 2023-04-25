var greatwallPopup = "State Farm Arena<br/><img src='https://upload.wikimedia.org/wikipedia/commons/e/e2/State_Farm_%28Phillips%29_Arena%2C_Atlanta%2C_GA_%2846558861525%29.jpg' alt='great wall wiki' width='150px'/>";

var ChichenItzaPopup = "TD Garden<br/><img src='https://upload.wikimedia.org/wikipedia/commons/6/6a/TD_Garden_%28crop%29.JPG' alt='Chichen-Itza wiki' width='150px'/>";

var PetraPopup = "Barclays Center<br/><img src='https://upload.wikimedia.org/wikipedia/commons/d/df/BarclayCenter-2_%2848034233762%29.jpg' alt='Petra wiki' width='150px'/>";

var MachuPichuPopup = "Spectrum Center<br/><img src='https://upload.wikimedia.org/wikipedia/commons/6/6e/Spectrum_Center_2018.jpg' alt='MachuPichu wiki' width='150px'/>";

var ChristtheRedeemerPopup = "United Center<br/><img src='https://upload.wikimedia.org/wikipedia/commons/2/22/United_Center_1.jpg' alt='Christ the Redeemer wiki' width='150px'/>";

var ColosseumPopup = "Rocket Mortgage Field House<br/><img src='https://upload.wikimedia.org/wikipedia/commons/f/fd/Rocket_Mortgage_FieldHouse_%282%29.jpg' alt='Colosseum wiki' width='150px'/>";

var TajMahalPopup = "American Airlines Center<br/><img src='https://upload.wikimedia.org/wikipedia/commons/3/3d/American_Airlines_Center_%286246886325%29_cropped.jpg' alt='Taj Mahal wiki' width='150px'/>";

var customOptions ={'maxWidth': '150','className' : 'custom'};

// Set up landmark variables and individual landmarks
var landmarks = L.layerGroup();

var greatwall = L.marker([33.757225,-84.396442]).bindPopup(greatwallPopup, customOptions).addTo(landmarks);

var Chichen = L.marker([42.366286,-71.062102]).bindPopup(ChichenItzaPopup, customOptions).addTo(landmarks);

var Petra = L.marker([40.682635, -73.975167]).bindPopup(PetraPopup, customOptions).addTo(landmarks);

var Machu = L.marker([35.225163,-80.839289]).bindPopup(MachuPichuPopup, customOptions).addTo(landmarks);

var Christ = L.marker([41.880553,-87.674039]).bindPopup(ChristtheRedeemerPopup, customOptions).addTo(landmarks);

var Coll = L.marker([41.496643,-81.688152]).bindPopup(ColosseumPopup, customOptions).addTo(landmarks);

var Taj = L.marker([32.790467,-96.8103]).bindPopup(TajMahalPopup, customOptions).addTo(landmarks);

var greatwall = L.marker([39.748720,-105.007651]).bindPopup(greatwallPopup, customOptions).addTo(landmarks);

var Chichen = L.marker([42.341275, -83.055110]).bindPopup(ChichenItzaPopup, customOptions).addTo(landmarks);

var Petra = L.marker([37.767881, -122.387370]).bindPopup(PetraPopup, customOptions).addTo(landmarks);

var Machu = L.marker([29.750774,-95.362101]).bindPopup(MachuPichuPopup, customOptions).addTo(landmarks);

var Christ = L.marker([39.763973,-86.155437]).bindPopup(ChristtheRedeemerPopup, customOptions).addTo(landmarks);

var Coll = L.marker([34.043065,-118.267234]).bindPopup(ColosseumPopup, customOptions).addTo(landmarks);

var Taj = L.marker([34.043065,-118.267234]).bindPopup(TajMahalPopup, customOptions).addTo(landmarks);

var greatwall = L.marker([35.138211,-90.050452]).bindPopup(greatwallPopup, customOptions).addTo(landmarks);

var Chichen = L.marker([25.781412,-80.188015]).bindPopup(ChichenItzaPopup, customOptions).addTo(landmarks);

var Petra = L.marker([43.045044, -87.917338]).bindPopup(PetraPopup, customOptions).addTo(landmarks);

var Machu = L.marker([44.979556,-93.276161]).bindPopup(MachuPichuPopup, customOptions).addTo(landmarks);

var Christ = L.marker([29.949032,-90.082082]).bindPopup(ChristtheRedeemerPopup, customOptions).addTo(landmarks);

var Coll = L.marker([40.750436,-73.99331]).bindPopup(ColosseumPopup, customOptions).addTo(landmarks);

var Taj = L.marker([28.539248,-81.383874]).bindPopup(TajMahalPopup, customOptions).addTo(landmarks);

var greatwall = L.marker([35.463430,-97.515077]).bindPopup(greatwallPopup, customOptions).addTo(landmarks);

var Chichen = L.marker([39.901154,-75.171995]).bindPopup(ChichenItzaPopup, customOptions).addTo(landmarks);

var Petra = L.marker([33.445812,-112.071161]).bindPopup(PetraPopup, customOptions).addTo(landmarks);

var Machu = L.marker([45.531539,-122.666669]).bindPopup(MachuPichuPopup, customOptions).addTo(landmarks);

var Christ = L.marker([38.580396, -121.499671]).bindPopup(ChristtheRedeemerPopup, customOptions).addTo(landmarks);

var Coll = L.marker([29.427002,-98.437468]).bindPopup(ColosseumPopup, customOptions).addTo(landmarks);

var Taj = L.marker([43.64346,-79.379072]).bindPopup(TajMahalPopup, customOptions).addTo(landmarks);

var Coll = L.marker([40.768271,-111.901194]).bindPopup(ColosseumPopup, customOptions).addTo(landmarks);

var Taj = L.marker([38.898073,-77.020934]).bindPopup(TajMahalPopup, customOptions).addTo(landmarks);









//Set up the baselayers and WMS layer

var streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2NoYXVkaHVyaSIsImEiOiJjazBtcG5odG8wMDltM2JtcjdnYTgyanBnIn0.qwqjMomdrBMG36GQKXBlMw', {
 maxZoom: 18,
 attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
 'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
 id: 'mapbox/streets-v11',
 tileSize: 512,
 zoomOffset: -1
});

var grayscale = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2NoYXVkaHVyaSIsImEiOiJjazBtcG5odG8wMDltM2JtcjdnYTgyanBnIn0.qwqjMomdrBMG36GQKXBlMw', {
 maxZoom: 18,
 attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
 'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
 id: 'mapbox/light-v9',
 tileSize: 512,
 zoomOffset: -1
});

var topo = L.tileLayer.wms('http://ows.mundialis.de/services/service?', {
 layers: 'SRTM30-Colored-Hillshade'
});

//Create the map variable

var mymap = L.map("map", {
 center: [38.85250119246977, -99.60815961021089], 
 zoom: 4,
 layers: [grayscale, landmarks]});

// Create menu items
var baseLayers = {
 'Grayscale': grayscale,
 'Streets': streets,
 "Hillshade": topo,
 };

var overlays = {'Landmarks': landmarks};
function getColor(value) {
    return value > 15 ? '#54278f':
           value > 10  ? '#756bb1':
           value > 3  ? '#9e9ac8':
           value > 1  ? '#cbc9e2':
                         '#f2f0f7';
}

function style(feature){
    return {
        fillColor: getColor(feature.properties.Count_of_State__NBA_Finals_and_MVP___Copy_csv_),   // pop_den is the field name for the population density data
        weight: 2,
        opacity: 1,
        color: 'gray',
        fillOpacity: 0.9
    };
    }

  function highlightFeature(e) {
    // Get access to the feature that was hovered through e.target
    var feature = e.target;

    // Set a thick grey border on the feature as mouseover effect
    // Adjust the values below to change the highlighting styles of features on mouseover
    // Check out https://leafletjs.com/reference-1.3.4.html#path for more options for changing style
    feature.setStyle({
        weight: 5,
        color: '#666',
        fillOpacity: 0.7
    });

    // Bring the highlighted feature to front so that the border doesn’t clash with nearby states
    // But not for IE, Opera or Edge, since they have problems doing bringToFront on mouseover
    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        feature.bringToFront();
    }
}

    function onEachFeature(feature, layer) {
        layer.on({
            mouseover: highlightFeature, // Do what defined by the highlightFeature function on mouseover
            mouseout: resetHighlight,    // Do what defined by the resetHighlight function on mouseout
        });
    }


    var geojson; // define a variable to make the geojson layer accessible for the funtion to use   

    function resetHighlight(e) {
        geojson.resetStyle(e.target);
    }

    geojson = L.geoJson(data, {
        style: style,
        onEachFeature: onEachFeature
    }).bindPopup(function (layer){
    return layer.feature.properties.name
           + '<p style="color:purple">' + layer.feature.properties.Count_of_State__NBA_Finals_and_MVP___Copy_csv_.toString() + ' people/hectare </p>';       
}).addTo(mymap);



  var legend = L.control({position: 'bottomright'}); // Try the other three corners if you like.

    legend.onAdd = function (mymap) {

        var div = L.DomUtil.create('div', 'legend'),
            grades = [0, 32, 53, 87, 139]; // The break values to define the intervals of population, note we begin from 0 here

        div.innerHTML = '<b>Population Density <br></b>'; // The legend title (HTML-based), in this case it's Population Density 2011

        // Loop through our the classes and generate a label with a color box for each interval.
        // If you are creating a choropleth map, you DO NOT need to change lines below.
        for (var i = 0; i < grades.length; i++) {
            div.innerHTML +=
            '<i style="background:' + getColor(grades[i] + 1) + '"></i>' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
        }

        return div;
    };

    legend.addTo(mymap);
 
var layerControl = L.control.layers(baseLayers, overlays, {collapsed: false}).addTo(mymap);