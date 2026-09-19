import{expect, test} from "@playwright/test"

test("Learn modal alerst",async({page})=>
{

  page.on("dialog",async(handlealert)=>
  {
     console.log(handlealert.message());
     console.log(handlealert.type());
     handlealert.accept()
     
  })  
  await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")
  const frameRef=page.frameLocator("#iframeResult")
  await frameRef.locator('//button[text()="Try it"]').click()
  await expect(frameRef.locator('#demo')).toHaveText("You pressed OK!")

})

