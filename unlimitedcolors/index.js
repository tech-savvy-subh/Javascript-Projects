//Generate a random color using a hex code ,
//for that we need to generate the hex code first ,
//we know hex code consists of 0123456789ABCDEF and one # in the begining and it consists of 6 characters

const randomHexcode = () => {
  const hex = "0123456789ABCDEF";
  let colorcode = "#";
  for (let i = 0; i < 6; i++) {
    colorcode += hex[Math.floor(Math.random() * 16)]; //appending 6 characters after #
  }
  return colorcode;//returning it
};
console.log(randomHexcode());
let intervalId; //this inetrvalId will hold refernce to setInterval

//create a logic on clicking start button
const startChangingColor = () => {
    console.log('Color changing started');
  const changecolor = () => {//changing bg color of body
    document.body.style.backgroundColor = randomHexcode();
  };
  if (!intervalId) { //this logic we are using because we are not storing intervalId value in memory after clicking on stop button
    //it is starting freshly after that
    intervalId = setInterval(changecolor, 1000);
  }
};
//create a logic on clicking stop button
const stopChangingColor = () => {
    console.log('Color changing stopped');

  clearInterval(intervalId);
  intervalId = null; //flushing out intervalId value
};

document.getElementById("start").addEventListener("click", () => {
  startChangingColor();
});
document.getElementById("stop").addEventListener("click", () => {
    stopChangingColor();
  });
