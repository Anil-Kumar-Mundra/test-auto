import { BasePage } from '../basePage';
import { By } from 'selenium-webdriver';


const User_Message = By.id(`user-message`);
const Show_Message = By.xpath(`//button[text()="Show Message"]`);
const Actual_Message = By.xpath(`//span[@id="display"]`)
const Sum1 = By.id(`sum1`);
const Sum2 = By.id(`sum2`);
const GetTotal = By.xpath(`//button[text()="Get Total"]`);
const TotalValue = By.id(`displayvalue`);


function SampleDemo() {
    BasePage.call(this);
}


SampleDemo.prototype = Object.create(BasePage.prototype);

SampleDemo.prototype.writeUserMessage = async function(strText, strText2) {

    return await this.setWebElement(
        [ User_Message, strText ],
        [ User_Message, strText2 ],
    );
}


SampleDemo.prototype.showMessage = async function() {
    return await this.clickWebElement(Show_Message);
}

SampleDemo.prototype.getUserMessageText = async function() {
    return await this.getWebElement(Actual_Message).getText();      
}


SampleDemo.prototype.enterTwoNumberstoAdd = async function(num1, num2) {
    return await this.setWebElement(
        [ Sum1, num1 ],
        [ Sum2, num2 ],
    );
}

SampleDemo.prototype.clickGetTotal = async function(){
    return await this.clickWebElement(GetTotal);
}

SampleDemo.prototype.getTotalValue = async function() {
    return await this.getWebElement(TotalValue).getText();
}


export  { SampleDemo }