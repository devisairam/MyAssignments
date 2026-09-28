import { DatabaseConnection } from "../Week 6 - Assignments/interface_DatabaseConnection.js";

class MyDataBaseConnection implements DatabaseConnection
{
    connect():void
    {
        console.log("Connected to Employee Database");
        
    }
    disconnect():void
    {
        console.log("Disconnected from Employee Database");
        
    }
    executeUpdate():void
    {
        console.log("Update the employee table");
        
    }
}

const obj=new MyDataBaseConnection()
obj.connect()
obj.disconnect()
obj.executeUpdate()