import { BasePage } from '../basePage';
/** 
 * 
*/
const SampleDemo = function () {
    BasePage.call(this);
    const By = this.By;
    this.userMessage = By.id(`user-message`);
    this.Show_Message = By.xpath(`//button[text()="Show Message"]`);
    this.Actual_Message = By.xpath(`//span[@id="display"]`);
    this.Sum1 = By.id(`sum1`);
    this.Sum2 = By.id(`sum2`);
    this.GetTotal = By.xpath(`//button[text()="Get Total"]`);
    this.TotalValue = By.id(`displayvaluezxsx`);
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
export  { SampleDemo }