const clock= document.getElementById('clock')
console.log(clock);

// const date=new Date();//this gives us access to current date and time
// console.log(date.toLocaleTimeString());//this will show us the current timing only

//but we want our time to be changed like real world every second
//in this case we want to create a function and want that function to run every second

setInterval(()=>{
    const date=new Date()
    clock.innerHTML=date.toLocaleTimeString()
},1000) //Here thousand refers to 1000 ms which is 1 sec , so every 1 second the function will run

