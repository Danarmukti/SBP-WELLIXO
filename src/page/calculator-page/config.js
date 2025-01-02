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
const diet = document.querySelector(".diet-content");

const bar = document.querySelector(".bmi-value");
let bmiResult = 0.0;
let bmiContent = ``;
let exerciseContent = ``;
let calorieContent = ``;
let bmrResult = 0.0;
const btnLoseWeight = document.getElementById("button-loseWeight");
const btnMaintain = document.getElementById("button-maintain");
const btnGain = document.getElementById("button-gain");
const btnGainMuscle = document.getElementById("button-musclegain");
const btnLoseFat = document.getElementById("button-loseFat");
const btnMaintainMuscle = document.getElementById("button-maintainMuscle");

let chooseDietPlan = "";

btnGainMuscle.addEventListener("click", function () {
  exerciseContent = `<h6 class="text-center mb-4 text-center">
                We recommend you this Exercise plan to Gain your Muscle mass:
              </h6>
              <div class="row">
                <div class="col-md-4">
                  <div class="card border-success bg-primary text-center mb-4 h-75 align-items-center justify-content-center p-2">
                    <h5>Strength Training (Latihan Beban)</h5>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="card mb-4 h-75 bg-primary align-items-start justify-content-center">
                    <ul class="py-4" style="list-style: disc;">
                      <li>
                        Squat: Membangun otot kaki dan glutes.
                      </li>
                      <li>
                       Deadlift: Melatih otot punggung bawah, paha belakang, dan glutes.
                      </li>
                      <li>
                       Bench Press: Untuk otot dada, bahu, dan triceps.
                      </li>
                      <li>
                       Pull-Up/Chin-Up: Memperkuat punggung dan biceps
                      </li>
                      <li>
                       Overhead Press: Fokus pada bahu dan triceps.
                      </li>
                      <li>
                       Barbell Row: Latihan untuk punggung atas dan lengan
                      </li>
                  </ul>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <div class="card border-success bg-primary text-center mb-4 h-75 align-items-center justify-content-center p-2">
                    <h5>Isolation Exercises</h5>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="card mb-4 h-75 bg-primary align-items-start justify-content-center">
                    <ul class="py-4"  style="list-style: disc;">
                      <li>
                        Biceps curl (biceps)
                      </li>
                      <li>
                        Triceps extension (triceps)
                      </li>
                      <li>
                        Lateral raise (bahu)
                      </li>
                      <li>
                        Calf raise (betis)
                      </li>
                      
                  </ul>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <div class="card border-success bg-primary text-center mb-4 h-75 align-items-center justify-content-center p-2">
                    <h5>Core Training</h5>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="card mb-4 h-75 bg-primary align-items-start justify-content-center">
                    <ul class="py-4" style="list-style: disc;">
                      <li>
                        Plank
                      </li>
                      <li>
                        Hanging leg raises
                      </li>
                      <li>
                        Russian twists
                      </li>
                  </ul>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <div class="card border-success bg-primary text-center mb-4 h-75 align-items-center justify-content-center p-2">
                    <h5>Progressive Overload</h5>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="card mb-4 h-75 bg-primary align-items-start justify-content-center">
                    <ul class="py-4" style="list-style: disc;">
                      <li>
                        Tingkatkan beban secara bertahap untuk merangsang pertumbuhan otot.
                      </li>
                  </ul>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <div class="card border-success bg-primary text-center mb-4 h-75 align-items-center justify-content-center p-2">
                    <h5>Durasi dan Repetisi:</h5>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="card mb-4 h-75 bg-primary align-items-start justify-content-center">
                    <ul class="py-4" style="list-style: disc;">
                      <li>
                       Setiap latihan: 3-4 set, 8-12 repetisi (untuk hipertrofi otot).
                      </li>
                      <li>
                   Istirahat antar set: 60-90 detik.
                      </li>
                  </ul>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <div class=" mb-4 h-75 bg-primary align-items-start justify-content-center">
                    <ul style="list-style: disc;">
                      <h6>Tips tambahan</h6>
                      <li class="ms-md-5">
                        Tidur cukup: 7-9 jam per malam untuk pemulihan otot.
                      </li >
                      <li class="ms-md-5">
                        Hidrasi: Minum air yang cukup, terutama selama latihan
                      </li >
                      <li class="ms-md-5">
                      Catat perkembangan: Lacak beban dan repetisi untuk memantau kemajuan.
                      </li>
                  </ul>
                  </div>
                </div>
              </div>`;
  exercise.innerHTML = exerciseContent;
});
btnLoseFat.addEventListener("click", function () {
  exerciseContent = `<h6 class="text-center mb-4 text-center">
                We recommend you this Exercise plan to Fat loss:
              </h6>
              <div class="row">
                <div class="col-md-4">
                  <div class="card border-success bg-primary text-center mb-4 h-75 align-items-center justify-content-center p-2">
                    <h5>Latihan Kardio (Aerobik) untuk Pembakaran Kalori</h5>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="card mb-4 h-75 bg-primary align-items-start justify-content-center">
                    <ul class="py-4" style="list-style: disc;">
                      <li>
                        Membantu menciptakan defisit kalori.
                      </li>
                      <li>
                       Contoh: Jogging, berjalan cepat, bersepeda, berenang.
                      </li>
                      <li>
                       Frekuensi: 3–5 kali seminggu.
                      </li>
                      <li>
                       Durasi: 30–60 menit per sesi, dengan intensitas sedang.
                      </li>
                  </ul>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <div class="card border-success bg-primary text-center mb-4 h-75 align-items-center justify-content-center p-2">
                    <h5>Latihan Kekuatan (Strength Training) untuk Massa Otot</h5>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="card mb-4 h-75 bg-primary align-items-start justify-content-center">
                    <ul class="py-4"  style="list-style: disc;">
                      <li>
                        Penting untuk mempertahankan otot saat membakar lemak.
                      </li>
                      <li>
                        Contoh: Squat, deadlift, bench press, push-up, pull-up.
                      </li>
                      <li>
                        Frekuensi: 2–4 kali seminggu.
                      </li>
                      <li>
                        Fokus pada gerakan compound yang melibatkan banyak kelompok otot.
                      </li>
                  </ul>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <div class="card border-success bg-primary text-center mb-4 h-75 align-items-center justify-content-center p-2">
                    <h5>Latihan HIIT (High-Intensity Interval Training) untuk Efek Afterburn</h5>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="card mb-4 h-75 bg-primary align-items-start justify-content-center">
                    <ul class="py-4" style="list-style: disc;">
                      <li>
                        Membakar lemak lebih cepat dan meningkatkan metabolisme bahkan setelah latihan selesai.
                      </li>
                      <li>
                        Sprint 30 detik, jalan cepat 1 menit (ulang 8–10 kali).
                      </li>
                      <li>
                        Kombinasi burpees, mountain climbers, jumping jacks (30 detik setiap gerakan, ulang 4–6 set).
                      </li>
                      <li>
                        Frekuensi: 2–3 kali seminggu.
                      </li>
                  </ul>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <div class="card border-success bg-primary text-center mb-4 h-75 align-items-center justify-content-center p-2">
                    <h5>Latihan Fungsional dan Mobilitas untuk Variasi</h5>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="card mb-4 h-75 bg-primary align-items-start justify-content-center">
                    <ul class="py-4" style="list-style: disc;">
                      <li>
                        Aktivitas yang melibatkan seluruh tubuh untuk menjaga keseimbangan otot dan fleksibilitas.
                      </li>
                      <li>
                        Contoh: TRX training, yoga, atau Pilates.
                      </li>
                  </ul>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <div class="card border-success bg-primary text-center mb-4 h-75 align-items-center justify-content-center p-2">
                    <h5>Durasi dan Repetisi:</h5>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="card mb-4 h-75 bg-primary align-items-start justify-content-center">
                    <ul class="py-4" style="list-style: disc;">
                      <li>
                       Setiap latihan: 3-4 set, 8-12 repetisi (untuk hipertrofi otot).
                      </li>
                      <li>
                   Istirahat antar set: 60-90 detik.
                      </li>
                  </ul>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <div class=" mb-4 h-75 bg-primary align-items-start justify-content-center">
                    <ul style="list-style: disc;">
                      <h6>Tips tambahan</h6>
                      <li class="ms-md-5">
                        Defisit Kalori dengan Pola Makan
                      </li >
                      <li class="ms-md-5">
                       Progressive Overload
                       <ul style="list-style: disc;">
                        <li> Tingkatkan intensitas atau beban latihan secara bertahap untuk terus merangsang pembakaran lemak. </li> 
                       </ul>
                      </li >
                      <li class="ms-md-5">
                      Selain olahraga, tetap aktif sepanjang hari (menggunakan tangga, berjalan kaki, dll.).
                      </li>
                      <li class="ms-md-5">
                     Tidur cukup (7–8 jam per malam) untuk mengoptimalkan pemulihan dan hormon pembakar lemak seperti leptin.
                      </li>
                      <li class="ms-md-5">
                     Jangan berlebihan, karena tubuh perlu waktu untuk pemulihan agar hasil latihan lebih maksimal.
                      </li>
                  </ul>
                  </div>
                </div>
              </div>`;
  exercise.innerHTML = exerciseContent;
});
btnMaintainMuscle.addEventListener("click", function () {
  exerciseContent = `<h6 class="text-center mb-4 text-center">
                We recommend you this Exercise plan to Maintain your Muscle mass:
              </h6>
              <div class="row">
                <div class="col-md-4">
                  <div class="card border-success bg-primary text-center mb-4 h-75 align-items-center justify-content-center p-2">
                    <h5>Strength Training (Latihan Beban)</h5>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="card mb-4 h-75 bg-primary align-items-start justify-content-center">
                    <ul class="py-4" style="list-style: disc;">
                      <li>
                        Squat, deadlift, bench press, push-up, pull-up.
                      </li>
                      <li>
                       Gunakan beban moderat dan lakukan 2–3 kali seminggu.
                      </li>
                  </ul>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <div class="card border-success bg-primary text-center mb-4 h-75 align-items-center justify-content-center p-2">
                    <h5>Latihan Kardio (Aerobik)</h5>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="card mb-4 h-75 bg-primary align-items-start justify-content-center">
                    <ul class="py-4"  style="list-style: disc;">
                      <li>
                        Berjalan cepat, jogging, bersepeda, berenang.
                      </li>
                      <li>
                        Durasi: 150 menit per minggu (30 menit, 5 kali seminggu).
                      </li>
                  </ul>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <div class="card border-success bg-primary text-center mb-4 h-75 align-items-center justify-content-center p-2">
                    <h5>Latihan Fleksibilitas dan Mobilitas</h5>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="card mb-4 h-75 bg-primary align-items-start justify-content-center">
                    <ul class="py-4" style="list-style: disc;">
                      <li>
                        Yoga, stretching dinamis, atau Pilates.
                      </li>
                      <li>
                        Lakukan 1–2 kali seminggu.
                      </li>
                  </ul>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <div class="card border-success bg-primary text-center mb-4 h-75 align-items-center justify-content-center p-2">
                    <h5>Latihan HIIT (High-Intensity Interval Training)</h5>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="card mb-4 h-75 bg-primary align-items-start justify-content-center">
                    <ul class="py-4" style="list-style: disc;">
                      <li>
                        Bisa dilakukan 1–2 kali seminggu untuk menjaga stamina dan kebugaran.
                      </li>
                      <li>
                        Sprint 20 detik, jalan 40 detik, ulangi 8–10 kali.
                      </li>
                  </ul>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <div class="card border-success bg-primary text-center mb-4 h-75 align-items-center justify-content-center p-2">
                    <h5>Olahraga Rekreasi</h5>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="card mb-4 h-75 bg-primary align-items-start justify-content-center">
                    <ul class="py-4" style="list-style: disc;">
                      <li>
                       Aktivitas ringan yang menyenangkan juga bisa membantu menjaga berat badan.
                      </li>
                      <li>
                  Contoh: Bermain badminton, tenis meja, basket, atau hiking.
                      </li>
                  </ul>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <div class=" mb-4 h-75 bg-primary align-items-start justify-content-center">
                    <ul style="list-style: disc;">
                      <h6>Tips tambahan</h6>
                      <li class="ms-md-5">
                        Fokus pada rutinitas daripada intensitas tinggi.
                      </li >
                      <li class="ms-md-5">
                        Cukup lakukan 3–5 sesi latihan per minggu.
                      </li >
                      <li class="ms-md-5">
                      Konsumsi makanan seimbang sesuai kebutuhan kalori harian (tidak berlebih atau kurang).
                      </li>
                      <li class="ms-md-5">
                      Tetap aktif sepanjang hari, seperti berjalan kaki atau menggunakan tangga.
                      </li>
                      <li class="ms-md-5">
                      Jangan terlalu sering latihan berat. Beri tubuh waktu untuk istirahat agar tidak overtraining.
                      </li>
                      <li class="ms-md-5">
                      Pilih olahraga yang kamu nikmati agar mudah dijalani dalam jangka panjang.

                      </li>
                  </ul>
                  </div>
                </div>
              </div>`;
  exercise.innerHTML = exerciseContent;
});

