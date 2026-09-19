///<reference types="node"/>

import {test} from "@playwright/test"
import path from "path"

test("learn file upload with input tag",async({page})=>
{
    await page.goto("https://the-internet.herokuapp.com/upload")
    await page.locator('#file-upload').setInputFiles(path.join(__dirname,"../../Data/abcd.txt"))
    await page.locator('#file-submit').click()
    await page.waitForTimeout(2000)
})

test("learn file upload without input tag",async({page})=>{

await page.goto("https://the-internet.herokuapp.com/upload")
const fileUploadPromise=page.waitForEvent('filechooser')
await page.locator('#drag-drop-upload').click()
const fileUploadRef=await fileUploadPromise
await fileUploadRef.setFiles([path.join(__dirname,'../../Data/123.png'),path.join(__dirname,'../../Data/456.png')])
await page.waitForTimeout(2000)
})

test("learn file upload without input tag using concurrent action",async({page})=>{

await page.goto("https://the-internet.herokuapp.com/upload")

const [fileUpload]=await Promise.all([page.waitForEvent('filechooser'), page.locator('#drag-drop-upload').click()])
await fileUpload.setFiles([path.join(__dirname,'../../Data/123.png'),path.join(__dirname,'../../Data/456.png')])
await page.waitForTimeout(2000)
})

test.only("File upload",async({page})=>
{
 await page.goto('https://leafground.com/file.xhtml')
await page.locator('//input[@type="file"]').first().setInputFiles(path.join(__dirname,'../../Data/456.png'))
await page.waitForTimeout(3000)


})