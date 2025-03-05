"use strict";

//Variabler 
let searchedLocation = [];

//Hämta id:n
let searchInputEl = document.getElementById("searchInput");
let searchButtonEL = document.getElementById("searchButton");



const map = L.map('map').setView([searchedLocation], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);