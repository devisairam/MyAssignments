import{test,expect} from "@playwright/test"

test("Create new Salesforce account",async({page})=>
{
    await page.goto("https://login.salesforce.com/")
    await page.getByLabel("Username").fill("dilipkumar.rajendran@testleaf.com")    
    await page.getByRole('button',{name:"Log In"}).click()
    await page.getByLabel("Password").fill("TestLeaf@2025")
    await page.getByRole('button',{name:"Log In"}).click()
    await page.waitForTimeout(10000)
    const pageTitle=await page.title()
    console.log(pageTitle);
    expect(pageTitle).toBe("Home | Salesforce")
    const pageUrl=page.url()
    console.log(pageUrl);    
    expect(pageUrl).toBe("https://testleaf.lightning.force.com/lightning/page/home")
    await page.locator('[title="App Launcher"]').click()
    await page.getByText("View All").last().click()
    await page.getByPlaceholder('Search apps or items...').fill("Service")
})