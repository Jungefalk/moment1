"use strict";

//Hämta idn
const barChartEl = document.getElementById("barChart");
const pieChartEl = document.getElementById("pieChart");

//Händelselyssnare
window.addEventListener("load", fetchData);

//Tomma arrayer för att lagra data
const mostPopularCourses = [];
const mostPopularPrograms = [];
const courses = [];
const programs = [];


async function fetchData() {
    try {
        const response = await fetch('https://studenter.miun.se/~mallar/dt211g/');
        if (!response.ok) {
            throw new Error("Det blev ett fel vid anslutiningen");
        }
        const jsonData = await response.json()
        const courses = jsonData.filter(data => data.type === "Kurs")
        console.log(courses);

        const programs = jsonData.filter(data => data.type === "Program")
        console.log(programs);


    } catch (error) {
        console.log("Ett fel uppstod:", error.message);
    };
};

