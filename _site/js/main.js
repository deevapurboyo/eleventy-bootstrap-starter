// You can include your own javascript here
// alert("hello, your main.js file was added properly.");
console.log("Logging from main.js, it was loaded.");

var mymap = L.map('mapid').setView([40.7253959,-73.9954463], 13);

// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: 'your.mapbox.access.token'
// }).addTo(mymap);

    var Stadia_OSMBright = L.tileLayer('https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png', {
                                maxZoom: 20,
                                attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
                            });
    Stadia_OSMBright.addTo(mymap);

var ltrainvintage = L.marker([40.7049392,-73.9299725]).addTo(mymap);

ltrainvintage.bindPopup('<a href="/stores/ltrainvintage"><b>L Train Vintage</b></a><br>106 Knickerbocker Ave, Brooklyn, NY 11237, United States').openPopup();

var goodwill = L.marker([40.744334,-73.992507]).addTo(mymap);

goodwill.bindPopup('<a href="/stores/goodwill"><b>Good Will</b></a><br>103 W 25th St, New York, NY 10001, United States').openPopup();

var buffaloexchange = L.marker([40.7254032,-73.9964979]).addTo(mymap);

buffaloexchange.bindPopup('<a href="/stores/buffaloexchange"><b>Buffalo Exchange</b></a><br>714 Broadway, New York, NY 10003, United States').openPopup(); 

var beaconscloset = L.marker([40.734922,-73.9941588]).addTo(mymap);

beaconscloset.bindPopup('<a href="/stores/beaconscloset"><b>Beacons Closet</b></a><br>10 W 13th St, New York, NY 10011, United States').openPopup();