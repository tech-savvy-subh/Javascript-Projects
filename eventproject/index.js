document.getElementById("google").addEventListener("click", (e) => {
  e.preventDefault(); //Not sending the request to google.com
});
document.getElementById("images").addEventListener("click", (e) => {
    console.log(e.target);
    console.log(e.target.parentNode);
    console.log( e.target.tagName) //this gives the type of the element for images it will give us IMG for google.com an A tag.
   //if and if only image is clicked then pop it out , don't pop out google.com
  if (e.target.tagName === "IMG") {
    const element = e.target.parentNode; //This gives us the target element in li format
    element.remove(); //using .remove we can pop it out
  }
});
