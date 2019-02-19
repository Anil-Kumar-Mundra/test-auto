import { BasePage } from './basePage'


function HomePage() {

    BasePage.call(this);
    const By = this.By;    
    this.inputForms = By.xpath(`//a[contains(text(),'Input Forms')]`);
    this.simpleFormDemo = By.xpath(`//a[contains(text(),'Simple Form Demo')]`);
    this.checkboxDemo = By.xpath(`//a[contains(text(),'Checkbox Demo')]`);
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



export { HomePage }