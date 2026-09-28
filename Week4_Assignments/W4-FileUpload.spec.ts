///<reference types="node"/>
import{test,expect} from "@playwright/test"
import path from "path" 

test("verify file upload functionality",async({page,context})=>
{
    await page.goto("https://login.salesforce.com/")
    await page.getByRole("textbox",{name:"Username"}).fill("devisairam.5725a90629db@agentforce.com")
    await page.getByRole("button",{name:"Log In"}).click()
    await page.locator('#password').fill("Hrishi12#")
    await page.getByRole("button",{name:"Log In"}).click()
    await page.locator('//button[@title="App Launcher"]').click()
    await page.locator('//button[@aria-label="View All Applications"]').click()
    await page.getByPlaceholder("Search apps or items...").fill("Accounts")
     await page.getByPlaceholder("Search apps or items...").press('Enter')
     await page.waitForTimeout(2000)
     await page.locator('//p/mark[text()="Accounts"]').click()
     await page.locator('//div[@title="New"]').click()
     await page.getByRole('textbox',{name:"Account Name"}).fill("Marketing")
    //  await page.locator('//button[@aria-label="Rating"]').click()
    //  await page.getByText("Warm").click()
     await page.locator('//button[@aria-label="Type"]').click()
     await page.getByText("Prospect").click()
     await page.locator('//button[@aria-label="Industry"]').click()
     await page.getByText("Banking").click()
    //  await page.locator('//button[@aria-label="Ownership"]').click()
    //  await page.getByText("Public").click()
     await page.locator('//button[@name="SaveEdit"]').click()
     const fileUploadPromise=page.waitForEvent('filechooser')
     await page.getByText('Upload Files').click()
     const fileUploadRef=await fileUploadPromise
     fileUploadRef.setFiles(path.join(__dirname,"../../Data/abcd.txt"))
     await page.waitForTimeout(3000)

     

     

})