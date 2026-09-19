"use strict";
class LoginTest {
    browserName = "Chrome";
    password = "admin123";
    userName = "tester";
    openApplication() {
        console.log("Open the application");
    }
    login() {
        console.log(this.password);
        console.log(this.userName);
    }
}
const obj = new LoginTest();
obj.openApplication();
obj.login();
