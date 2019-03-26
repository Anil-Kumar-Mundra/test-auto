import { BasePage } from '../base-page';
/** 
 * 
*/
const EntryPage = function () {
    BasePage.call(this);
    const By = this.By;    
    this.userName = By.css(`input#txtUserId`);
    this.password = By.css(`input#txtPassword`);
    this.loginButton = By.css(`input#btnLogin`);
    this.logoutButton = By.xpath(`//a[text()="Logout"]`);
    this.absenceDetails = By.xpath(`//a[contains(text(), 'Absence Details')]`);
    this.leaveBalance = By.xpath(`//a[contains(text(), 'Available Leave Balance')]`);
    this.tableAbsenceDetails = By.xpath(`//table[contains(@id, 'AbsenceDetails')]/tbody/tr`);
    this.tableLeaveBalance = By.xpath(`//table[contains(@id, 'LeaveBalance')]/tbody/tr`);
    this.applyLeave = By.xpath(`//a[contains(text(), 'Apply Leave')]`);
    this.obsenceCategory = By.xpath(`//select[@title="Absence Type"]`);
    this.leaveReason = By.xpath(`//input[contains(@id, 'AbsenseReason')]`);
    this.startDate = By.xpath(`//input[@class="txt_fld_n" and contains(@id, 'StartDate')]`);
    this.endDate = By.xpath(`//input[@class="txt_fld_n" and contains(@id, 'EndDate')]`);
    this.comments = By.xpath(`//textarea[contains(@id, 'comments')]`);
    this.totalDuration = By.xpath(`//input[@class="txt_fld_n" and contains(@id, 'TotalDuration')]`);
    this.btnsubmitLeave = By.xpath(`//input[contains(@id, 'Submit')]`);
    this.btnCancelLeave = By.xpath(`//input[contains(@id, 'Cancel')]`);
    this.btnLogout = By.xpath(`//a[text()='Logout']`);
}
EntryPage.prototype = Object.create(BasePage.prototype);

EntryPage.prototype.wrtiteUserNamePassword = async function(strUserName, strPassword) {
    return await this.setWebElements( 
        [this.userName, strUserName],
        [this.password, strPassword]
    );
}
EntryPage.prototype.clickLoginButton = async function() {
    return await this.clickWebElements(this.loginButton);
}

EntryPage.prototype.checkLogoutButton = async function() {
    return await this.isDisplayed(this.logoutButton);
}
EntryPage.prototype.navigateAbsenceDetails = async function() {
    return await this.clickWebElements(this.absenceDetails);
}
EntryPage.prototype.navigateLeaveBalance = async function() {
    return await this.clickWebElements(this.leaveBalance);
}
EntryPage.prototype.navigateApplyLeave = async function() {
    return await this.clickWebElements(this.applyLeave);
}
EntryPage.prototype.captureAbsenceDetails = async function() {
    let table = await this.webTable(this.tableAbsenceDetails);
    // console.log(`${table.rowCount}, ${table.headerCount}, ${table.columnCount}`) ;   
    return table.getDataObject;
}

EntryPage.prototype.captureLeaveDetails = async function() {
    let table = await this.webTable(this.tableLeaveBalance);
    // console.log(`${table.rowCount}, ${table.headerCount}, ${table.columnCount}`) ;   
    return table.getDataObject;
}

EntryPage.prototype.EnterLeaveDetails = async function(
    selectValue,
    strLeaveReason,
    dtStartDate,
    dtEndDate) {
    await this.selectListValue(this.obsenceCategory, selectValue);
    await this.setWebElements(
        [this.leaveReason, strLeaveReason],
        [this.startDate, dtStartDate],
        [this.endDate, dtEndDate],
        [this.comments, 'Test_Comments']
    )
}

EntryPage.prototype.waitForMessage = async function() {
    await this.staticWait();    
}

EntryPage.prototype.submitLeave = async function() {
    await setTimeout(async function() {
        await this.clickWebElements(this.btnsubmitLeave);
    }, 5000); 
}

EntryPage.prototype.cancelLeave = async function() {
    await this.clickWebElements(this.btnCancelLeave);    
}

EntryPage.prototype.logout = async function() {
    await this.clickWebElements(this.btnLogout);
    await this.staticWait();
    await this.close();
}

export { EntryPage }