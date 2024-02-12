//this code is to print the keyboard key you are pressing
const insert = document.getElementById("insert");
window.addEventListener("keydown", (e) => { //we use window object for this ,which will listen to event keydown
  insert.innerHTML = `
    <div class='color'>
    <table> 
    <tr> 
        <th>key</th> 
        <th>keyCode</th> 
        <th>code</th> 
    </tr> 
    <tr> 
        <td>${e.key===" "? "space":e.key}</td>  
        <td>${e.keyCode}</td> 
        <td>${e.code}</td> 
    </tr> 
</table> 
    </div>
    `;
    //the above logic is basically implemented to check if e.key is an empty value cause space is empty only so if it is empty
    // then we print space or else print the key ,implmented using ternary operator
});
