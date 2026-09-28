const nums=[2, 4, 7, 8, 11, 14];
const target = 18;

let results=[]
for(let i=0;i<=nums.length-1;i++)
{
    for(let j=i+1;j<=nums.length-1;j++)
    {
        if(nums[i]+nums[j]==target)
       {
          results.push(i,j)
          console.log("sum of indices is " + nums[i] + " + " + nums[j] + " (" +i + "," +j +")");
          
       }
    }
}
console.log(results);

