today = moment();

// Created variable to store the current date, created variable to select element based on currentDay ID, the wrote the currentDate var to that element
var currentDate = today.format("dddd MMMM Do"); 
const DateEl = document.getElementById("currentDay");
DateEl.innerHTML = "<p>"+ currentDate +"</p>"
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

//A very long-winded way of getting the background colors to change depending on the time of day.

if(currentHour === "9AM"){  
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
else if(currentHour === "6PM"){ 
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
else if(currentHour === "7PM"){ 
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
else if(currentHour === "8PM"){ 
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
else if(currentHour === "9PM"){ 
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
else if(currentHour === "10PM"){ 
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
else if(currentHour === "11PM"){ 
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
else { 
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







// Functions to save text in the textarea elements.

function saveText9am() { 
    var myText9am = document.getElementById("9am").value;
    localStorage.setItem("myText9am", myText9am);
    console.log("Does this still work?");

}

function saveText10am() { 
    var myText10am = document.getElementById("10am").value;
    localStorage.setItem("myText10am", myText10am);
    console.log("Does this still work?");

}

function saveText11am() { 
    var myText11am = document.getElementById("11am").value;
    localStorage.setItem("myText11am", myText11am);
    console.log("Does this still work?");

}

function saveText12pm() { 
    var myText12pm = document.getElementById("12pm").value;
    localStorage.setItem("myText12pm", myText12pm);
    console.log("Does this still work?");

}

function saveText1pm() { 
    var myText1pm = document.getElementById("1pm").value;
    localStorage.setItem("myText1pm", myText1pm);
    console.log("Does this still work?");

}

function saveText2pm() { 
    var myText2pm = document.getElementById("2pm").value;
    localStorage.setItem("myText2pm", myText2pm);
    console.log("Does this still work?");

}

function saveText3pm() { 
    var myText3pm = document.getElementById("3pm").value;
    localStorage.setItem("myText3pm", myText3pm);
    console.log("Does this still work?");

}

function saveText4pm() { 
    var myText4pm = document.getElementById("4pm").value;
    localStorage.setItem("myText4pm", myText4pm);
    console.log("Does this still work?");

}

function saveText5pm() { 
    var myText5pm = document.getElementById("5pm").value;
    localStorage.setItem("myText5pm", myText5pm);
    console.log("Does this still work?");

}





// Function to load text to page


function loadText() {
    var myText9am = localStorage.getItem("myText9am");
    var myText10am = localStorage.getItem("myText10am");
    var myText11am = localStorage.getItem("myText11am");
    var myText12pm = localStorage.getItem("myText12pm");
    var myText1pm = localStorage.getItem("myText1pm");
    var myText2pm = localStorage.getItem("myText2pm");
    var myText3pm = localStorage.getItem("myText3pm");
    var myText4pm = localStorage.getItem("myText4pm");
    var myText5pm = localStorage.getItem("myText5pm");
    
    
    document.getElementById("9am").value = myText9am;
    document.getElementById("10am").value = myText10am;
    document.getElementById("11am").value = myText11am;
    document.getElementById("12pm").value = myText12pm;
    document.getElementById("1pm").value = myText1pm;
    document.getElementById("2pm").value = myText2pm;
    document.getElementById("3pm").value = myText3pm;
    document.getElementById("4pm").value = myText4pm;
    document.getElementById("5pm").value = myText5pm;
}


// Event listeners for each individual button.

document.getElementById("saveBtn1").addEventListener("click", saveText9am); 
document.getElementById("saveBtn2").addEventListener("click", saveText10am);
document.getElementById("saveBtn3").addEventListener("click", saveText11am);
document.getElementById("saveBtn4").addEventListener("click", saveText12pm);
document.getElementById("saveBtn5").addEventListener("click", saveText1pm);
document.getElementById("saveBtn6").addEventListener("click", saveText2pm);
document.getElementById("saveBtn7").addEventListener("click", saveText3pm);
document.getElementById("saveBtn8").addEventListener("click", saveText4pm);
document.getElementById("saveBtn9").addEventListener("click", saveText5pm);



