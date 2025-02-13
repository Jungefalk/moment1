"use strict";


// Tom array för att lagra json-data
let courseInfo = [];

//Hämta in id och lagra i variabler
let courseCodeEl = document.getElementById("courseCode");
let courseNameEl = document.getElementById("courseName");
let progressionEl = document.getElementById("progression");

//Händelsehanterare
window.addEventListener("load", init);
courseCodeEl.addEventListener("click", sortCourseCode);
courseNameEl.addEventListener("click", sortCourseName);
progressionEl.addEventListener("click", sortProgression);

//Funktion för sidladdning
function init() {

    console.log("sidan har laddat klart")

    loadCourses();
};

//funktion för att ladda in schemat
function loadCourses() {

};

//funktion som skriver ut schemat
function readCourses() {

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