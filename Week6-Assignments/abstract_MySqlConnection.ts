import { DatabaseConnection } from "../Week 6 - Assignments/interface_DatabaseConnection"

export abstract class MySqlConnection implements DatabaseConnection
{
    connect():void
    {
        console.log("Connected to Employee database");
        
    }
    disconnect():void
    {
        console.log("Disconnected from Employee database");
        
    }
    executeUpdate():void
    {
        console.log("Updated employee table");
        
    }
    abstract executeQuery():void
}