btnLoseWeight.addEventListener("click", function () {
  chooseDietPlan = "lose weight";
  console.log(chooseDietPlan);
  dietContent = `<h6 class="text-center mb-4 text-center">
                We recommend you this Diet plan to Lose your Weight:
              </h6>
              <div class="row">
                <div class="col-md-4">
                  <div class="card border-success bg-primary text-center mb-4 h-75 align-items-center justify-content-center p-2">
                    <h5>Breakfast (07:00 - 08:00) </h5>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="card mb-4 h-75 bg-primary align-items-start justify-content-center">
                    <ul style="list-style: disc;">
                      <li>
                        Oatmeal dengan irisan buah (pisang/apel) dan taburan chia seed.
                      </li>
                      <li>
                       Telur rebus atau orak-arik dengan sedikit minyak zaitun.
                      </li>
                  </ul>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <div class="card border-success bg-primary text-center mb-4 h-75 align-items-center justify-content-center p-2">
                    <h5>Snack Pagi (10:00 - 11:00) </h5>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="card mb-4 h-75 bg-primary align-items-start justify-content-center">
                    <ul  style="list-style: disc;">
                      <li>
                        Segenggam kacang almond atau 1 buah kecil (apel/jeruk).
                      </li>
                      
                  </ul>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <div class="card border-success bg-primary text-center mb-4 h-75 align-items-center justify-content-center p-2">
                    <h5>Lunch | Makan Siang (12:00 - 13:00)</h5>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="card mb-4 h-75 bg-primary align-items-start justify-content-center">
                    <ul style="list-style: disc;">
                      <li>
                        Nasi merah/ubi (1/2 porsi), dada ayam panggang/rebus, dan sayuran kukus.
                      </li>
                      <li>
                        Tambahkan sedikit minyak zaitun atau perasan lemon untuk rasa.
                      </li>
                  </ul>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <div class="card border-success bg-primary text-center mb-4 h-75 align-items-center justify-content-center p-2">
                    <h5>Snack Sore (15:00 - 16:00) </h5>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="card mb-4 h-75 bg-primary align-items-start justify-content-center">
                    <ul style="list-style: disc;">
                      <li>
                        Greek yogurt rendah lemak dengan buah beri atau 1 potong kecil dark chocolate (minimal 70% cocoa).
                      </li>
                     

                  </ul>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <div class="card border-success bg-primary text-center mb-4 h-75 align-items-center justify-content-center p-2">
                    <h5>Dinner (18:00 - 19:00) </h5>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="card mb-4 h-75 bg-primary align-items-start justify-content-center">
                    <ul style="list-style: disc;">
                      <li>
                       Salad sayuran dengan dada ayam panggang atau tahu/tempe.
                      </li>
                      <li>
                   Hindari karbohidrat berat di malam hari.
                      </li>
                  </ul>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <div class="card border-success bg-primary mb-4 h-75 align-items-center justify-content-center">
                    <h5>Snack Malam (21:00 - 22:00) </h5>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="card mb-4 h-75 bg-primary align-items-start justify-content-center">
                    <ul style="list-style: disc;">
                      <li>
                       Segelas teh hijau tanpa gula atau infused water. Jika lapar, tambahkan 1 buah kecil seperti kiwi atau jeruk.
                      </li>
                  </ul>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <div class=" mb-4 h-75 bg-primary align-items-start justify-content-center">
                    <ul style="list-style: disc;">
                      <h6>Tips</h6>
                      <li class="ms-md-5">
                        Gunakan piring kecil untuk membantu mengontrol jumlah makanan.
                      </li >
                      <li class="ms-md-5">
                        Hindari makan berlebihan, meskipun itu makanan sehat.
                      </li >
                      <li class="ms-md-5">
                      Beri jeda sekitar 2-3 jam sebelum tidur untuk membantu pencernaan.
                      </li>
                      <li class="ms-md-5">
                Kurangi makanan olahan dan cepat saji yang tinggi gula, garam, dan lemak jenuh.
                      </li>
                      <li class="ms-md-5">
               Kombinasikan pola makan sehat dengan olahraga, seperti jalan kaki, jogging, atau angkat beban.

                      </li>
                      <li class="ms-md-5">
               Minum segelas air sebelum makan untuk mengurangi rasa lapar berlebih.

                      </li>
                  </ul>
                  </div>
                </div>
              </div>`;
  diet.innerHTML = dietContent;
});
btnMaintain.addEventListener("click", function () {
  chooseDietPlan = "maintain weight";
  console.log(chooseDietPlan);
  dietContent = `<h6 class="text-center mb-4 text-center">
                We recommend you this Diet plan to Maintain your Weight:
              </h6>
              <div class="row">
                <div class="col-md-4">
                  <div class="card border-success bg-primary text-center mb-4 h-75 align-items-center justify-content-center p-2">
                    <h5>Breakfast (07:00 - 08:00) </h5>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="card mb-4 h-75 bg-primary align-items-start justify-content-center">
                    <ul style="list-style: disc;">
                      <li>
                        Oatmeal dengan susu rendah lemak, irisan buah, dan taburan chia seed.
                      </li>
                      <li>
                       Alternatif: 2 roti gandum dengan selai kacang dan 1 telur rebus.
                      </li>
                  </ul>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <div class="card border-success bg-primary text-center mb-4 h-75 align-items-center justify-content-center p-2">
                    <h5>Snack Pagi (10:00 - 11:00) </h5>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="card mb-4 h-75 bg-primary align-items-start justify-content-center">
                    <ul  style="list-style: disc;">
                      <li>
                        Alternatif: 2 roti gandum dengan selai kacang dan 1 telur rebus.
                      </li>
                      
                  </ul>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <div class="card border-success bg-primary text-center mb-4 h-75 align-items-center justify-content-center p-2">
                    <h5>Lunch | Makan Siang (12:00 - 13:00)</h5>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="card mb-4 h-75 bg-primary align-items-start justify-content-center">
                    <ul style="list-style: disc;">
                      <li>
                        Nasi merah (1 porsi sedang), ayam/daging tanpa lemak/ikan panggang, dan sayuran kukus/tumis.
                      </li>
                      <li>
                        Tambahkan sedikit minyak zaitun untuk lemak sehat.
                      </li>
                  </ul>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <div class="card border-success bg-primary text-center mb-4 h-75 align-items-center justify-content-center p-2">
                    <h5>Snack Sore (15:00 - 16:00) </h5>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="card mb-4 h-75 bg-primary align-items-start justify-content-center">
                    <ul style="list-style: disc;">
                      <li>
                        Greek yogurt rendah lemak dengan madu atau buah beri.
                      </li>
                      <li>
                        Alternatif: Smoothie buah dengan susu almond.
                      </li>

                  </ul>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <div class="card border-success bg-primary text-center mb-4 h-75 align-items-center justify-content-center p-2">
                    <h5>Dinner (18:00 - 19:00) </h5>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="card mb-4 h-75 bg-primary align-items-start justify-content-center">
                    <ul style="list-style: disc;">
                      <li>
                       Porsi kecil karbohidrat kompleks (nasi merah/kentang), protein (ikan/tahu), dan sayuran segar.
                      </li>
                      <li>
                     Hindari makanan tinggi gula dan lemak menjelang malam.
                      </li>
                  </ul>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <div class="card border-success bg-primary mb-4 h-75 align-items-center justify-content-center">
                    <h5>Snack Malam (21:00 - 22:00) </h5>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="card mb-4 h-75 bg-primary align-items-start justify-content-center">
                    <ul style="list-style: disc;">
                      <li>
                       Segelas susu rendah lemak atau infused water jika merasa lapar.
                      </li>
                  </ul>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <div class=" mb-4 h-75 bg-primary align-items-start justify-content-center">
                    <ul style="list-style: disc;">
                      <h6>Tips</h6>
                      <li class="ms-md-5">
                        Jangan terlalu banyak atau terlalu sedikit, sesuaikan dengan tingkat aktivitas harianmu.
                      </li >
                      <li class="ms-md-5">
                        Lakukan olahraga ringan seperti berjalan, yoga, atau aktivitas fisik lainnya untuk menjaga kebugaran.
                      </li >
                      <li class="ms-md-5">
                       Pastikan kalori yang masuk sama dengan kalori yang keluar.
                      </li>
                    
                      <li class="ms-md-5">
                Serat membantu menjaga kenyang lebih lama, dan air penting untuk metabolisme tubuh.
                      </li>
                      <li class="ms-md-5">
               Sesekali nikmati makanan favoritmu (cheat day) untuk menghindari kejenuhan.
                      </li>
                  </ul>
                  </div>
                </div>
              </div>`;

  diet.innerHTML = dietContent;
});
btnGain.addEventListener("click", function () {
  chooseDietPlan = "Gain weight";
  console.log(chooseDietPlan);
  dietContent = `<h6 class="text-center mb-4 text-center">
                We recommend you this Diet plan to Gain your Weight:
              </h6>
              <div class="row">
                <div class="col-md-4">
                  <div class="card border-success bg-primary text-center mb-4 h-75 align-items-center justify-content-center p-2">
                    <h5>Breakfast (07:00 - 08:00) </h5>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="card mb-4 h-75 bg-primary align-items-start justify-content-center">
                    <ul style="list-style: disc;">
                      <li>
                        Oatmeal dengan susu full fat, irisan pisang, dan madu.
                      </li>
                      <li>
                        Telur rebus/goreng dan roti gandum dengan selai kacang.
                      </li>
                  </ul>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <div class="card border-success bg-primary text-center mb-4 h-75 align-items-center justify-content-center p-2">
                    <h5>Snack Pagi (10:00 - 11:00) </h5>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="card mb-4 h-75 bg-primary align-items-start justify-content-center">
                    <ul  style="list-style: disc;">
                      <li>
                        Segenggam kacang-kacangan atau smoothie buah tinggi kalori.
                      </li>
                      
                  </ul>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <div class="card border-success bg-primary text-center mb-4 h-75 align-items-center justify-content-center p-2">
                    <h5>Lunch | Makan Siang (12:00 - 13:00)</h5>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="card mb-4 h-75 bg-primary align-items-start justify-content-center">
                    <ul style="list-style: disc;">
                      <li>
                        Nasi merah dengan ayam panggang, tempe, dan sayuran hijau.
                      </li>
                      <li>
                        Tambahkan 1 sendok makan minyak zaitun ke sayuran.
                      </li>
                  </ul>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <div class="card border-success bg-primary text-center mb-4 h-75 align-items-center justify-content-center p-2">
                    <h5>Snack Sore (15:00 - 16:00) </h5>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="card mb-4 h-75 bg-primary align-items-start justify-content-center">
                    <ul style="list-style: disc;">
                      <li>
                        Greek yogurt dengan granola dan buah-buahan.
                      </li>
                      <li>
                        Sandwich isi alpukat dan keju.
                      </li>

                  </ul>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <div class="card border-success bg-primary text-center mb-4 h-75 align-items-center justify-content-center p-2">
                    <h5>Dinner (18:00 - 19:00) </h5>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="card mb-4 h-75 bg-primary align-items-start justify-content-center">
                    <ul style="list-style: disc;">
                      <li>
                       Nasi, ikan panggang, tahu, atau daging tanpa lemak.
                      </li>
                      <li>
                     Sayuran tumis atau kukus.
                      </li>
                  </ul>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <div class="card border-success bg-primary mb-4 h-75 align-items-center justify-content-center">
                    <h5>Snack Malam (21:00 - 22:00) </h5>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="card mb-4 h-75 bg-primary align-items-start justify-content-center">
                    <ul style="list-style: disc;">
                      <li>
                       Segelas susu hangat atau protein shake dengan selai kacang.
                      </li>
                  </ul>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <div class=" mb-4 h-75 bg-primary align-items-start justify-content-center">
                    <ul style="list-style: disc;">
                      <h6>Tips</h6>
                      <li class="ms-md-5">
                        Makan lebih sering: 5–6 kali sehari dalam porsi kecil hingga sedang.
                      </li >
                      <li class="ms-md-5">
                        Tambahkan kalori secara bertahap agar tubuh bisa beradaptasi.
                      </li >
                      <li class="ms-md-5">
                        Kombinasikan makanan berkalori tinggi dengan aktivitas olahraga seperti angkat beban untuk meningkatkan massa otot, bukan lemak.
                      </li>
                      <li class="ms-md-5">
                        Hindari makanan cepat saji yang hanya menambah lemak tidak sehat.
                      </li>
                  </ul>
                  </div>
                </div>
              </div>`;

  diet.innerHTML = dietContent;
});

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
  } else {
    bmiCalculate();
    bmrCalculate();
    tdee();

    let category = "";
    let textColor = "";
    if (bmiResult < 18.5) {
      category = "Berat badan kurang";
      textColor = "red";
    } else if (bmiResult >= 18.5 && bmiResult <= 25.0) {
      category = "Berat badan normal";
      textColor = "green";
    } else if (bmiResult >= 25 && bmiResult <= 29.9) {
      category = "Berat badan berlebih (overweight)";
      textColor = "orange";
    } else {
      category = "Obesitas";
      textColor = "red";
    }
    let dietContent = "";
    let exerciseContent = "";

    // Hitung BMI, BMR, dan TDEE

    const bmiValue = bmiResult; // Contoh nilai BMI
    const indicator = document.querySelector(".indicator");

    // Range BMI (misalnya, dari 16 sampai 40)
    const minBMI = 16;
    const maxBMI = 40;

    // Hitung posisi indikator
    const leftPosition = ((bmiValue - minBMI) / (maxBMI - minBMI)) * 100;

    bmiContent = `
              <div class="bmi-indicator">
  <div class="progress position-relative" style="height: 20px; border-radius: 10px; ">
    <div class="progress-bar bg-danger" style="width: 15%;"></div>
    <div class="progress-bar bg-success" style="width: 25%;"></div>
    <div class="progress-bar bg-warning" style="width: 25%;"></div>
    <div class="progress-bar bg-danger" style="width: 50%;"></div>
        <div class="indicator" style="left: ${leftPosition}%;">
          <span>${parseFloat(bmiResult).toFixed(2)}</span>
        </div>
      </div>
      <p class="mt-2 text-center">
        Your BMI is <strong>${parseFloat(bmiResult).toFixed(
          2
        )} kg/m²</strong> and
        it's <span style="color: ${textColor}">${category}</span>.
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
                          <h5 class="card-title">${parseFloat(
                            tdeeResult
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
    diet.innerHTML = dietContent;

    // Update tampilan
    console.log("BMI:", bmiResult);
    console.log("BMR:", bmrResult);
    console.log("TDEE:", tdeeResult);
  }
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
