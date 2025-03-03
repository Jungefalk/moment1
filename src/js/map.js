"use strict";

//Hämta id:n

let mapsInputEL = document.getElementById("mapsInput");
let mapsButtonEL = document.getElementById("mapsButton")

//Händelselyssnare
window.addEventListener("load", initMap);

let map;

async function initMap() {

    let startPosition = { lat: 59.325695, lng: 18.071869}

    const { Map } = await google.maps.importLibrary("maps");

    map = new Map(document.getElementById("map"), {
        center: startPosition,
        zoom: 8,
    });
}

