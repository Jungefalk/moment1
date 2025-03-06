"use strict";

//Variabler 
let searchedLocation = "";
let coordinates = [59.325695, 18.071869];

//Hämta id:n
let mapsInputEl = document.getElementById("mapsInput");
let mapsButtonEl = document.getElementById("mapsButton");

//Händelsehanterare
window.addEventListener("load", loadMap);
mapsButtonEl.addEventListener("click", fetchLocation);

//Funktion som laddar in kartan
function loadMap() {

    const map = L.map('map').setView(coordinates, 14);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    console.log("Kartan har laddat in")
}

//Funktion som hämtar data från nominatim och översätter sökord till koordinater
async function fetchLocation() {

    //lagra sökord i variabel
    searchedLocation = mapsInputEl.value;

    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search.php?q=${searchedLocation}&format=jsonv2`);
        if (!response.ok) {
            throw new Error("Fel vid anslutningen");
        }
        const locationData = await response.json();

        console.log(locationData)

    } catch (error) {
        console.error("Ett fel uppstod:", error.message);
    };
};

