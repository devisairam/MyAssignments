class MyDataBaseConnection {
    connect() {
        console.log("Connected to Employee Database");
    }
    disconnect() {
        console.log("Disconnected from Employee Database");
    }
    executeUpdate() {
        console.log("Update the employee table");
    }
}
const obj = new MyDataBaseConnection();
obj.connect();
obj.disconnect();
obj.executeUpdate();
export {};
