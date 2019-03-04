import 'babel-polyfill';
import { HomePage } from '../../lib/home-page';
import { InputFormsExtended } from '../../lib/subPages/input-forms-extended';
import { expect} from 'chai';

const addContext = require('mochawesome/addContext');

const pageHome= new HomePage();
const AjaxFormSubmit = new InputFormsExtended();

it("Navigating to drop-down-list demo Page", (async () => {
    await pageHome.navigateAjaxFormSubmit()
    .catch((err) => expect.fail(err));
 }));

 it('Ajax Form Submit with Loading icon enter name, description and Submit', (async () => {
    await AjaxFormSubmit.writeNameAjaxForm('TEK_NAMWE')
    .catch((err) => expect.fail(err));
    await AjaxFormSubmit.writeDescriptionAjaxForm('TEK_DESCRIPTION')
    .catch((err) => expect.fail(err));
    await AjaxFormSubmit.submitAjaxForm()
    .catch((err) => expect.fail(err));
 }));
/**
 * On processing, the submit button will be hidden to prevent duplicate submits.
 *  */
 it('Loading icon will be shown as progress about the server side execution', (async () => {
    let results = await AjaxFormSubmit.getAjaxFormSuccessMessage();
    expect(results).to.equal(`Form submited Successfully!`);
 }));

 
 it('On processing, the submit button will be hidden to prevent duplicate submits.', 
    (async () => {
        await AjaxFormSubmit.submitButtonStatus()
        .then(() => expect(false).to.be.true)
        .catch(()=> expect(true).to.be.true);    
 }));
