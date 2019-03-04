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
    this.stateList = By.name('state');
    this.hostingRadioButton = By.xpath(`//input[@name="hosting" and @value="yes"]`);
    this.submitButton = By.css(`button[type="submit"]`);
    this.ajaxFormName = By.id('title');
    this.ajaxFormDescription = By.id('description');
    this.ajaxFormSubmit = By.id('btn-submit');
    this.ajaxFormMessage = By.xpath(`//div[text() = "Form submited Successfully!"]`);
    //Below one is not an ideal one
    this.selectCountry= By.css(`span[aria-labelledby='select2-country-container'] span.select2-selection__arrow`);
    this.selectCountrySearch = By.css(`span.select2-search input.select2-search__field`);
    this.searchListLink = function(selectValue) {
        return By.xpath(`//li[text()="${selectValue}"]`);
    }
    this.selectedValue = function(selectedValue) {
        return By.xpath(`//span[text()="${selectedValue}"]`)
    }
    this.selectState = By.xpath(`//label[contains(text(), "Select State")]
        /following-sibling::span/span[@class="selection"]/span/ul`);
    this.slectStatValue = function(stateName) {
        return By.xpath(`//li[text()="${stateName}"]`);
    }
    this.unSlectStateLink = function(stateName) {
        return By.xpath(`//li[text()="${stateName}"]/span`);
    }

    this.outlyingTerritories = By.xpath(`//label[contains(text(), 'Select US Outlying Territories')]/following-sibling::span/span/span/span`);
    
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

InputFormsExtended.prototype.selectStateInputForm = async function(listValue) {
    return await this.selectListValue(this.stateList, listValue);
}
InputFormsExtended.prototype.selectHosting = async function() {
    return await this.clickWebElements(this.hostingRadioButton);
}
InputFormsExtended.prototype.getFormInputMessage = async function(runTimeObj) {
    return await this.getText(this.inputForm(runTimeObj));
}
InputFormsExtended.prototype.submitForm = async function() {
    return await this.clickWebElements(this.submitButton);
}
/**
 * Ajax Submit Form 
 */
InputFormsExtended.prototype.writeNameAjaxForm = async function(textValue) {
    return await this.setWebElements([this.ajaxFormName, textValue]);
}
InputFormsExtended.prototype.writeDescriptionAjaxForm = async function(textValue) {
    return await this.setWebElements([this.ajaxFormDescription, textValue]);
}
InputFormsExtended.prototype.submitAjaxForm = async function() {
    return await this.clickWebElements(this.ajaxFormSubmit);
}
InputFormsExtended.prototype.getAjaxFormSuccessMessage = async function() {
    return await this.getText(this.ajaxFormMessage);
}
InputFormsExtended.prototype.submitButtonStatus = async function() {
    return await this.getWebElement(this.ajaxFormSubmit);
}

/**
 * Jquery Select Dropdown
 */
InputFormsExtended.prototype.selectCountryList = async function(countryName) {
    await this.clickWebElements(this.selectCountry);
    await this.setWebElements([this.selectCountrySearch, countryName]);
    await this.clickWebElements(this.searchListLink(countryName));
    return await this.getText(this.selectedValue(countryName));
}
InputFormsExtended.prototype.selectMultiStateList = async function(stateName) {
    await this.clickWebElements(this.selectState);
    await this.clickWebElements(this.slectStatValue(stateName));
    return await this.getText(this.slectStatValue(stateName));
}


InputFormsExtended.prototype.unSelectMultiStateList = async function(stateName) {   
    return await this.clickWebElements(this.unSlectStateLink(stateName));
}

InputFormsExtended.prototype.selectOutlyingTerritories = async function (territoryName) {
    await this.clickWebElements(this.outlyingTerritories);
    await this.setWebElements([this.selectCountrySearch, territoryName]);
    await this.clickWebElements(this.searchListLink(territoryName));    
}
InputFormsExtended.prototype.selectDisabledTerritories = async function (territoryName) {
    await this.clickWebElements(this.outlyingTerritories);
    return await this.clickWebElements(this.searchListLink(territoryName));    
}

export { InputFormsExtended }