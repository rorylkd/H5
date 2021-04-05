today = moment();
console.log(
   today.format("dddd Do MMMM YYYY"));

var currentDate = today.format("dddd MMMM Do"); // Created variable to store the current date, created variable to select element based on currentDay ID, the wrote the currentDate var to that element
const DateEl = document.getElementById("currentDay");
DateEl.innerHTML = "<p>"+ currentDate +"</p>"

console.log(today.format("hA")); // Getting hour from moment.js

// Element selectors

var currentHour = today.format("hA");

var nineEl = document.getElementById("9am");
var tenEl = document.getElementById("10am");
var elevenEl = document.getElementById("11am");
var noonEl = document.getElementById("12pm");
var oneEl = document.getElementById("1pm");
var twoEl = document.getElementById("2pm");
var threeEl = document.getElementById("3pm");
var fourEl = document.getElementById("4pm");
var fiveEl = document.getElementById("5pm");

if(currentHour === "9AM"){  //A very long-winded way of getting the background colors to change depending on the time of day.
    nineEl.style.backgroundColor = "#ff6961";
    tenEl.style.backgroundColor = "#77dd77";
    elevenEl.style.backgroundColor = "#77dd77";
    noonEl.style.backgroundColor = "#77dd77";
    oneEl.style.backgroundColor = "#77dd77";
    twoEl.style.backgroundColor = "#77dd77";
    threeEl.style.backgroundColor = "#77dd77";
    fourEl.style.backgroundColor = "#77dd77";
    fiveEl.style.backgroundColor = "#77dd77";
}
else if(currentHour === "10AM"){
    nineEl.style.backgroundColor = "#d3d3d3";
    tenEl.style.backgroundColor = "#ff6961";
    elevenEl.style.backgroundColor = "#77dd77";
    noonEl.style.backgroundColor = "#77dd77";
    oneEl.style.backgroundColor = "#77dd77";
    twoEl.style.backgroundColor = "#77dd77";
    threeEl.style.backgroundColor = "#77dd77";
    fourEl.style.backgroundColor = "#77dd77";
    fiveEl.style.backgroundColor = "#77dd77";
}
else if(currentHour === "11AM"){
    nineEl.style.backgroundColor = "#d3d3d3";
    tenEl.style.backgroundColor = "#d3d3d3";
    elevenEl.style.backgroundColor = "#ff6961";
    noonEl.style.backgroundColor = "#77dd77";
    oneEl.style.backgroundColor = "#77dd77";
    twoEl.style.backgroundColor = "#77dd77";
    threeEl.style.backgroundColor = "#77dd77";
    fourEl.style.backgroundColor = "#77dd77";
    fiveEl.style.backgroundColor = "#77dd77";
}
else if(currentHour === "12PM"){
    nineEl.style.backgroundColor = "#d3d3d3";
    tenEl.style.backgroundColor = "#d3d3d3";
    elevenEl.style.backgroundColor = "#d3d3d3";
    noonEl.style.backgroundColor = "#ff6961";
    oneEl.style.backgroundColor = "#77dd77";
    twoEl.style.backgroundColor = "#77dd77";
    threeEl.style.backgroundColor = "#77dd77";
    fourEl.style.backgroundColor = "#77dd77";
    fiveEl.style.backgroundColor = "#77dd77";
}
else if(currentHour === "1PM"){
    nineEl.style.backgroundColor = "#d3d3d3";
    tenEl.style.backgroundColor = "#d3d3d3";
    elevenEl.style.backgroundColor = "#d3d3d3";
    noonEl.style.backgroundColor = "#d3d3d3";
    oneEl.style.backgroundColor = "#ff6961";
    twoEl.style.backgroundColor = "#77dd77";
    threeEl.style.backgroundColor = "#77dd77";
    fourEl.style.backgroundColor = "#77dd77";
    fiveEl.style.backgroundColor = "#77dd77";
}
else if(currentHour === "2PM"){
    nineEl.style.backgroundColor = "#d3d3d3";
    tenEl.style.backgroundColor = "#d3d3d3";
    elevenEl.style.backgroundColor = "#d3d3d3";
    noonEl.style.backgroundColor = "#d3d3d3";
    oneEl.style.backgroundColor = "#d3d3d3";
    twoEl.style.backgroundColor = "#ff6961";
    threeEl.style.backgroundColor = "#77dd77";
    fourEl.style.backgroundColor = "#77dd77";
    fiveEl.style.backgroundColor = "#77dd77";
}
else if(currentHour === "3PM"){
    nineEl.style.backgroundColor = "#d3d3d3";
    tenEl.style.backgroundColor = "#d3d3d3";
    elevenEl.style.backgroundColor = "#d3d3d3";
    noonEl.style.backgroundColor = "#d3d3d3";
    oneEl.style.backgroundColor = "#d3d3d3";
    twoEl.style.backgroundColor = "#d3d3d3";
    threeEl.style.backgroundColor = "#ff6961";
    fourEl.style.backgroundColor = "#77dd77";
    fiveEl.style.backgroundColor = "#77dd77";
}
else if(currentHour === "4PM"){
    nineEl.style.backgroundColor = "#d3d3d3";
    tenEl.style.backgroundColor = "#d3d3d3";
    elevenEl.style.backgroundColor = "#d3d3d3";
    noonEl.style.backgroundColor = "#d3d3d3";
    oneEl.style.backgroundColor = "#d3d3d3";
    twoEl.style.backgroundColor = "#d3d3d3";
    threeEl.style.backgroundColor = "#d3d3d3";
    fourEl.style.backgroundColor = "#ff6961";
    fiveEl.style.backgroundColor = "#77dd77";
}
else if(currentHour === "5PM"){
    nineEl.style.backgroundColor = "#d3d3d3";
    tenEl.style.backgroundColor = "#d3d3d3";
    elevenEl.style.backgroundColor = "#d3d3d3";
    noonEl.style.backgroundColor = "#d3d3d3";
    oneEl.style.backgroundColor = "#d3d3d3";
    twoEl.style.backgroundColor = "#d3d3d3";
    threeEl.style.backgroundColor = "#d3d3d3";
    fourEl.style.backgroundColor = "#d3d3d3";
    fiveEl.style.backgroundColor = "#ff6961";
}
else if(currentHour === ("6PM" || "7PM" || "8PM" || "9PM" || "10PM" || "11PM")){ //Edgecase #1: hours later than 5pm
    nineEl.style.backgroundColor = "#d3d3d3";
    tenEl.style.backgroundColor = "#d3d3d3";
    elevenEl.style.backgroundColor = "#d3d3d3";
    noonEl.style.backgroundColor = "#d3d3d3";
    oneEl.style.backgroundColor = "#d3d3d3";
    twoEl.style.backgroundColor = "#d3d3d3";
    threeEl.style.backgroundColor = "#d3d3d3";
    fourEl.style.backgroundColor = "#d3d3d3";
    fiveEl.style.backgroundColor = "#d3d3d3";
}
else if(currentHour === ("12AM" || "1AM" || "2AM" || "3AM" || "4AM" || "5AM" || "6AM" || "7AM" || "8AM")){ //Edgecase #2: hours earlier than 9am. I know I could've just used else, but I like to write things out apparently.
    nineEl.style.backgroundColor = "#ff6961";
    tenEl.style.backgroundColor = "#ff6961";
    elevenEl.style.backgroundColor = "#ff6961";
    noonEl.style.backgroundColor = "#ff6961";
    oneEl.style.backgroundColor = "#ff6961";
    twoEl.style.backgroundColor = "#ff6961";
    threeEl.style.backgroundColor = "#ff6961";
    fourEl.style.backgroundColor = "#ff6961";
    fiveEl.style.backgroundColor = "#ff6961";
}

function saveText() {
    console.log("Write this");

}

document.getElementById("saveBtn1").addEventListener("click", saveText);
document.getElementById("saveBtn2").addEventListener("click", saveText);
document.getElementById("saveBtn3").addEventListener("click", saveText);
document.getElementById("saveBtn4").addEventListener("click", saveText);
document.getElementById("saveBtn5").addEventListener("click", saveText);
document.getElementById("saveBtn6").addEventListener("click", saveText);
document.getElementById("saveBtn7").addEventListener("click", saveText);
document.getElementById("saveBtn8").addEventListener("click", saveText);
document.getElementById("saveBtn9").addEventListener("click", saveText);

