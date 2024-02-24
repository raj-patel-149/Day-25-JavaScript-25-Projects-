const data = [
  {
    id: "1",
    question: " How can you check if a variable is an array in JavaScript?",
    answer:
      "Use the Array.isArray() method to determine if a variable is an array.",
  },
  {
    id: "2",
    question: " What does the === operator do in JavaScript?",
    answer:
      "The === operator checks for strict equality, comparing both value and type without type conversion.",
  },
  {
    id: "3",
    question: " How do you handle errors in JavaScript?",
    answer:
      "Errors in JavaScript can be handled using try...catch blocks to catch exceptions and handle them gracefully.",
  },
  {
    id: "4",
    question: "How do you declare a variable in JavaScript?",
    answer:
      "Use the var, let, or const keyword followed by the variable name to declare a variable.",
  },
  {
    id: "5",
    question: " What is the purpose of the parseInt() function in JavaScript?",
    answer:
      "parseInt() is used to convert a string to an integer.",
  },
  {
    id: "6",
    question: " How can you loop through an array in JavaScript?",
    answer:
      "Use a for loop or array methods like forEach() to iterate through elements in an array.",
  },
  
];

const accordionWrapper = document.querySelector(".accordion");

function createAccordion() {
  accordionWrapper.innerHTML = data
    .map(
      (item) => `
    <div class = "accordian_item">
    <div class = "accordion_Head">
    <h3 class = "number">(${item.id})</h3>
    <h3>${item.question}</h3>
    <i class="fa-solid fa-arrow-up"></i>
    </div>
    <div class="accordion_content">
      <p>${item.answer}</p>
    </div>
    </div>
    `
    )
    .join(" ");
}

createAccordion();

const getAccordionTitle = document.querySelectorAll(".accordion_Head");

getAccordionTitle.forEach((currentItem) => {
  currentItem.addEventListener("click", (event) => {
    if (currentItem.classList.contains("active")) {
      currentItem.classList.remove("active");
    } else {
      let getMakedActiveClass = document.querySelectorAll(".active");
      getMakedActiveClass.forEach((cuurActiveItem) => {
        cuurActiveItem.classList.remove("active");
      });

      currentItem.classList.add("active");
    }
  });
});
