// Confirm script is connected
console.log("script.js connected!");

// Select all question blocks
let questionBlocks = document.querySelectorAll(".question-block");

// LOOP: Handle answer button clicks
questionBlocks.forEach(block => {
  let buttons = block.querySelectorAll(".answer-btn");

  buttons.forEach(button => {
    button.addEventListener("click", function() {

      // Remove "selected" from all buttons in this question
      buttons.forEach(btn => btn.classList.remove("selected"));

      // Add "selected" to clicked button
      this.classList.add("selected");

    });
  });
});


// FUNCTION: Calculate and display result
function displayResult() {
  let total = 0;

  // Get all selected answers
  let selectedButtons = document.querySelectorAll(".answer-btn.selected");

  // Add up points
  selectedButtons.forEach(button => {
    total += parseInt(button.dataset.points);
  });

  let resultText = "";

  // Determine result based on score
  if (total <= 5) {
    resultText = "You are a 🐱 Cat (calm and relaxed)";
  } else if (total <= 10) {
    resultText = "You are a 🐶 Dog (fun and social)";
  } else {
    resultText = "You are a 🦁 Lion (bold leader)";
  }


  function displayResult() {
  let total = 0;

  let selectedButtons = document.querySelectorAll(".answer-btn.selected");

  selectedButtons.forEach(button => {
    total += parseInt(button.dataset.points);
  });

  let resultHTML = "";

  if (total <= 5) {
    resultHTML = `
      <h2>You are a 🐱 Cat!</h2>
      <img src="https://www.muraldecal.com/en/img/arc137-jpg/folder/products-listado-merchant/stickers-super-marioraccoon.jpg" width="200">
      <p>Calm and relaxed personality.</p>
    `;
  } else if (total <= 10) {
    resultHTML = `
      <h2>You are a 🐶 Dog!</h2>
      <img src="https://www.muraldecal.com/en/img/arc137-jpg/folder/products-listado-merchant/stickers-super-marioraccoon.jpg" width="200">
      <p>Fun and social personality.</p>
    `;
  } else {
    resultHTML = `
      <h2>You are a 🦁 Lion!</h2>
      <img src="https://www.muraldecal.com/en/img/arc137-jpg/folder/products-listado-merchant/stickers-super-marioraccoon.jpg" width="200">
      <p>Bold and confident leader.</p>
    `;
  }

  document.getElementById("result-container").innerHTML = resultHTML;
}
  // Display result in DOM
  document.getElementById("result-container").textContent = resultText;
}


// BUTTON: Run result function when clicked
let resultBtn = document.getElementById("resultBtn");

resultBtn.addEventListener("click", displayResult);
