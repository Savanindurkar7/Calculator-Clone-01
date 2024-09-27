let button = document.querySelectorAll(".Buttons");
let input = document.getElementById("inputBox");

let multiply = document.querySelector(".multiply");



let arr = Array.from(button);
let string = "";

arr.forEach(button => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML === "=") {
      string = eval(string);
      input.value = string;

    } else if (e.target.innerHTML === "AC") {
      string = ""
      input.value = string;

    } else if (e.target.innerHTML === `<img src="backspace_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg">`) {
      string = string.slice(0, string.length - 1);
      input.value = string;

    }

    else {
      string += e.target.innerHTML;
      input.value = string;
    }
  })
})

