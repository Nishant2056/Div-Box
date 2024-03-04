const paragraphElement = document.querySelector("#zero");
paragraphElement.textContent = "0"; // Set initial text content to "0"
console.log(paragraphElement.textContent);

const submitButton1 = document.querySelector(".add");
const submitButton2 = document.querySelector(".sub");
const submitButton3 = document.querySelector(".res");

// Adding click event listener to submitButton1
submitButton1.addEventListener("click", () => {
  // Reading the current value of the paragraph element
  let AddedValue = parseInt(paragraphElement.textContent);

  // Incrementing the value by 1
  AddedValue++;

  // Updating the paragraph element with the new value
  paragraphElement.textContent = AddedValue;

  console.log(paragraphElement.textContent);
});

// Adding click event listener to submitButton2
submitButton2.addEventListener("click", () => {
  // Reading the current value of the paragraph element
  let SubtractedValue = parseInt(paragraphElement.textContent);

  // Decrementing the value by 1
  SubtractedValue--;

  // Updating the paragraph element with the new value
  paragraphElement.textContent = SubtractedValue;

  console.log(paragraphElement.textContent);
});

// Adding click event listener to submitButton3
submitButton3.addEventListener("click", () => {
  // Reading the current value of the paragraph element
  let ResetValue = parseInt(paragraphElement.textContent);

  //Reseting the value to 0 Updating the paragraph element with the new value
  paragraphElement.textContent = "0";

  console.log(paragraphElement.textContent);
});
