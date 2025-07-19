const tgBtn = document.getElementById("tgBtn")

function toggleMode(){
  //.toggle() is a function that takes one class name as a parameter
  //If the class exists, it removes it.
  //If the class doesn’t exist, it adds it.
  document.body.classList.toggle("dark-mode")
}

tgBtn.addEventListener("click",toggleMode)