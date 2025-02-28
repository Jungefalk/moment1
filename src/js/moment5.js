"use strict";

//Hämta idn
const barChartEl = document.getElementById("barChart");
const pieChartEl = document.getElementById("pieChart");

//Händelselyssnare
window.addEventListener("load", fetchData);

//Tomma arrayer för att lagra data
let filteredCourses = [];
let filteredPrograms = [];
let sortedCourses = [];
let sortedPrograms = [];
let couseNames = [];
let courseApplications = [];
let programNames = [];
let programApplications = [];


async function fetchData() {
    try {
        const response = await fetch('https://studenter.miun.se/~mallar/dt211g/');
        if (!response.ok) {
            throw new Error("Det blev ett fel vid anslutiningen");
        }
        const jsonData = await response.json()

        // filtrera ut kurs/program
        filteredCourses = jsonData.filter(data => data.type === "Kurs")
        console.log(filteredCourses);

        filteredPrograms = jsonData.filter(data => data.type === "Program")
        console.log(filteredPrograms);

        //stortera och plocka ut mest pupulära - lagra i array
        sortedCourses = filteredCourses.sort((a, b) => b.applicantsTotal - a.applicantsTotal).slice(0, 6)
        console.log(sortedCourses)

        sortedPrograms = filteredPrograms.sort((a, b) => b.applicantsTotal - a.applicantsTotal).slice(0, 5)
        console.log(sortedPrograms)
        

    } catch (error) {
        console.log("Ett fel uppstod:", error.message);
    };
};

