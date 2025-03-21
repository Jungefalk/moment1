"use strict";

// Tom array för att lagra json-data
let courseInfo = [];

//Hämta in id och lagra i variabler
let courseCodeEl = document.getElementById("courseCode");
let courseNameEl = document.getElementById("courseName");
let progressionEl = document.getElementById("progression");
let searchEl = document.getElementById("search");
let courseTableEl = document.getElementById("courseTable");

//Händelsehanterare
window.addEventListener("load", init);
courseCodeEl.addEventListener("click", sortCourseCode);
courseNameEl.addEventListener("click", sortCourseName);
progressionEl.addEventListener("click", sortProgression);
searchEl.addEventListener("input", filterCourses);

//Funktion för sidladdning
function init() {

    loadCourses();
};

//funktion för att ladda in schemat
async function loadCourses() {
    try {
        const response = await fetch("https://webbutveckling.miun.se/files/ramschema_ht24.json");
        if (!response.ok) {
            throw new Error("Fel vid anslutning");
        }

        courseInfo = await response.json()
        readCourses(courseInfo)

    } catch (error) {
        console.error("Det uppstod ett fel:", error.message);
    }

};

//funktion som skriver ut schemat
function readCourses(courseInfo) {

    //Rensa DOM
    courseTableEl.innerHTML = "";

    //loopa data
    courseInfo.forEach(info => {
        courseTableEl.innerHTML += "<tr>" +
            "<td>" + `${info.code}` + "</td>" +
            "<td>" + `${info.coursename}` + "</td>" +
            "<td>" + `${info.progression}` + "</td>" +
            "</tr>"
    })
};

//funktion som sorterar på kurskod
function sortCourseCode() {

    const sortedCourseCode = courseInfo.sort((a, b) => a.code > b.code ? 1 : -1);
    readCourses(sortedCourseCode);

};

//funktion som sorterar på kursnamn
function sortCourseName() {

    const sortedCourseName = courseInfo.sort((a, b) => a.coursename > b.coursename ? 1 : -1);
    readCourses(sortedCourseName);
};

//Funktion som sorterar progression
function sortProgression() {

    const sortedProgression = courseInfo.sort((a, b) => a.progression > b.progression ? 1 : -1);
    readCourses(sortedProgression);
};

//funktion för filtrering
function filterCourses() {

    const filteredCourses = courseInfo.filter(course =>
        course.code.toLowerCase().includes(searchEl.value.toLowerCase()) ||
        course.coursename.toLowerCase().includes(searchEl.value.toLowerCase()) ||
        course.progression.toLowerCase().includes(searchEl.value.toLowerCase())
    );

    readCourses(filteredCourses);
}