import { Browser } from "./Browser";

class Edge extends Browser
{
    takeSnap()
    {
      console.log("Take snap");
      
    } 
    clearCookies()
    {
      console.log("Clear browser cookies");
      
    }
}