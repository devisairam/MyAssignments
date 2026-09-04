import{test,chromium} from '@playwright/test'

test("Login to Salesforce application",async()=>{
   const browser=await chromium.launch({channel:"chrome",headless:false})
   const context=await browser.newContext()
   const page=await context.newPage()

   await page.goto("https://login.salesforce.com/")
   await page.locator('[id="username"]').fill('devisairam.5725a90629db@agentforce.com')
   await page.locator('[id="Login"]').click()
   await page.locator('[id="password"]').fill('Hrishi12#')
   await page.locator('[id="Login"]').click()
   await page.waitForTimeout(10000)
   console.log(await page.title())
   console.log(await page.url());
   
   

})
