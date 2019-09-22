var leafletScript = document.createElement('script');  
leafletScript.setAttribute('src','https://unpkg.com/leaflet@1.5.1/dist/leaflet.js');
document.head.appendChild(leafletScript);




var mapboxAttribution = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
var mapboxUrl =  'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZHRjMiIsImEiOiJjajM0bGhtdWMwMXMyMndvOTNhMTV5bGlwIn0.P982OmG7OY8ETeL971l1Ww';

var grayscale = L.tileLayer(mapboxUrl, {id: 'mapbox.light', attribution: mapboxAttribution}),
	satellite = L.tileLayer(mapboxUrl, {id: 'mapbox.satellite', attribution: mapboxAttribution}),

	streets   = L.tileLayer(mapboxUrl, {id: 'mapbox.streets', attribution: mapboxAttribution});

var map = L.map('map', {
	center: [50.9, 6.9],
	zoom: 5,
	layers: [streets]
});

var baseMaps = {
	"Grayscale": grayscale,
	"Satellite": satellite,
	"Streets": streets
};

L.control.layers(baseMaps).addTo(map);
