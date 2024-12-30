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

let pounds = parseFloat(document.getElementById("pounds"));
let kg = document.getElementById("kg");
let cm = document.getElementById("cm");
let inchNumber = parseFloat(document.getElementById("inch"));
let age = document.getElementById("age");
let feet = parseFloat(document.getElementById("feet"));
let inch = inchNumber.value;

let inches = feet.value + inch / 12;

// var keterangan
const bmi = document.querySelector(".bmi-content");
const calorie = document.querySelector(".calorie-content");
const exercise = document.querySelector(".exercise-content");

const bar = document.querySelector(".bmi-value");

let bmiContent = ``;
let exerciseContent = ``;
let calorieContent = ``;

// CALCULATE
calculate.addEventListener("click", function () {
  if (unitsmeter === "us") {
    if (inch == 0 && feet.value == 0 && age.value == 0 && pounds.value == 0) {
      alert("masukan angka");
      console.log("us");
    } else {
      bmiCalculate();
      bmrCalculate();
      tdee();
    }
  }
  if (unitsmeter === "metric") {
    if (kg.value == 0 && cm.value == 0 && age.value == 0) {
      alert("masukan angka");
      console.log("metric");
    } else {
      bmiCalculate();
      bmrCalculate();
      tdee();

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
                    class="col-md-6 border text-center mb-2 mb-md-0 rounded-4"
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
                    class="col-md-6 border text-center mb-2 mb-md-0 rounded-4"
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
                    class="col-md-6 border text-center mb-2 mb-md-0 rounded-4"
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
    }
  }
});

let bmrResult = 0.0;

//formula metric
/*  Pria:
BMR= 10×berat badan(kg)+6.25×tinggi badan (cm)−5×usia (tahun)+5

Wanita:
BMR=10×berat badan (kg)+6.25×tinggi badan (cm)−5×usia (tahun)−161

*/
//formula us
/*  Pria:
BMR=66+(6.23×berat (lb))+(12.7×tinggi (in))−(6.8×usia)

Wanita:
BMR=655+(4.35×berat (lb))+(4.7×tinggi (in))−(4.7×usia)

*/

function bmrCalculate() {
  if (unitsmeter == "us") {
    if (gendereveal == "men") {
      bmrResult = 66 + 6.23 * pounds.value + 12.7 * inches - 6.8 * age.value;
    }
  }
  if (unitsmeter == "metric") {
    if (gendereveal == "men") {
      bmrResult = 10 * kg.value + 6.25 * cm.value - 5 * age.value + 5;
      console.log(bmrResult);
    }
  }
  if (unitsmeter == "us") {
    if (gendereveal == "female") {
      bmrResult = 655 + 6.23 * pounds.value + 4.7 * inches - 4.7 * age.value;
      console.log(parseInt(bmrResult));
    }
  }
  if (unitsmeter == "metric") {
    if (gendereveal == "female") {
      bmrResult = 10 * kg.value + 6.25 * cm.value - 5 * age.value - 161;
      console.log(bmrResult);
    }
  }

  return parseInt(bmrResult);
}

// function bmrCalculate() {
//   if (unitsmeter == "us") {
//     if (gendereveal == "men") {
//       bmrResult = parseFloat(
//         66 + 6.23 * pounds.value + 12.7 * inches - 6.8 * age.value
//       );
//     }
//     if (gendereveal == "Female") {
//       if (isNaN(pounds.value) || isNaN(inches) || isNaN(age.value)) {
//         console.log("Invalid input values. Please enter valid numbers.");
//         return;
//       }
//       bmrResult = parseFloat(
//         655 + 6.23 * pounds.value + 4.7 * inches - 4.7 * age.value
//       );
//     }
//     console.log(parseFloat(bmrResult));
//   }
//   if (unitsmeter == "metric") {
//     if (gendereveal == "men") {
//       if (isNaN(kg.value) || isNaN(cm.value) || isNaN(age.value)) {
//         console.log("Invalid input values. Please enter valid numbers.");
//         return;
//       }
//       bmrResult = 10 * kg.value + 6.25 * cm.value - 5 * age.value + 5;
//     }
//     if (gendereveal == "Female") {
//       if (isNaN(kg.value) || isNaN(cm.value) || isNaN(age.value)) {
//         console.log("Invalid input values. Please enter valid numbers.");
//         return;
//       }
//       bmrResult = 10 * kg.value + 6.25 * cm.value - 5 * age.value;
//     }
//     console.log(bmrResult);
//   }
//   return bmrResult;
// }

let tdeeResult;

function tdee() {
  if (actifityname == "sedentary") {
    tdeeResult = bmrResult * 1.2;
  } else if (actifityname == "moderate") {
    tdeeResult = bmrResult * 1.55;
    console.log(tdeeResult);
  } else if (actifityname == "active") {
    tdeeResult = bmrResult * 1.9;
    console.log(tdeeResult);
  }
  return parseFloat(tdeeResult);
}

let bmiResult;

function bmiCalculate() {
  if (unitsmeter == "us") {
    bmiResult = (parseFloat(pounds.value) * 703) / inches ** 2;
    console.log(bmiResult);
  } else if (unitsmeter == "metric") {
    bmiResult = kg.value / (cm.value / 100) ** 2;
    console.log(bmiResult);
  } else {
    alert("Invalid");
  }
  return bmiResult;
}
// CALCULATE
