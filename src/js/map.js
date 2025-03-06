"use strict";

//Variabler 
let searchedLocation = [59.325695, 18.071869];

//Hämta id:n
let mapsInputEl = document.getElementById("mapsInput");
let mapsButtonEl = document.getElementById("mapsButton");

//Händelsehanterare
window.addEventListener("load", loadMap);
mapsButtonEl.addEventListener("click", fetchLocation);

//Funktion som laddar in kartan
function loadMap(){

    const map = L.map('map').setView(searchedLocation, 14);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

console.log("Kartan har laddat in")
}

async function fetchLocation() {
     
}

