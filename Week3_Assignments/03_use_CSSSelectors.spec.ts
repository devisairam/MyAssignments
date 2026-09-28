import{test} from "playwright/test"

test("Learn to use CSS selectors",async({page})=>
{
 await page.goto("http://leaftaps.com/opentaps/control/main")
 await page.locator('[id="username"]').fill("Demosalesmanager")
 await page.locator('[id="password"]').fill("crmsfa")
 await page.locator('[class="decorativeSubmit"]').click()
 await page.locator('div[id="label"]>a').click() 
 await page.locator('div[class="x-panel-header"]>a').nth(1).click()
 await page.locator('ul[class="shortcuts"] a').nth(1).click()
 await page.locator('[id="createLeadForm_companyName"]').fill("ABCD")
 await page.locator('[id="createLeadForm_firstName"]').fill("Avyukth")
 await page.locator('[id="createLeadForm_lastName"]').fill("Hrishi")
 await page.locator('[id="createLeadForm_personalTitle"]').fill("Mr.")
 await page.locator('[id="createLeadForm_generalProfTitle"]').fill("Mr.")
 await page.locator('[id="createLeadForm_annualRevenue"]').fill("500000")
 await page.locator('[id="createLeadForm_departmentName"]').fill("Finance")
 await page.locator('[id="createLeadForm_primaryPhoneNumber"]').fill("9768542361")
 await page.locator('[name="submitButton"]').click()
 console.log(await page.title());
 
 //await page.waitForTimeout(3000)
}
)