function launchBrowser(browserName)
{
   if(browserName==='chrome')
   {
    console.log("My browser name is chrome");        
   }
   else
   {
    console.log("My browser name is not known");    
   }
}


function testType(testType)
{
   switch(testType)
   {
    case "smoke":
        console.log('Smoke test');
        break;

    case "sanity":
        console.log("Sanity test");
        break;

    case "regression":
        console.log("Regression test");
        break;  
        
    default:
        console.log('Unit test') 
        break;   
   }
}


launchBrowser('chrome')
testType('Regression')
