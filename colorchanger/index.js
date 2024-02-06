const buttons = document.querySelectorAll(".button"); //selecing all the spans with class button
console.log(buttons);
const body = document.querySelector("body");// selecting the body
buttons.forEach((button) => { //tarversong through the button nodelist
  console.log(button);
  button.addEventListener("click", (e) => { //if one span is clicked trigger this cb function event
    console.log(e); //the mouse pointer event
    console.log(e.target);//e target holds which span/button is triggered
    switch (e.target.id) { //logic to check
      case "blue":
        body.style.backgroundColor = e.target.id;
        break;
      case "grey":
        body.style.backgroundColor = e.target.id;
        break;
      case "white":
        body.style.backgroundColor = e.target.id;
        break;
      case "yellow":
        body.style.backgroundColor = e.target.id;
        break;
      default:
        break;
    }
  });
});
