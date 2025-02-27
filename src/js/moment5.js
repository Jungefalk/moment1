"use strict";

//Hämta idn
const barChartEl = document.getElementById("barChart");
const pieChartEl = document.getElementById("pieChart");

//Händelselyssnare
window.addEventListener("load", fetchData);

//Tomma arrayer för att lagra jsondata
const mostPopularCourses = [];
const mostPopularPrograms = [];

