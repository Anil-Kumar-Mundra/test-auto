import { BasePage } from './base-page'
function HomePage() {
    BasePage.call(this);
    const By = this.By;    
    this.inputForms = By.linkText(`Input Forms`);
    this.simpleFormDemo = By.linkText(`Simple Form Demo`);
    this.checkboxDemo = By.linkText(`Checkbox Demo`);
    this.radioButtonDemo = By.linkText(`Radio Buttons Demo`);
    this.selectDropdownList = By.linkText(`Select Dropdown List`);
    this.inputFormSubmit = By.linkText(`Input Form Submit`);
}
HomePage.prototype = Object.create(BasePage.prototype);
HomePage.prototype.navigateSampleDemo = async function()  {
     return await this.clickWebElements(
        this.inputForms, 
        this.simpleFormDemo
    ) 
}
HomePage.prototype.navigateCheckboxDemo = async function()  {
    return await this.clickWebElements(
       this.inputForms, 
       this.checkboxDemo
   ) 
}
HomePage.prototype.navigateRadioButtonDemo = async function()  {
    return await this.clickWebElements(
       this.inputForms, 
       this.radioButtonDemo
   ) 
}
HomePage.prototype.navigateDropdownList = async function()  {
    return await this.clickWebElements(
       this.inputForms, 
       this.selectDropdownList
   ) 
}

HomePage.prototype.navigateInputFormSubmit = async function()  {
    return await this.clickWebElements(
       this.inputForms, 
       this.inputFormSubmit
   ) 
}
export { HomePage }