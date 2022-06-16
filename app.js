const sumbitBtn = document.querySelector("#btn");
const rateNum = document.querySelectorAll("li");
const numValue = document.querySelectorAll(".item");

let selected = true;

// FUNCTIONS
function submitRating() {
  console.log(`Clicked submit`);
}

// ForEach
rateNum.forEach((num) => {
  num.addEventListener("click", () => {
    if (selected) {
      num.classList.add("activeItem");
      console.log(`added class`);
    } else {
      selected = false;
      num.classList.remove("activeItem");
      console.log("removed the class");
    }
  });
});

// EVENT LISTENERS
sumbitBtn.addEventListener("click", submitRating);
