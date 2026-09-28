// example 1 
let s ="Hello world"
const words=s.split(" ")
console.log("Example 1:" + s);
let count=0

for(let i=0;i<=words.length-1;i++)
{    
  count=count+1;
 
  if(count==words.length)
  {
    let lastWordCount=words[i].length
    console.log(lastWordCount);    
  }  
}

// example 2
const str =" fly me  to  the moon "
const newStr=str.trim()
const words1=newStr.split(" ")
console.log("Example 2:"+ str);

let count1=0

for(let i=0;i<=words1.length-1;i++)
{    
  count1=count1+1;
 
  if(count1==words1.length)
  {
    let lastWordCount=words1[i].length
    console.log(lastWordCount);    
  }  
}

//example 3
function strAnagram(str1,str2)
{
    const stringOne=str1
    const stringTwo=str2
   
    const newStr1=stringOne.trim().toLowerCase().split("").sort()       
      
    const newStr2= stringTwo.trim().toLowerCase().split("").sort()     
    
    let sortedStr1=""
    for(let i=0;i<=newStr1.length-1;i++)
    {
       sortedStr1=sortedStr1.concat(newStr1[i])
    }
     console.log(sortedStr1);
    let sortedStr2=""
    for(let i=0;i<=newStr2.length-1;i++)
    {
       sortedStr2=sortedStr2.concat(newStr2[i])
    }
     console.log(sortedStr2);
    if(sortedStr1===sortedStr2)
        console.log("The 2 words are anagram");
    else
        console.log("The 2 words are not an anagram");
}
strAnagram('listen','silent')
strAnagram('hello','world')