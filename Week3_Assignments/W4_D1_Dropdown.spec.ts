import{test} from "@playwright/test"

test("Verify the dropdown functionality", async({page})=>
{
    await  page.goto("https://leafground.com/select.xhtml")
    // await page.selectOption('//select[@class="ui-selectonemenu"]',{:"Playwright"})
    await page.selectOption('//select[@class="ui-selectonemenu"]',{index:2})
    const ddlOptions=page.locator('//select[@class="ui-selectonemenu"]/option')
    const count=await ddlOptions.count()
    for(let i=0;i<count;i++)
    {
        console.log(await page.locator('//select[@class="ui-selectonemenu"]/option').nth(i).innerText())
    }
    await page.locator('//label[text()="Select Country"]').click()
    await page.locator('//li[text()="India"]').click()
   let cityDropDownValues= page.locator('(//div[@class="ui-selectonemenu-items-wrapper"])[4]//li')
   const cityCount=await cityDropDownValues.count()
   for(let i=0;i<cityCount;i++){    
        
     console.log(await page.locator('(//div[@class="ui-selectonemenu-items-wrapper"])[4]//li').nth(i).innerText()+ " is part of India")   
   }

    await page.locator('//button[@aria-label="Show Options"]').click()
    await page.locator('//li[text()="AWS"]').click()
    await page.locator('//button[@aria-label="Show Options"]').click()
    await page.locator('//li[text()="Appium"]').click()
    await page.locator('//li[text()="Playwright"]').click()
    
    await page.locator('//label[text()="Select Language"]').click()
    
    let langDropdownValues=page.locator('(//div[@class="ui-selectonemenu-items-wrapper"])//li')
    const langCount=await langDropdownValues.count()
    console.log(langCount);
    
    for(let i=0;i<langCount;i++)
    {
        console.log(await page.locator('(//div[@class="ui-selectonemenu-items-wrapper"])//li').nth(i).innerText());
        
    }
   await page.locator('//li[text()="Tamil"]').click()
   await page.waitForTimeout(2000)

   await page.locator('//label[text()="Select Values"]').click()
   await page.locator('//li[text()="இரண்டு"]').click()
   
   })