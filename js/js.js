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
    text: "Скорочена назва мови програмування JavaScript?",
    right: "js",
  },
  {
    text: "Контейнери, всередині яких ви можете зберігати значення - це?",
    right: "змінні",
  },
  {
    text: "Який оператор(символ) присвоєння в мові JavaScript?",
    right: "=",
  },
];
let questions2 = [
  {
    text: "Конструкція, що дозволяє перевірити, чи є вираз істинним чи хибним?",
    right: "if",
  },
  {
    text: "Який необов'язковий блок може містити інструкція if?",
    right: "else",
  },
  {
    text: "Чи виконається умова при виразі в if - !true? 'Так' або 'Ні'",
    right: "ні",
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
    if (input.value === "") {
      input.classList.add("incorrect");
      input.readOnly = true;
    } else if (input.value.toLowerCase() == input.dataset.right) {
      input.classList.add("correct");
      score++;
      input.readOnly = true;
    } else {
      input.classList.add("incorrect");
      input.readOnly = true;
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
/* module controle */

let questions3 = [
  {
    text: "Як оголосити змінну в JavaScript?",
    q1: "x == var;",
    q2: "var x;",
    q3: "x = var;",
    right: "var x;",
  },
  {
    text: "Як строго перевірити, чи рівні два значення в JavaScript?",
    q1: "x === y;",
    q2: "x = y;",
    q3: "x == y;",
    right: "x === y;",
  },
  {
    text: "Як визначити логічну (булеву) змінну в JavaScript?",
    q1: "boolean x = true;",
    q2: "let x = 'true';",
    q3: "let x = true;",
    right: "let x = true;",
  },
  {
    text: "Яким буде тип даних у змінної, якщо ви напишете typeof myVar;, де myVar - це число?",
    q1: "string",
    q2: "number",
    q3: "boolean",
    right: "number",
  },
  {
    text: "Який тип даних використовується для зберігання цілих чисел в JavaScript?",
    q1: "float",
    q2: "int;",
    q3: "number",
    right: "number",
  },
  {
    text: "Які з наступних операторів використовуються для логічного 'I' в JavaScript?",
    q1: "||",
    q2: "&&",
    q3: "!",
    right: "&&",
  },
  {
    text: "Яка різниця між == та === в операторах порівняння в JavaScript?",
    q1: "== порівнює значення та типи даних разом, === порівнює значення без звертання до типів даних.",
    q2: "Обидва oператори роблять однакове порівняння.",
    q3: "== порівнює значення без звертання до типів даних, === порівнює значення та типи даних разом.",
    right:
      "== порівнює значення без звертання до типів даних, === порівнює значення та типи даних разом.",
  },
  {
    text: "Як перевірити, чи виконуються обидві умови: x менше y і y менше z ?",
    q1: "if (x < y || y < z) { /* код */ }",
    q2: "if (x < y && y < z) { /* код */ }",
    q3: "if (x < y and y < z) { /* код */ }",
    right: "if (x < y && y < z) { /* код */ }",
  },
  {
    text: "Як виглядає умова в if, яка виконає код, якщо змінна temperature більше або рівна 25 градусам?",
    q1: "if temperature >= 25 { ... }",
    q2: "if (temperature >= 25) { ... }",
    q3: "if (temperature > 25) { ... }",
    right: "if (temperature >= 25) { ... }",
  },
  {
    text: "Як вивести числа від 1 до 5 включно за допомогою циклу for в JavaScript?",
    q1: "for (let i = 1; i < 5; i++) { console.log(i); }",
    q2: "for (let i = 1; i <= 5; i++) { console.log(i); }",
    q3: "for (let i = 5; i >= 1; i--) { console.log(i); }",
    right: "for (let i = 1; i <= 5; i++) { console.log(i); }",
  },
  {
    text: "Як використовувати цикл while для виведення парних чисел від 2 до 10 включно в JavaScript?",
    q1: "let i = 2; while (i <= 10) { console.log(i); i += 2; }",
    q2: "let i = 2; while (i < 10) { console.log(i); i++; }",
    q3: "let i = 10; while (i >= 2) { console.log(i); i -= 2; }",
    right: "let i = 2; while (i <= 10) { console.log(i); i += 2; }",
  },
  {
    text: "Як використовувати цикл do...while для виведення чисел від 1 до 3 включно в JavaScript?",
    q1: "let i = 1; do { console.log(i); i--; } while (i >= 3);",
    q2: "let i = 1; do { console.log(i); i++; } while (i <= 3);",
    q3: "let i = 3; do { console.log(i); i--; } while (i > 0);",
    right: "let i = 1; do { console.log(i); i++; } while (i <= 3);",
  },
];

function shuffleQuestions(questions) {
  let shuffledQuestions = [...questions];

  for (let i = shuffledQuestions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledQuestions[i], shuffledQuestions[j]] = [
      shuffledQuestions[j],
      shuffledQuestions[i],
    ];
  }

  return shuffledQuestions;
}
let shufQuestions = shuffleQuestions(questions3);
generateTestModule(test_module, shufQuestions, "quiz-label");

function generateTestModule(container, questions, inputClass) {
  let j = 1;
  for (let question of questions) {
    let div = document.createElement("div");
    div.classList.add("quiz-wrap-set");
    container.appendChild(div);

    let p = document.createElement("p");
    p.innerHTML = question.text;
    div.appendChild(p);

    for (let i = 1; i <= 3; i++) {
      let label = document.createElement("label");
      label.classList.add(inputClass);

      let input = document.createElement("input");
      input.type = "radio";
      input.name = "q" + j;
      input.value = question["q" + i];
      if (i == 1) input.setAttribute("checked", true);
      label.appendChild(input);

      label.innerHTML += " " + question["q" + i];

      div.appendChild(label);
    }
    j++;
  }
}

function submitModuleQuiz(formId) {
  let questions = document.querySelectorAll(`form#${formId} .quiz-wrap-set`);
  let i = 0;
  questions.forEach((question) => {
    let selectedOption = question.querySelector("input:checked");

    if (selectedOption.value === shufQuestions[i].right) {
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
    i++;
  });
  document.getElementById("score").innerHTML = "SCORE: " + score;
}
