"use strict";


//Hämta idn
const barChartEl = document.getElementById("barChart");
const pieChartEl = document.getElementById("pieChart");

//Händelselyssnare
window.addEventListener("load", fetchData);

//Tomma arrayer för att lagra jsondata
const mostPopularCourses = [];
const mostPopularPrograms = [];

//Funktion som hämtar datan
async function fetchData() {
    try {
        const response = await fetch('https://studenter.miun.se/~mallar/dt211g/');
        if (!response.ok) {
            throw new Error("Det blev ett fel vid anslutiningen");
        }
        const data = await response.json()
        console.log(data)

    } catch (error) {
        console.log("Ett fel uppstod:", error.message);
    };
};