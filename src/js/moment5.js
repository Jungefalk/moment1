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
let courseNames = [];
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
        readBarChart(jsonData);
        readPieChart(jsonData);

    } catch (error) {
        console.log("Ett fel uppstod:", error.message);
    };
};

function readBarChart(jsonData) {

    // filtrera ut Kurser
    filteredCourses = jsonData.filter(data => data.type === "Kurs")
    console.log(filteredCourses);

    // Sortera och plocka ut 6 mest populära kurser
    sortedCourses = filteredCourses.sort((a, b) => b.applicantsTotal - a.applicantsTotal).slice(0, 6)
    console.log(sortedCourses)

    //Dela upp namn och antal ansökningar i separata arrayer
    courseNames = sortedCourses.map(course => course.name);
    console.log(courseNames);
    courseApplications = sortedCourses.map(course => course.applicantsTotal);
    console.log(courseApplications);

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

    }

    const chart = new ApexCharts(barChartEl, mostPopularCourses);

    chart.render();
};

function readPieChart(jsonData) {

    // filtrera ut program
    filteredPrograms = jsonData.filter(data => data.type === "Program")
    console.log(filteredPrograms);

    // Sortetra och plocka ut 5 mest populära program
    sortedPrograms = filteredPrograms.sort((a, b) => b.applicantsTotal - a.applicantsTotal).slice(0, 5)
    console.log(sortedPrograms)

    //Dela upp namn och antal ansökningar i separata arrayer
    programNames = sortedPrograms.map(program => program.name);
    console.log(programNames)
    programApplications = sortedPrograms.map(program => program.applicantsTotal)
    console.log(programApplications)

};


