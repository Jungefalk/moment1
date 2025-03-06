"use strict";

//Variabler 
let searchedLocation = [59.325695, 18.071869];

//Hämta id:n
let searchInputEl = document.getElementById("searchInput");
let searchButtonEL = document.getElementById("searchButton");

//Händelsehanterare
window.addEventListener("load", loadMap);
searchButtonEL.addEventListener("click", fetchLocation);


const map = L.map('map').setView(searchedLocation, 14);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);