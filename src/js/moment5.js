"use strict";

//Hämta idn
const barChartEl = document.getElementById("barChart");
const pieChartEl = document.getElementById("pieChart");

//Händelselyssnare
window.addEventListener("load", fetchData);

//Tomma arrayer för att lagra data
let mostPopularCourses = [];
let mostPopularPrograms = [];
let courses = [];
let programs = [];


async function fetchData() {
    try {
        const response = await fetch('https://studenter.miun.se/~mallar/dt211g/');
        if (!response.ok) {
            throw new Error("Det blev ett fel vid anslutiningen");
        }
        const jsonData = await response.json()

        // filtrera ut kurs/program
        courses = jsonData.filter(data => data.type === "Kurs")
        console.log(courses);

        programs = jsonData.filter(data => data.type === "Program")
        console.log(programs);

        //stortera och plocka ut mest pupulära - lagra i array
        mostPopularCourses = courses.sort((a, b) => b.applicantsTotal - a.applicantsTotal).slice(0, 6)
        console.log(mostPopularCourses)

        mostPopularPrograms = programs.sort((a, b) => b.applicantsTotal - a.applicantsTotal).slice(0, 5)
        console.log(mostPopularPrograms)
        

    } catch (error) {
        console.log("Ett fel uppstod:", error.message);
    };
};

