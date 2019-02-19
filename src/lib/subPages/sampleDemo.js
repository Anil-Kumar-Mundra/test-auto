import { BasePage } from '../basePage';

/** 
 * 
*/
const SampleDemo = function () {
    BasePage.call(this);
    const By = this.By;
    this.userMessage = By.id(`user-message`);
    this.Show_Message = By.xpath(`//form[@id="get-input"]/button[contains(text(), 'Show Message')]`);
    this.Actual_Message = By.id(`display`);
    this.Sum1 = By.id(`sum1`);
    this.Sum2 = By.id(`sum2`);
    this.GetTotal = By.xpath(`//form[@id="gettotal"]/button[contains(text(),'Get Total')]`);
    this.TotalValue = By.id(`displayvalue`);
    this.ageSelected = By.id(`isAgeSelected`);
    this.ageCheckboxMessage=By.id(`txtAge`);

    this.findCheckbox = function(...dynamicValue) {
        let arrObj = [];
        for(let singleElement of dynamicValue) {
            arrObj.push(By.xpath(`//label[text()="Option ${singleElement}"]/input[@type="checkbox"]`));
        }
        return arrObj;

    }
}

SampleDemo.prototype = Object.create(BasePage.prototype);

SampleDemo.prototype.enterTextandGetValue =  async function(strText) {
    await this.setWebElement( [ this.userMessage, strText ] );
    await this.clickWebElement(this.Show_Message);
    return await this.getText(this.Actual_Message); 
}
SampleDemo.prototype.addNumbertoGetTotal = async function(num1, num2) {    
    await this.setWebElement( [ this.Sum1, num1 ], [ this.Sum2, num2 ] );
    await this.clickWebElement(this.GetTotal);
    return await this.getText(this.TotalValue);
}

SampleDemo.prototype.clickCheckboxCaptureEventMessage = async function() {
    await this.clickWebElement(this.ageSelected);
    return await this.getText(this.ageCheckboxMessage);
}

SampleDemo.prototype.clickMultiCheckbox = async function() {
    Array.from(this.findCheckbox(1,2,3,4), obj => this.clickWebElement(obj));

    // // this.clickWebElement(Array.from(this.findCheckbox(1,2,3,4)));

    // return await this.findCheckbox(1,2,3,4).map((obj) => this.clickWebElement(obj));
}

export  { SampleDemo }