export class Browser
{
    browserName:string 
    browserVersion:string

    constructor(browserName:string,browserVersion:string)
    {
       this.browserName=browserName
       this.browserVersion=browserVersion
    }
    openURL()
    {
        console.log("Open the url");
        
    }        
    
    closeBrowser()
    { 
        console.log("Close the browser");
        
    }

    navigateBack()
    { 
        console.log("Navigate back");
        
    }
}

