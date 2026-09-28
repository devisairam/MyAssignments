function sumOfValues(n)
{
    let sum=0
    for(let i=1;i<=n;i++)
    {
        sum=i+sum   
        console.log("The value of i is: " + `${i}` + " and current sum is: " + `${sum}`);
    }
    return  sum
}

const output=sumOfValues(7)
console.log("The sum of first 5 numbers is: " + output);
