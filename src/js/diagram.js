"use strict";

//Hämta idn
/** @type {HTMLDivElement} Elementet där bar-charten ska laddas in */
const barChartEl = document.getElementById("barChart");

/** @type {HTMLDivElement} Elementet där pie-charten ska laddas in */
const pieChartEl = document.getElementById("pieChart");

//Händelselyssnare
window.addEventListener("load", fetchData);

//Tomma arrayer för att lagra data
/**@type {array} Filtrerade kurser */
let filteredCourses = [];
/**@type {array} Filtrerade program */
let filteredPrograms = [];
/**@type {array} Sorterade kurser baserat på ansökningar */
let sortedCourses = [];
/**@type {array} Sorterade program basetar på ansökningar */
let sortedPrograms = [];
/**@type {array} Namn på kurser*/
let courseNames = [];
/**@type {array} Antal ansökningar */
let courseApplications = [];
/**@type {array} Namn på program */
let programNames = [];
/**@type {array} Antal ansökningar */
let programApplications = [];

/**
 * Funktion som hämtar JSONdata från API när sidan laddat.
 * Funktionen anropar sedan kommande funktioner för att skapa diagram baserat på datan.
 * @async
 * @function
 */
async function fetchData() {
    try {
        const response = await fetch('https://studenter.miun.se/~mallar/dt211g/');
        if (!response.ok) {
            throw new Error("Det blev ett fel vid anslutiningen");
        }
        const jsonData = await response.json()
        readBarChart(jsonData);
        readPieChart(jsonData);

    } catch (error) {
        console.log("Ett fel uppstod:", error.message);
    };
};

/**
 * Funktion som skapar ett bar-diagram baserat på datan hämtad från API:et
 * Funktionen sorterar och filtrerar ut jsondatan på kurs och de mest ansökta kurserna
 * @param {Array} jsonData - Data hämtad från API:et
 */
function readBarChart(jsonData) {

    // filtrera ut Kurser
    filteredCourses = jsonData.filter(data => data.type === "Kurs")

    // Sortera och plocka ut 6 mest populära kurser
    sortedCourses = filteredCourses.sort((a, b) => b.applicantsTotal - a.applicantsTotal).slice(0, 6)

    //Dela upp namn och antal ansökningar i separata arrayer
    courseNames = sortedCourses.map(course => course.name);
    courseApplications = sortedCourses.map(course => Number(course.applicantsTotal));

    //Skapa bar chart med apexcharts
    const mostPopularCourses = {
        chart: {
            type: 'bar',
            height: 500,
        },
        plotOptions: {
            bar: {
                borderRadius: 10,
                borderRadiusApplication: 'end'
            }
        },
        colors: ["#F28585"],
        series: [{
            name: 'Antal ansökningar 2023',
            data: courseApplications
        }],
        xaxis: {
            categories: courseNames,
            labels: {
                rotate: -35,
                style: {
                    fontSize: "10px",
                    fontWeight: "bold"
                }
            }
        }
    };

    const chart = new ApexCharts(barChartEl, mostPopularCourses);

    chart.render();
};

/**
 * Funktion som skapar ett pie-diagram baserat på datan hämtad från API:et
 * Funktionen sorterar och filtrerar ut jsondatan på program och de mest ansökta programmen.
 * @param {Array} jsonData - Data hämtad från API:et
 */
function readPieChart(jsonData) {

    // filtrera ut program
    filteredPrograms = jsonData.filter(data => data.type === "Program")

    // Sortetra och plocka ut 5 mest populära program
    sortedPrograms = filteredPrograms.sort((a, b) => b.applicantsTotal - a.applicantsTotal).slice(0, 5)

    //Dela upp namn och antal ansökningar i separata arrayer
    programNames = sortedPrograms.map(program => program.name);
    programApplications = sortedPrograms.map(program => Number(program.applicantsTotal))

        const mostPopularPrograms = {
            series: programApplications,
            chart: {
            type: 'pie',
          },
          labels: programNames,
          };
  
          const chart = new ApexCharts(pieChartEl, mostPopularPrograms);
          chart.render();

};


