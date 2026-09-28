function fibonacci(n:number):number
{
    let num1:number=0    
    let num2:number=1
    let result:number=0
      
    for(let i=1;i<=n;i++)
    {   
        result=num1+num2
        num1=num2
        num2=result
              
    } 
    return result   
}
console.log(fibonacci(4))
console.log(fibonacci(6))
 