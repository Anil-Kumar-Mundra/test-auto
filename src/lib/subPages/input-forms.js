import { BasePage } from '../base-page';
/** 
 * 
*/
const SampleDemo = function () {
    BasePage.call(this);
    const By = this.By;
    this.userMessage = By.id(`user-message`);
    this.showMessage = By.xpath(`//form[@id="get-input"]/button[contains(text(), 'Show Message')]`);
    this.displayedMessage = By.id(`display`);
    this.sum1 = By.id(`sum1`);
    this.sum2 = By.id(`sum2`);
    this.getTotal = By.xpath(`//form[@id="gettotal"]/button[contains(text(),'Get Total')]`);
    this.totalValue = By.id(`displayvalue`);
    this.ageSelected = By.id(`isAgeSelected`);
    this.ageCheckboxMessage=By.id(`txtAge`);
    this.checkAll = By.id(`check1`);
    this.findCheckbox = function(...element) {
        const testObj = [];
        for(let subStringValue of element) {
            testObj.push(By.xpath(`//label[text()="Option ${subStringValue}"]/input[@type="checkbox"]`));
        }
        return testObj;
    }
    /** 
     *Below elements are for Radio Button Demo
     * */ 
    this.findRadioAtRuntime = function(strValue) {
        return By.xpath(
            `//p[contains(text(),'Click on button')]/following-sibling::label[
            text()='${strValue}']/input`
        ); 
    } 
    this.checkedValue = By.id(`buttoncheck`);
    this.radioStatusMessage = By.xpath(`//p[contains(text(), 'Radio button')]`);
    this.findRadioGroupGender = function(strValue) {
        return By.xpath(
            `//h4[contains(text(), 'Sex')]/following-sibling::label
            [text()='${strValue}']/input`
        ); 
    } 
    this.findRadioAgeGroup = function(strValue) {
        return By.xpath(`//label[text()="${strValue}"]/input[@name="ageGroup"]`); 
    }
    this.getValues =By.xpath(`//button[text()="Get values"]`);
    this.getSelectedValues = function(strValue) {
        return By.xpath(`//p[contains(text(),'Sex : ${strValue}')]`); 
    } 
}
//Inheriting the BasePage object properties by assgining the prototype object
SampleDemo.prototype = Object.create(BasePage.prototype);
/** 
* Sample Demo Page
* Single Input Field
*/
//To enter text in message text box
SampleDemo.prototype.writeMessage = async function(strText) {
    return await this.setWebElements( [this.userMessage, strText] );
}
//To click on Show Message Button
SampleDemo.prototype.clickShowMessage =  async function() {
    return await this.clickWebElements(this.showMessage);
}
//To caputure the message
SampleDemo.prototype.getMessage =  async function() {
    return await this.getText(this.displayedMessage); 
}
// Single Input Field all events are at one place
SampleDemo.prototype.singleInputField = async function(strText) {
    await this.writeMessage(strText)
    await this.clickShowMessage()
    return await this.getMessage()
    .then((title) => title)
    .catch((error) => error);
}

/** 
 * Sample Demo Page
 * Two Input Fields
*/
//To enter the two numbers
SampleDemo.prototype.enterTwoNumbers = async function(numOne, numTwo) {
    return await this.setWebElements([this.sum1, numOne ], [this.sum2, numTwo])
}
//To click on GetTotal button
SampleDemo.prototype.clickGetTotal = async function() {
    return await this.clickWebElements(this.getTotal);
}
//To get value after addition of two numbers
SampleDemo.prototype.getTotalOfTwoValues = async function() {
    return await this.getText(this.totalValue);
}
//Two Input Field all events are at one place
SampleDemo.prototype.addNumbertoGetTotal = async function(num1, num2) {    
    await this.enterTwoNumbers(([this.sum1, numOne ], [this.sum2, numTwo]));
    await this.clickGetTotal();
    return await this.getTotalOfTwoValues()
    .then((title) => title)
    .catch((error) => error);
}
/**
 * Checkbox Demo
 */
 //To click on single checkbox
 SampleDemo.prototype.clickSingleCheckBox = async function() {
    return await this.clickWebElements(this.ageSelected);
}
//To click on single checkbox
SampleDemo.prototype.getCheckboxStatus = async function() {
    return await this.getText(this.ageCheckboxMessage);
}
//Singlecheckbox demo as one function
SampleDemo.prototype.singleCheckboxDemo = async function() {
    await this.clickWebElements(this.ageSelected);
    return await this.getText(this.ageCheckboxMessage);
}
// To click on checAll and unCheckAll button
SampleDemo.prototype.clickMultiCheckbox = async function() {
    return await this.clickWebElements(this.checkAll);
}
// To capture the multiple objects as an arry and return the array of checkbox status
SampleDemo.prototype.captureMulticheckboxStatus = async function() {
    this.objArray = [];
    let arrayChecboxes = this.findCheckbox(1,2,3,4);
    for(let obj of arrayChecboxes) {
            this.objArray.push(await this.isSelected(obj));
    }
    return  this.objArray;
}
//Radio Button Demo
SampleDemo.prototype.selectGenderRadio = async function(strGender) {
     return await this.clickWebElements(this.findRadioAtRuntime(strGender));    
}
SampleDemo.prototype.clickGetCheckedValue = async function() {
    return await this.clickWebElements(this.checkedValue);
}
SampleDemo.prototype.getSingleRadioStatus = async function() {
    return await this.getText(this.radioStatusMessage);
}
/** 
 * Group Radio Buttons Demo
*/
SampleDemo.prototype.selectRadioGroupGender = async function(blnGender) {
    return await this.clickWebElements(this.findRadioGroupGender(blnGender)); 
}
SampleDemo.prototype.selectRadioAgeGroup = async function(strAgeGroup) {
    return await this.clickWebElements(this.findRadioAgeGroup(strAgeGroup)); 
}
SampleDemo.prototype.clickGetValues = async function() {
    return await this.clickWebElements(this.getValues);
}
SampleDemo.prototype.getMultiRadioStatus = async function(blnGender) {
    return await this.getText(this.getSelectedValues(blnGender)); 
}

export  { SampleDemo }