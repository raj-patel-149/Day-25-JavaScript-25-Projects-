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
];

const accordionWrapper = document.querySelector(".accordion");

function createAccordion() {
  accordionWrapper.innerHTML = data
    .map(
      (item) => `
    <div class = "accordian_item">
    <div class = "accordion_Head">
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
