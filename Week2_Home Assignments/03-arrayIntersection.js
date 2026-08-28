function intersection(array1,array2)
{
    let arr1=array1
    let arr2=array2
    let result=arr2

    for(let i=0;i<=arr1.length-1;i++)
    {   
    if(!arr2.includes(arr1[i]))
    {    
        result=result.concat(arr1[i])    
    } 
    }
    return result
}

console.log(intersection([4,3,5],[1,2,6]));
console.log(intersection([1,3,2],[4,2,6]));










