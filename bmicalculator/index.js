const form= document.querySelector('form'); //as we have created a form on form submission it sends the data to a server
form.addEventListener('submit', (e)=>{
    e.preventDefault();//in this case we want to prevent it so we are using e.preventDefault
    // In JavaScript, when you use document.querySelector() to select an element from the HTML document, 
    // the returned object represents the DOM (Document Object Model) element itself, not its value. 
    // To access the value of an input field or other types of elements, you need to use the .value property.
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const result=document.querySelector('#results')
    // In JavaScript, isNaN() is a built-in function used to determine whether a value is "Not-a-Number" (NaN) or not. 
    // It takes one argument, which is the value to be tested. The function returns true if the value is NaN and false 
    // if it is a valid number or can be converted into one.
    // when you use isNaN(height), you're checking whether the variable height contains a valid number or not.
    if(height==''||height<=0||isNaN(height)){
        result.innerHTML=`the mentioned height: ${height} is not a valid height`
    }else if(weight==''||weight<=0||isNaN(weight)){
        result.innerHTML=`the mentioned weight: ${weight} is not a valid weight`
    }
    else{
        const bmi=(weight / ((height * height) / 10000)).toFixed(2)
        result.innerHTML=`${bmi}`
    }

})
