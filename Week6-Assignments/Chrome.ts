import { Browser } from "./Browser";

class Chrome extends Browser
{
    openIncognito() 
    {
        console.log("Browser opened in Incognito mode");        
    }
    clearCache()
    {
        console.log("Clear browser cache");        
    }   
}

const chromeObj=new Chrome("Chrome","")
