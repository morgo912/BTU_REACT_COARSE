const increaseBtn = document.getElementById("increse")
const decreaseBtn = document.getElementById('decrese')
const countText = document.getElementById("count") // reference to the HTML element (used only to display the number(h2 content), not for calculations)

let  count = 0; //the variable to store the number value shown in the countTex element 

function countDisplay(){
  countText.textContent = count; //updating the html element to show the current value of count
}

increaseBtn.addEventListener('click',() => {
  count++;
  countDisplay();
  // countText.textContent = count // VER2
})

decreaseBtn.addEventListener('click', ()=> {
  count--;
  countDisplay();
  // countText.textContent = count //Ver2
})

