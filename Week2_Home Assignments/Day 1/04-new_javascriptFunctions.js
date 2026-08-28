function userProfile(name)
{
    console.log("Hello, "+`${name}`+"!");   
}

userProfile("Devi")

const double=(num)=>2*num
console.log("The value of arrow function is:"+ double(5));

setTimeout(() => {
console.log("This message is delayed by 2 seconds");   
}, 2000);



function getUserData(callback)
{   

 setTimeout(() => {
    callBack()
    console.log("Call back after 3 seconds");    
 }, 3000);
  
}  

function callBack()
{
    console.log("I am a call back function");    
}


getUserData(callBack)