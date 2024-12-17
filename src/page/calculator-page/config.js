// press us button unit
const us = document.getElementById("usUnits");
const metric = document.getElementById("metricUnits");
const unitToggle1 = document.querySelector(".btn-switch-toggle1");
const unitToggle2 = document.querySelector(".btn-switch-toggle2");
const unitToggle3 = document.querySelector(".btn-switch-toggle3");
const men = document.getElementById("men");
const female = document.getElementById("female");
const sedentary = document.getElementById("sedentarybtn");
const moderate = document.getElementById("moderatebtn");
const actifity = document.getElementById("activebtn");
const calculate = document.getElementById("calculateCalorie");

const metricmeter = document.getElementById("usmeter");
const usmeter = document.getElementById("metricmeter");

//calculate var
let unitsmeter = "us";
let gendereveal = "";
let actifityname = "";

// choose gender
men.addEventListener("click", () => {
  gendereveal = "men";
});
// choose gender
female.addEventListener("click", () => {
  gendereveal = "female";
});

//choose actifity level
sedentary.addEventListener("click", () => {
  actifityname = "sedentary";
});
moderate.addEventListener("click", () => {
  actifityname = "moderate";
});
actifity.addEventListener("click", () => {
  actifityname = "active";
});

// UNITS INTERACTIVE

// when us unit click
// when us unit click then indicator move into us
us.addEventListener("click", () => {
  unitToggle1.style.width = "5.5rem";
  unitToggle1.style.left = "0px";
  unitToggle1.style.transition = "0.3s all ease-in-out";

  usmeter.classList.add("d-none");
  if ((usmeter.classList.contains = "d-none")) {
    usmeter.classList.remove("d-none");
    metricmeter.classList.add("d-none");
  } else {
    usmeter.classList.add("d-none");
    metricmeter.classList.remove("d-none");
  }
  unitsmeter = "us";
});

// press metric button unit
// when  unit click then indicator move into metric
metric.addEventListener("click", () => {
  unitToggle1.style.width = "110px";
  unitToggle1.style.left = "75px";
  unitToggle1.style.transition = "0.3s all ease-in-out";

  if ((metricmeter.classList.contains = "d-none")) {
    //find if class have "d-none" class
    metricmeter.classList.remove("d-none"); //if have it will be remove
    usmeter.classList.add("d-none"); //and this will be added
  } else {
    metricmeter.classList.add("d-none"); //if don't it will added
    usmeter.classList.remove("d-none"); // and this will be deleted
  }
  unitsmeter = "metric";
});

// UNITS INTERACTIVE

// GENDER INTERACTIVE

// press button unit
// when men unit click then indicator move into men
men.addEventListener("click", () => {
  unitToggle2.style.width = "100px";
  unitToggle2.style.left = "0px";
  unitToggle2.style.transition = "0.3s all ease-in-out";
});

// press button unit
// when Female unit click then indicator move into female
female.addEventListener("click", () => {
  unitToggle2.style.width = "110px";
  unitToggle2.style.left = "95px";
  unitToggle2.style.transition = "0.3s all ease-in-out";
});

// GENDER INTERACTIVE

// ACTIVITY INTERACTIVE

// press button unit
// when sedentary unit click then indicator move into sedentary
sedentary.addEventListener("click", () => {
  unitToggle3.style.width = "145px";
  unitToggle3.style.left = "0";
  unitToggle3.style.transition = "0.3s all ease-in-out";
});

// press button unit
// when moderate unit click then indicator move into moderate
moderate.addEventListener("click", () => {
  unitToggle3.style.width = "40%";
  unitToggle3.style.left = "125px";
  unitToggle3.style.transition = "0.3s all ease-in-out";
});

// press button unit
// when actifity unit click then indicator move into actifity
actifity.addEventListener("click", () => {
  unitToggle3.style.width = "30%";
  unitToggle3.style.left = "250px";
  unitToggle3.style.transition = "0.3s all ease-in-out";
});
// ACTIVITY INTERACTIVE

let pounds = document.getElementById("pounds");
let kg = document.getElementById("kg");
let cm = document.getElementById("cm");
let inchNumber = document.getElementById("inch");
let age = document.getElementById("age");
let feet = document.getElementById("feet");

// CALCULATE
calculate.addEventListener("click", function () {
  let inch = inchNumber.value;
  if (unitsmeter === "us") {
    if (inch == "" && feet.value == "" && age.value == "") {
      alert("masukan angka");
      console.log("us");
    }
  }
  if (unitsmeter === "metric") {
    if (kg.value == "" && cm.value == "" && age.value == "") {
      alert("masukan angka");
      console.log("metric");
    }
  }
});

// CALCULATE
