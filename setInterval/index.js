const changetext = () => {
    console.log('Text should be changed');
};

let starting; // Declare the interval variable outside the event listener

document.getElementById('start').addEventListener('click', () => {
    starting = setInterval(changetext, 1000); // Start the interval when the start button is clicked
});

document.getElementById('stop').addEventListener('click', () => {
    console.log(starting);
    clearInterval(starting); // Stop the interval when the stop button is clicked
});
