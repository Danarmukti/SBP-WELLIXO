fetch("pertanyaan.json")
  .then((response) => response.json())
  .then((jsonData) => {
    const questions = [];
    const answers = {}; // Objek untuk menyimpan jawaban pengguna

    // Simpan semua pertanyaan dari JSON ke dalam array linear
    jsonData.pertanyaan.forEach((kategori) => {
      kategori.pertanyaan.forEach((pertanyaan) => {
        questions.push({
          ...pertanyaan,
          kategori: kategori.kategori, // Tambahkan kategori ke setiap pertanyaan
        });
      });
    });

    let currentQuestionIndex = 0; // Indeks pertanyaan saat ini
    const questionContainer = document.getElementById("pertanyaan");

    // Fungsi untuk menampilkan pertanyaan berdasarkan indeks
    function showQuestion(index) {
      questionContainer.innerHTML = ""; // Bersihkan container

      if (index < questions.length) {
        const question = questions[index];

        // Label pertanyaan
        const label = document.createElement("label");
        label.textContent = question.pertanyaan;
        label.classList.add("animate");
        questionContainer.appendChild(label);

        // Elemen input atau select
        let inputElement;
        if (question.tipe === "angka") {
          inputElement = document.createElement("input");
          inputElement.type = "number";
          inputElement.classList.add(
            "border",
            "p-4",
            "rounded-4",
            "mt-4",
            "animate"
          );
          inputElement.placeholder = `Masukkan dalam ${question.satuan}`;
          inputElement.id = "answer";
        } else if (question.tipe === "pilihan") {
          inputElement = document.createElement("select");
          inputElement.id = "answer";
          inputElement.classList.add(
            "border",
            "p-4",
            "rounded-4",
            "mt-4",
            "animate"
          );
          const defaultOption = document.createElement("option");
          defaultOption.value = "";
          defaultOption.textContent = "Pilih opsi";
          inputElement.appendChild(defaultOption);

          question.opsi.forEach((opsi) => {
            const option = document.createElement("option");
            option.value = opsi;
            option.textContent = opsi;
            inputElement.appendChild(option);
          });
        } else if (question.tipe === "teks") {
          inputElement = document.createElement("textarea");
          inputElement.classList.add(
            "border",
            "p-4",
            "rounded-4",
            "mt-4",
            "animate"
          );
          inputElement.placeholder = "Masukkan jawaban Anda di sini";
          inputElement.id = "answer";
          inputElement.rows = 4;
        }
        questionContainer.appendChild(inputElement);

        // Tombol lanjut
        const nextButton = document.createElement("button");
        nextButton.textContent = "Lanjut";
        nextButton.classList.add(
          "btn",
          "btn-dark",
          "p-3",
          "rounded-4",
          "mt-5",
          "animate"
        );
        const backButton = document.createElement("button");
        backButton.textContent = "Back";
        backButton.classList.add(
          "btn",
          "btn-danger",
          "p-3",
          "rounded-4",
          "mt-3",
          "animate"
        );
        nextButton.onclick = function () {
          const answer = document.getElementById("answer").value;
          if (answer.trim() === "") {
            questionContainer.innerHTML = `<div class="alert alert-danger" role="alert">
              data harus di isi, silakan reload (ctrl + r)
            </div>`;
            return;
          }

          // Simpan jawaban
          answers[question.id] = {
            kategori: question.kategori,
            pertanyaan: question.pertanyaan,
            jawaban: answer,
          };

          // Lanjut ke pertanyaan berikutnya
          currentQuestionIndex++;
          showQuestion(currentQuestionIndex);
        };

        questionContainer.appendChild(nextButton);
        questionContainer.appendChild(backButton);
      } else {
        // Jika semua pertanyaan selesai
        console.log("Hasil jawaban:", answers);
        showResults();
      }
    }

    // Tampilkan pertanyaan pertama
    showQuestion(currentQuestionIndex);

    // Fungsi untuk menampilkan hasil
    function showResults() {
      const weight = parseFloat(answers[1]?.jawaban); // Berat badan (kg)
      const height = parseFloat(answers[2]?.jawaban); // Tinggi badan (cm)
      const age = parseFloat(answers[3]?.jawaban); // Tinggi badan (cm)
      const gender = answers[4]?.jawaban; // Tinggi badan (cm)
      const aktif = answers[5]?.jawaban; // Tinggi badan (cm)
      const tujuan = answers[6]?.jawaban; // Tinggi badan (cm)

      if (weight && height) {
        const bmiResult = calculateBMI(weight, height);
        const bmrResult = bmrCalculate(
          weight,
          height,
          age,
          gender,
          aktif,
          tujuan
        );

        // Tampilkan hasil BMI
        questionContainer.innerHTML = `
          <div class="result-btn">HASIL BMI</div>
          <div class="bmi-container">
            <div class="bmi-bar">
              <span class="bmi-value" style="left: ${bmiResult.bmi}%">${bmiResult.bmi}</span>
            </div>
            <p class="mt-5">
              Your BMI is <strong>${bmiResult.bmi} kg/m<sup>2</sup></strong> and it's
              <span style="color: ${bmiResult.textColor}; font-weight: bold">${bmiResult.category}</span>.
            </p>
          </div>
          <div class="row mt-3">
            <h2> Kalori yang diperlukan </h2>:        
          <div
                    class="col-md-6 border text-center mb-2 mb-md-0 rounded-4"
                  >
                    <button class="btn btn-primary btn-block">
                      Tujuan anda : <b> ${bmrResult.tujuan}  </b>
                    </button>
                  </div>
                <div class="col-md-6">
                  <div class="card text-center">
                    <div class="card-body">
                      <h5 class="card-title">${bmrResult.tdee}</h5>
                      <p class="card-text">Calories/day</p>
                    </div>
                  </div>
                </div>
          </div>
        `;
      } else {
        questionContainer.innerHTML = `
          <h3>Hasil BMI Tidak Dapat Dihitung</h3>
          <p>Data berat atau tinggi badan tidak tersedia.</p>
        `;
      }
    }

    // Fungsi untuk menghitung BMI
    function calculateBMI(weight, height) {
      const heightInMeters = height / 100; // Ubah tinggi dari cm ke meter
      const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2); // Hitung BMI dengan 2 desimal
      let textColor;
      // Kategorisasi BMI
      let category = "";
      if (bmi < 18.5) {
        category = "kurang";
        textColor = "red";
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal";
        textColor = "green";
      } else if (bmi >= 25 && bmi <= 29.9) {
        category = "Berat badan berlebih (overweight)";
        textColor = "orange";
      } else {
        category = "Obesitas";
        textColor = "red";
      }

      return { bmi, category, textColor };
    }

    function bmrCalculate(kg, cm, age, gender, chooise, tujuan) {
      let bmr = 0;
      let tdee = 0;

      if (gender == "Laki-laki") {
        bmr = 10 * kg + 6.25 * cm - 5 * age + 5;
      } else {
        bmr = 10 * kg + 6.25 * cm - 5 * age - 161;
      }

      if (chooise == "Tidak aktif (sedikit atau tidak ada olahraga)") {
        tdee = bmr * 1.2;
      } else if (chooise == "Sedikit aktif (olahraga ringan 1-3 hari/minggu)") {
        tdee = bmr * 1.375;
      } else if (chooise == "Cukup aktif (olahraga sedang 3-5 hari/minggu)") {
        tdee = bmr * 1.55;
      } else if (chooise == "Sangat aktif (olahraga berat 6-7 hari/minggu)") {
        tdee = bmr * 1.725;
      } else if (
        chooise ==
        "Ekstra aktif (olahraga sangat berat atau pekerjaan fisik berat)"
      ) {
        tdee = bmr * 1.725;
      }

      if (tujuan == "Menurunkan berat badan") {
        tdee = tdee - 200;
      } else if (tujuan == "Mempertahankan berat badan") {
        tdee = tdee;
      } else if (tujuan == "Menambah berat badan") {
        tdee = tdee + 300;
        displayFoods();
      }

      tdee = tdee.toFixed(2);

      return { bmr, tdee, tujuan };
    }
  })
  .catch((error) => console.error("Error fetching JSON:", error));

fetch("datanaikinberatbadan.json")
  .then((response) => response.json())
  .then((data) => {
    const foodCardsContainer = document.getElementById("food-cards");

    function createCard(food) {
      return `
                        <div class="col-md-4 mb-4">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">${food.nama}</h5>
                                    <p class="card-text">Kalori: ${food.kalori} kcal</p>
                                    <p class="card-text">Karbohidrat: ${food.karbohidrat}g</p>
                                    <p class="card-text">Protein: ${food.protein}g</p>
                                    <p class="card-text">Serat: ${food.serat}g</p>
                                    <p class="card-text">Manfaat: ${food.manfaat}</p>
                                </div>
                            </div>
                        </div>
                    `;
    }

    function displayFoods() {
      const foods = data.makanan_tinggi_kalori.karbohidrat_kompleks;
      foods.forEach((food) => {
        foodCardsContainer.innerHTML += createCard(food);
      });
    }
  })
  .catch((error) => console.error("Error fetching data:", error));
