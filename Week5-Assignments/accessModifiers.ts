class LoginTest
{
     browserName:string="Chrome"
     private password:string = "admin123"
     protected userName:string="tester"

     public openApplication()
     {
        console.log("Open the application");
        
     }

     public login()
     {
        console.log(this.password );
        console.log(this.userName);
     }

}

const obj=new LoginTest()
obj.openApplication()
obj.login()

