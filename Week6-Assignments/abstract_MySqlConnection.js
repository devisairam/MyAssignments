export class MySqlConnection {
    connect() {
        console.log("Connected to Employee database");
    }
    disconnect() {
        console.log("Disconnected from Employee database");
    }
    executeUpdate() {
        console.log("Updated employee table");
    }
}
