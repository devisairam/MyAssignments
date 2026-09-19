import {test,expect} from "@playwright/test"
test("Merge Lead functionality",async({page,context})=>
{
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.getByLabel("Username").fill("DemoSalesManager")
    await page.getByLabel("Password").fill("crmsfa")
    await page.locator('//input[@class="decorativeSubmit"]').click()
    await page.getByText("CRM/SFA").click()
    await page.locator('//div[@class="x-panel-header"]/a[text()="Leads"]').click()
    await page.getByText("Merge Leads").click()
    const newpagePromise=context.waitForEvent('page')
    await page.locator('//input[@id="partyIdFrom"]/following-sibling::a').click()
    const newpageRef=await newpagePromise
    await newpageRef.waitForLoadState("domcontentloaded")
    await newpageRef.locator('//table[@class="x-grid3-row-table"]//tr//div/a').first().click()
    const newpagePromise1=context.waitForEvent('page')
    await page.locator('//input[@id="partyIdTo"]/following-sibling::a').click()
    const newpageRef1=await newpagePromise1
    await newpageRef1.locator('(//table[@class="x-grid3-row-table"])[2]//tr//div/a').first().click()
   
     page.on('dialog',async(alertbox)=>
    {
        console.log(alertbox.type());
        console.log(alertbox.message());
        console.log(await alertbox.accept());
    })
     await page.locator('//td/a[text()="Merge"]').click()
     console.log(await page.title());
    await page.waitForTimeout(2000)
})