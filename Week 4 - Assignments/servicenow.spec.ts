import{test,expect} from "@playwright/test"

test("Learn frames",async({page})=>
{
    await page.goto("https://dev385832.service-now.com/navpage.do")
    await page.locator("#user_name").fill("admin")
    await page.locator("#user_password").fill("pd//6Z4LprCH")
    await page.getByRole('button',{name:"Log in"}).click()
    await page.getByRole('menuitem',{name:"All"}).click()
    await page.getByText("Service Catalog").click()
    const frameRef=page.frameLocator("#gsft_main")
    await frameRef.locator('//h2[contains(text(),"Mobiles")]/parent::a').click()
    await frameRef.locator('//strong[text()="Apple iPhone 13"]/ancestor::a').click()
    await  frameRef.locator('//span[@class="input-group-radio"]/input/following-sibling::label[text()="No"]').click()
    await frameRef.locator('//select[@class="form-control cat_item_option "]').selectOption({label:"500MB [add $1.00]"})
    await  frameRef.locator('//span[@class="input-group-radio"]/input/following-sibling::label[text()="Starlight"]').click()
    await expect(frameRef.locator('//span[@class="input-group-radio"]/input/following-sibling::label[text()="Starlight"]')).toBeChecked() 
    await  frameRef.locator('//span[@class="input-group-radio"]/input/following-sibling::label[text()="256 GB [add $100.00]"]').click()
    await expect(frameRef.locator('//span[@class="input-group-radio"]/input/following-sibling::label[text()="256 GB [add $100.00]"]')).toBeChecked()
    await frameRef.getByRole('button',{name:"Order Now"}).click()
    const orderstaus=await frameRef.locator('//a[@id="requesturl"]').innerText()
    console.log(orderstaus);
    expect (orderstaus).toContain(`${orderstaus}`)
    const title=await page.title()
    expect (title).toContain("Apple iPhone 13 | ServiceNow")
    console.log(title);
    const url= page.url()
    console.log(url);
    expect(url).toContain(".service-now.com")
    await page.waitForTimeout(2000)
})

 

