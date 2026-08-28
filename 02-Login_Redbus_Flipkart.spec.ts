import{chromium,firefox,test} from '@playwright/test'

test("Verify page title of Red Bus",async()=>{
    const browser= await chromium.launch({channel:"msedge"})
    const context =await browser.newContext()
    const page=await context.newPage()

    await page.goto("https://www.redbus.in")
    console.log(await page.title());
    console.log(page.url());
})

test("Verify page title of Firefox",async()=>{
    const browser= await firefox.launch({channel:"firefox"})
    const context =await browser.newContext()
    const page=await context.newPage()

    await page.goto("https://www.flipkart.com")
    console.log(await page.title());
    console.log(page.url());
})