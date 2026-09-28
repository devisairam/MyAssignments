import { MySqlConnection } from "./abstract_MySqlConnection.js";

class PlaywrightConnection extends MySqlConnection
{
    executeQuery():void
    {
        console.log("Execute your query");
        
    }
}

const playWrightObj=new PlaywrightConnection()
playWrightObj.connect()
playWrightObj.disconnect()
playWrightObj.executeUpdate()
playWrightObj.executeQuery()

