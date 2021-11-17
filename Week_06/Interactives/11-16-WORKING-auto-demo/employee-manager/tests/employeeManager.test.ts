import { Builder, Capabilities } from "selenium-webdriver"
import { empVerify } from '../../employee-manager/src/empVerify'
import { empInfo } from '../../employee-manager/src/employeeinfo'

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    await driver.get('http://localhost:3000/')
})
afterAll(async () => {
    await driver.quit()
})

test('Verify Each Employee', async () => {
    // Now we want to use that empVerify function that we wrote in another file
    
    for (let i = 0; i < empInfo.length; i++) {
        await empVerify(driver, i)
    }
    })