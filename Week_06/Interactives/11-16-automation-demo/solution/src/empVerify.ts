// We are importing some things here from Selenium, but also our array of employee information
import { WebDriver, By } from "selenium-webdriver"
import { empInfo } from './employeeInfo'

/** 
 * @param {WebDriver} driver - The driver that is being used in the test file
 * @param {Number} empNumber - The ID number of the employee you want to verify
 */
export const empVerify = async (driver: WebDriver, empNumber: number) => {

    // First we are clicking on the employee based on the employee number parameter
    await (await driver.findElement(By.xpath(`//*[text()="${empInfo[empNumber].name}"]`))).click()
    
    // Now we're going to set up all of our selectors as variables before hand to make things a little easier for us later
    let empName = await driver.findElement(By.name('nameEntry'))
    let empPhone = await driver.findElement(By.name('phoneEntry'))
    let empTitle = await driver.findElement(By.name('titleEntry'))

    // We're now going to get the 'value' of each of our 3 input fields
    // We'll also log that in the console
    let name = await empName.getAttribute('value')
    console.log(`The employee's name is: ${name}`)


    let phone = await empPhone.getAttribute('value')
    console.log(`The employee's phone number is is: ${phone}`)
    
    
    let title = await empTitle.getAttribute('value')
    console.log(`The employee's title is: ${title}`)

    // Finally we have our automation expect the value of each of the input fields
    // to be equal to the employee information provided inside of our array
    expect(name).toBe(empInfo[empNumber].name)
    expect(phone).toBe(empInfo[empNumber].phone)
    expect(title).toBe(empInfo[empNumber].title)
}