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

const usmeter = document.getElementById("usmeter");
const metricmeter = document.getElementById("metricmeter");
const poundmeter = document.getElementById("poundmeter");
const kgmeter = document.getElementById("kgmeter");

//calculate var
let unitsmeter = "us";
let gendereveal = "men";
let actifityname = "sedentary";

// choose gender
men.addEventListener("click", () => {
  gendereveal = "men";
});
// choose gender
female.addEventListener("click", () => {
  gendereveal = "female";
});

// UNITS INTERACTIVE

// when us unit click
// when us unit click then indicator move into us
us.addEventListener("click", () => {
  unitToggle1.style.width = "5.5rem";
  unitToggle1.style.left = "0px";
  unitToggle1.style.transition = "0.3s all ease-in-out";

  if ((usmeter.classList.contains = "d-none")) {
    usmeter.classList.remove("d-none");
    metricmeter.classList.add("d-none");
    poundmeter.classList.remove("d-none");
    kgmeter.classList.add("d-none");
  } else {
    usmeter.classList.add("d-none");
    metricmeter.classList.remove("d-none");
    poundmeter.classList.add("d-none");
    kgmeter.classList.remove("d-none");
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
    kgmeter.classList.remove("d-none");
    poundmeter.classList.add("d-none");
    metricmeter.classList.remove("d-none"); //if have it will be remove
    usmeter.classList.add("d-none"); //and this will be added
  } else {
    kgmeter.classList.add("d-none");
    poundmeter.classList.remove("d-none");
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
  //choose actifity level

  actifityname = "sedentary";
});

// press button unit
// when moderate unit click then indicator move into moderate
moderate.addEventListener("click", () => {
  unitToggle3.style.width = "40%";
  unitToggle3.style.left = "125px";
  unitToggle3.style.transition = "0.3s all ease-in-out";
  //choose actifity level

  actifityname = "moderate";
});

// press button unit
// when actifity unit click then indicator move into actifity
actifity.addEventListener("click", () => {
  unitToggle3.style.width = "30%";
  unitToggle3.style.left = "250px";
  unitToggle3.style.transition = "0.3s all ease-in-out";
  //choose actifity level

  actifityname = "active";
});
// ACTIVITY INTERACTIVE

// Update variabel input
let pounds = document.getElementById("pounds");
let kg = document.getElementById("kg");
let cm = document.getElementById("cm");
let inch = document.getElementById("inch");
let age = document.getElementById("age");
let feet = document.getElementById("feet");

// Update untuk menghitung total inch
function getInches() {
  let feetValue = parseFloat(feet.value) || 0;
  let inchValue = parseFloat(inch.value) || 0;
  return feetValue * 12 + inchValue;
}

// var keterangan
const bmi = document.querySelector(".bmi-content");
const calorie = document.querySelector(".calorie-content");
const exercise = document.querySelector(".exercise-content");

const bar = document.querySelector(".bmi-value");
let bmiResult = 0.0;
let bmiContent = ``;
let exerciseContent = ``;
let calorieContent = ``;
let bmrResult = 0.0;

// Update fungsi calculate
calculate.addEventListener("click", function () {
  // Pastikan nilai tidak kosong
  if (
    (unitsmeter === "us" &&
      (!pounds.value || !feet.value || !inch.value || !age.value)) ||
    (unitsmeter === "metric" && (!kg.value || !cm.value || !age.value))
  ) {
    alert("Harap isi semua bidang input!");
    return;
  }

  let category = "";
  let textColor = "";
  if (bmiResult < 18.5) {
    category = "Berat badan kurang";
    textColor = "red";
  } else if (bmiResult >= 18.5 && bmiResult <= 24.9) {
    category = "Berat badan normal";
    textColor = "green";
  } else if (bmiResult >= 25 && bmiResult <= 29.9) {
    category = "Berat badan berlebih (overweight)";
    textColor = "orange";
  } else {
    category = "Obesitas";
    textColor = "red";
  }

  // Hitung BMI, BMR, dan TDEE
  bmiCalculate();
  bmrCalculate();
  tdee();

  bmiContent = `
            <div class="bmi-container">
            <div class="bmi-bar">
              <span class="bmi-value">${parseFloat(bmiResult).toFixed(2)}</span>
            </div>
            <p class="mt-5">
              Your BMI is <strong>${parseFloat(bmiResult).toFixed(
                2
              )}kg/m<sup>2</sup></strong> and it's
              <span style="color: ${textColor}; font-weight: bold">${category}</span>.
            </p>
          </div>`;

  calorieContent = `<div class="container">
                <h6 class="text-center">
                  This is how much you need to eat a day:
                </h6>
                <div class="row mt-4">
                  <div
                    class="col-md-6 border border-success text-center mb-2 mb-md-0 rounded-4"
                  >
                    <button class="btn btn-primary btn-block">
                      Gain Weight
                    </button>
                  </div>
                  <div class="col-md-6">
                    <div class="card text-center">
                      <div class="card-body">
                        <h5 class="card-title">
                        <h5 class="card-title">${parseFloat(
                          tdeeResult + 500
                        ).toFixed(2)}</h5>
                        <p class="card-text">Calories/day</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row mt-4">
                  <div
                    class="col-md-6 border border-success text-center mb-2 mb-md-0 rounded-4"
                  >
                    <button class="btn btn-primary btn-block">
                      Maintain Weight
                    </button>
                  </div>
                  <div class="col-md-6">
                    <div class="card text-center">
                      <div class="card-body">
                        <h5 class="card-title">${parseFloat(tdeeResult).toFixed(
                          2
                        )}</h5>
                        <p class="card-text">Calories/day</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row mt-4">
                  <div
                    class="col-md-6 border border-success text-center mb-2 mb-md-0 rounded-4"
                  >
                    <button class="btn btn-primary btn-block">
                      Lose Weight
                    </button>
                  </div>
                  <div class="col-md-6">
                    <div class="card text-center">
                      <div class="card-body">
                        <h5 class="card-title">
                        <h5 class="card-title">${
                          parseFloat(tdeeResult).toFixed(2) - 300
                        }</h5>
                        <p class="card-text">Calories/day</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>`;

  bmi.innerHTML = bmiContent;
  calorie.innerHTML = calorieContent;

  // Update tampilan
  console.log("BMI:", bmiResult);
  console.log("BMR:", bmrResult);
  console.log("TDEE:", tdeeResult);
});

// Update fungsi bmrCalculate
function bmrCalculate() {
  let weight =
    unitsmeter === "us" ? parseFloat(pounds.value) : parseFloat(kg.value);
  let height = unitsmeter === "us" ? getInches() : parseFloat(cm.value);
  let userAge = parseFloat(age.value);

  if (isNaN(weight) || isNaN(height) || isNaN(userAge)) {
    alert("Masukkan angka yang valid untuk berat, tinggi, dan usia!");
    return;
  }

  if (unitsmeter === "us") {
    bmrResult =
      gendereveal === "men"
        ? 66 + 6.23 * weight + 12.7 * height - 6.8 * userAge
        : 655 + 4.35 * weight + 4.7 * height - 4.7 * userAge;
  } else {
    bmrResult =
      gendereveal === "men"
        ? 10 * weight + 6.25 * height - 5 * userAge + 5
        : 10 * weight + 6.25 * height - 5 * userAge - 161;
  }
  return bmrResult;
}

let tdeeResult = 0.0;

// Update fungsi tdee
function tdee() {
  if (!bmrResult) {
    alert("Harap hitung BMR terlebih dahulu!");
    return;
  }

  if (actifityname === "sedentary") {
    tdeeResult = bmrResult * 1.2;
  } else if (actifityname === "moderate") {
    tdeeResult = bmrResult * 1.55;
  } else if (actifityname === "active") {
    tdeeResult = bmrResult * 1.9;
  }
  return tdeeResult;
}

// Update fungsi bmiCalculate
function bmiCalculate() {
  let weight =
    unitsmeter === "us" ? parseFloat(pounds.value) : parseFloat(kg.value);
  let height = unitsmeter === "us" ? getInches() : parseFloat(cm.value) / 100;

  if (isNaN(weight) || isNaN(height) || height <= 0) {
    alert("Masukkan angka yang valid untuk berat dan tinggi badan!");
    return;
  }

  bmiResult =
    unitsmeter === "us" ? (weight * 703) / height ** 2 : weight / height ** 2;
  return bmiResult;
}
// CALCULATE
