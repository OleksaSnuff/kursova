let score = 0;
function showSectionOnClick(buttonId, sectionId) {
  document.getElementById(buttonId).addEventListener("click", function () {
    document.getElementById(sectionId).classList.remove("visually-hidden");
    window.scrollBy({
      top: 500,
      behavior: "smooth",
    });
  });
}
showSectionOnClick("zero-butt", "first-section");
showSectionOnClick("first-butt", "second-section");
document.getElementById("module-butt").addEventListener("click", function () {
  document.getElementById("section-0").classList.add("visually-hidden");
  document.getElementById("section-1").classList.add("visually-hidden");
  document.getElementById("section-2").classList.add("visually-hidden");
  document.getElementById("section-3").classList.remove("visually-hidden");
  window.scrollBy({
    top: -1500,
    behavior: "smooth",
  });
});
let questions1 = [
  {
    text: "Скорочена  назва таблиці стилів?",
    right: "CSS",
  },
  {
    text: "Хто верстає сайти?",
    right: "верстальник",
  },
  {
    text: "Найпопулярніший CSS-фреймворк?",
    right: "Bootstrap",
  },
];
let questions2 = [
  {
    text: "Як перекладається аббревіатура HTML?",
    right: "Гіпертекстова Мова Розмітки",
  },
  {
    text: "Хто розробляє дизайн сайту?",
    right: "дизайнер",
  },
  {
    text: "Яка мова програмування ?",
    right: "JavaScript",
  },
];
/*============================Test==========================*/
function generateTestBlock(container, questions, inputClass, buttonSelector) {
  for (let question of questions) {
    let div = document.createElement("div");
    container.appendChild(div);

    let p = document.createElement("p");
    p.innerHTML = question.text;
    div.appendChild(p);

    let input = document.createElement("input");
    input.classList.add(inputClass);
    input.setAttribute("required", true);
    input.dataset.right = question.right;
    div.appendChild(input);
  }

  let button = document.querySelector(buttonSelector);
  button.addEventListener("click", function () {
    checkAnswers(container, inputClass);
    button.disabled = true;
  });
}

function checkAnswers(container, inputClass) {
  let inputs = container.querySelectorAll(`.${inputClass}`);

  for (let input of inputs) {
    input.classList.remove("correct");
    input.classList.remove("incorrect");

    if (input.value === "") {
      //!!!!!!!!!!!!
    } else if (input.value == input.dataset.right) {
      input.classList.add("correct");
      score++;
      input.disabled = true;
    } else {
      input.classList.add("incorrect");
      input.disabled = true;
    }
  }
}

// Використання функції для першого блоку
generateTestBlock(test, questions1, "quiz-input", "#button");

// Використання функції для другого блоку
generateTestBlock(test_1, questions2, "quiz-input", "#button1");
/*========================Radio=========================== */
function submitQuiz(formId) {
  let questions = document.querySelectorAll(`form#${formId} .quiz-wrap-set`);

  questions.forEach((question) => {
    let selectedOption = question.querySelector("input:checked");

    if (selectedOption.value === "true") {
      score++;
      question.classList.add("correct");
    } else {
      question.classList.add("incorrect");
    }

    let inputs = question.querySelectorAll("input");
    inputs.forEach((input) => {
      input.disabled = true;
    });
    let callingButton = event.currentTarget;
    callingButton.disabled = true;
  });
  document.getElementById("score").innerHTML = "SCORE: " + score;
}
/*=============================Модульний================================ */
document.getElementById("module-check").addEventListener("click", function () {
  document.getElementById("modal-section").classList.add("is-open");
});

document.getElementById("close-modal").addEventListener("click", function () {
  document.getElementById("modal-section").classList.remove("is-open");
});
function reload() {
  score = 0;
  location.reload();
}
