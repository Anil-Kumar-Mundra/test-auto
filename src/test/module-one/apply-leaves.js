import 'babel-polyfill';
import { EntryPage } from '../../lib/subPages/main-page';
import { expect} from 'chai';

const ApplyLeave = new EntryPage();
it("Navigate to Apply Leave", (async () => {
    await ApplyLeave.navigateApplyLeave()
    .catch((err) => expect.fail(err));
 }));
 
 it("Enter Leave Details", (async () => {
    await ApplyLeave.EnterLeaveDetails(
        'Biometrics Discrepancy',
        'Biometrics Discrepancy',
        '02/01/2019',
        '02/01/2019'
    )
    .catch((err) => expect.fail(err));
    
 }));

 it("Wait for total duration value", (async () => {
    await ApplyLeave.waitForMessage();
    await ApplyLeave.cancelLeave()
    .catch((err) => expect.fail(err));
}));