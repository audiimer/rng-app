// Select the HTML element with a class of "count"
const randomNumberEl = document.querySelector(".randomNumber");


// Select the HTML element with a class of "buttons"
const button = document.querySelector(".button");

// Add a click event listener to the "buttons" element
button.addEventListener("click", (e) => {
  // Check if the clicked element has a class of "generate"
  if (e.target.classList.contains("generate")) {
    // If it does, input random number in UI
    const randomNum = Math.floor(Math.random() * 1000) + 1;
    randomNumberEl.textContent = `${randomNum}`;
  }
  });
