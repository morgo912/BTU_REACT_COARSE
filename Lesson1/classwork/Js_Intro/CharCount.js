const userInput = document.getElementById("userInput")
const charCount = document.getElementById("charCount")

//input - event type
//When something happens in the input, the function will run
userInput.addEventListener("input",() => {
  charCount.textContent = userInput.value.length;
})