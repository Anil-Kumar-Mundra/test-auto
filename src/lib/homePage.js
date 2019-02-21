import { BasePage } from './basePage'
function HomePage() {
    BasePage.call(this);
    const By = this.By;    
    this.inputForms = By.linkText(`Input Forms`);
    this.simpleFormDemo = By.linkText(`Simple Form Demo`);
    this.checkboxDemo = By.linkText(`Checkbox Demo`);
    this.radioButtonDemo = By.linkText(`Radio Buttons Demo`);
}
HomePage.prototype = Object.create(BasePage.prototype);
HomePage.prototype.navigateSampleDemo = async function()  {
     return await this.clickWebElement(
        this.inputForms, 
        this.simpleFormDemo
    ) 
}
HomePage.prototype.navigateCheckboxDemo = async function()  {
    return await this.clickWebElement(
       this.inputForms, 
       this.checkboxDemo
   ) 
}
HomePage.prototype.navigateRadioButtonDemo = async function()  {
    return await this.clickWebElement(
       this.inputForms, 
       this.radioButtonDemo
   ) 
}



export { HomePage }