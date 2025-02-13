"use strict";


// Tom array för att lagra json-data
let courseInfo = [];

//Hämta in id och lagra i variabler
let courseCodeEl = document.getElementById("courseCode");
let courseNameEl = document.getElementById("courseName");
let progressionEl = document.getElementById("progression");
let searchEl = document.getElementById("search");

//Händelsehanterare
window.addEventListener("load", init);
courseCodeEl.addEventListener("click", sortCourseCode);
courseNameEl.addEventListener("click", sortCourseName);
progressionEl.addEventListener("click", sortProgression);
searchEl.addEventListener("input", filterCourses);

//Funktion för sidladdning
function init() {

    console.log("sidan har laddat klart")

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
        console.log(courseInfo)

    } catch (error) {
        console.error("Det uppstod ett fel:", error.message);
    }

};

//funktion som skriver ut schemat
function readCourses(courseInfo) {
};

//funktion som sorterar på kurskod
function sortCourseCode() {
    console.log("sorterar kurskod")
};

//funktion som sorterar på kursnamn
function sortCourseName() {
    console.log("sorterar kursnamn")
};

//Funktion som sorterar progression
function sortProgression() {
    console.log("sorterar progression")
};

//funktion för filtrering
function filterCourses() {
    console.log("filtrerar kurser")
}