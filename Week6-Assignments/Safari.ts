import { Browser } from "./Browser";

class Safari extends Browser
{
    readerMode() 
    { 
        console.log("Reader mode");        
    }
    fullScreenMode()
    {
      console.log("Full screen mode");      
    }
}