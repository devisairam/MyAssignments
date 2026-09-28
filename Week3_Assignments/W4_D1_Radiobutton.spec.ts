import{test,expect} from "@playwright/test"

test("Validate the behavior of radiobutton", async({page})=>
{
    await page.goto("https://leafground.com/radio.xhtml")
    await expect(page.locator('//input[@value="Option3"]')).toBeChecked()
    await page.locator('(//label[text()="Chrome"])[1]').click()
    await expect(page.locator('(//label[text()="Chrome"])[1]')).toBeEditable()
    await page.locator('//label[text()="Chennai"]').click()   
    await expect(page.locator('//label[text()="21-40 Years"]')).toBeChecked()    
    await page.waitForTimeout(3000)

})