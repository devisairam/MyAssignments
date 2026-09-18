import{test,expect} from "@playwright/test"

test("Validate the behavior of checkbox", async({page})=>
{
    await page.goto("https://leafground.com/checkbox.xhtml")
    await page.locator('//span[text()="Basic"]').click()
    await page.locator('//span[text()="Ajax"]').click()
    await expect(page.getByText('Checked')).toBeVisible()
    
    await page.locator('//label[text()="Javascript"]').click()

    await page.locator('//h5[text()="Tri State Checkbox"]/following-sibling::div/div/div').click()     

    await page.locator('//h5[text()="Toggle Switch"]/following-sibling::div').click ()
    await expect(page.locator('//span[text()="Disabled"]')).toBeEnabled()
    await page.locator('//div[@role="combobox"]').click()
    const checkboxValues=await page.locator('//input[@type="checkbox"]/following-sibling::label').allInnerTexts()
    const count=checkboxValues.length
    for(let i=0;i<count;i++)
    {
      
      await page.getByText(checkboxValues[i]).nth(1).click()
    }
      
    await page.waitForTimeout(3000)

})