fetch("pertanyaan.json")
  .then((response) => response.json())
  .then((jsonData) => {
    const questions = [];
    // Simpan semua pertanyaan dari JSON ke dalam array linear
    jsonData.pertanyaan.forEach((kategori) => {
      kategori.pertanyaan.forEach((pertanyaan) => {
        questions.push(pertanyaan);
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
        nextButton.onclick = function () {
          const answer = document.getElementById("answer").value;
          if (answer.trim() === "") {
            alert("Harap jawab pertanyaan terlebih dahulu!");
            return;
          }
          currentQuestionIndex++;
          showQuestion(currentQuestionIndex);
        };
        questionContainer.appendChild(nextButton);
      } else {
        // Jika semua pertanyaan selesai
        questionContainer.innerHTML =
          "<h2>Terima kasih telah menjawab semua pertanyaan!</h2>";
      }
    }

    // Tampilkan pertanyaan pertama
    showQuestion(currentQuestionIndex);
  })
  .catch((error) => console.error("Error fetching JSON:", error));
