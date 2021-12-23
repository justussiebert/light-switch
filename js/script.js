let theButton = document.querySelector(".buttonStandard");
let theMainBoard = document.querySelector("main");
let buttonText;

theButton.addEventListener("click", function (e) {
  //theButton.classList.toggle("button-active");
  theButton.textContent = "";
  if (theButton.classList.contains("button-active")) {
    theButton.classList.remove("button-active");
    theButton.classList.add("button-passive");
    buttonText = document.createTextNode("Licht ein schalten");
    //theButton.appendChild(buttonText);
  } else {
    theButton.classList.remove("button-passive");
    theButton.classList.add("button-active");
    buttonText = document.createTextNode("Licht aus schalten");
    //theButton.text = "xxx";
  }
  theButton.appendChild(buttonText);
  //document.theButton.innerText = buttonText;
  theMainBoard.classList.toggle("active");
});
