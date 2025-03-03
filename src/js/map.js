"use strict";

//Hämta id:n

let mapsInputEL = document.getElementById("mapsInput");
let mapsButtonEL = document.getElementById("mapsButton")

//Händelselyssnare
window.addEventListener("load", initMap);

let map;

async function initMap() {

    let map;
    const { Map } = await google.maps.importLibrary("maps");

    map = new Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
    });
}

