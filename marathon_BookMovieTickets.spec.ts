import{test,expect} from '@playwright/test'

test("To validate the ticket booking functionality",async({page})=>
{
    await page.goto("https://www.cineplex.com/")
    await page.waitForTimeout(3000)
    await page.locator('//button[text()="OK"]').click()
    await page.locator('//span[text()="Theatres"]').click()
    await page.locator('//span[text()="Cineplex Cinemas Fairview Mall"]').click()
    await page.getByTestId("select-movie").click()
    await page.locator('//div[text()="Coyote vs ACME"]').click()
    await page.waitForTimeout(3000)
    await expect(page.locator('//button[@aria-label="Preview seats"]')).toBeVisible()
    await page.locator('//button[@aria-label="Preview seats"]').click()
    await expect(page.getByRole("button",{name:"Buy Tickets"})).toBeVisible()
    page.getByRole("button",{name:"Buy Tickets"}).click()
    console.log(await page.title());
    await page.waitForTimeout(3000)
    

})
