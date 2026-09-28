function factorial(n:number):number
{
    let result:number=1
    if(n>0)
    {
      for(let i=n;i>0;i--)
      {        
        result=result*i        
      }
    }
    else
        console.log("Please enter a positive number");
        
  return result
}

console.log(factorial(8));
console.log(factorial(-3));