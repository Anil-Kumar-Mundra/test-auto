import { BasePage } from '../base-page';
/** 
 * 
*/
const InputFormsExtended = function () {
    BasePage.call(this);
    const By = this.By;
    this.selectDay = By.id(`select-demo`);
    this.daySelected = By.xpath(`//p[contains(text(), 'Day selected')]`);
    this.firstSelected= By.id('printMe');
    this.getAllSelectedMessage = By.css(`p.getall-selected`);
    this.inputForm = function(placeHolderValue){
        return By.name(`${placeHolderValue}`);
    }
    this.stateList = By.name(`state`);
}
InputFormsExtended.prototype = Object.create(BasePage.prototype);
InputFormsExtended.prototype.clickSelectDay = async function(listValue) {
    await this.selectListValue(this.selectDay, listValue);
}
InputFormsExtended.prototype.getListMessage = async function() {
    return await this.getText(this.daySelected); 
}
InputFormsExtended.prototype.clickFirstSelected =  async function() {
    return await this.clickWebElements(this.firstSelected);
}
InputFormsExtended.prototype.getMultiListMessage = async function() {
    return await this.getText(this.getAllSelectedMessage); 
}

InputFormsExtended.prototype.writeInputFormFields = async function(runTimeObj, strText) {
    return await this.setWebElements([this.inputForm(runTimeObj), strText]); 
}

export { InputFormsExtended }