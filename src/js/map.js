"use strict";

//Variabler 
let searchedLocation = "";
let coordinates = [59.32465564032536, 18.06971032425927];
let map = 0;

//Hämta id:n
let mapsInputEl = document.getElementById("mapsInput");
let mapsButtonEl = document.getElementById("mapsButton");

//Händelsehanterare
window.addEventListener("load", loadMap);
mapsButtonEl.addEventListener("click", fetchLocation);

//Funktion som laddar in kartan
function loadMap() {

    map = L.map('map').setView(coordinates, 14);

    const circle = L.circle([59.32465564032536, 18.06971032425927], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 100
    }).addTo(map);

    circle.bindPopup("Här bor jag! :)")

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

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

        //skriv över och lagra nya koordinater
        coordinates = [Number(locationData[0].lat), Number(locationData[0].lon)];

        updateMap()

    } catch (error) {
        console.error("Ett fel uppstod:", error.message);
    };
};

//funktion som uppdaterar kartan och lägger till marker
function updateMap() {

    map.setView(coordinates, 14);
    let marker = L.marker(coordinates).addTo(map);

}