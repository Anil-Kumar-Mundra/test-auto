import 'babel-polyfill';
import { HomePage } from '../../lib/home-page';
import { InputFormsExtended } from '../../lib/subPages/input-forms-extended';
import { expect} from 'chai';

const objInputForm = {
    "first_name": `TEK_NAME`,
    "last_name": `TEK_LAST_NAME`,
    "email": `TEK_SYSTEMS@TEK.COM`,
    "phone": `(845)-555-1212`,
    "address": `3825 Edwards Rd Suite 500`,
    "city": `Cincinnati`,
    "zip": `45209`,
    "website": `Domian`,
    "comment": `TEK_PROJECT_DESCRIPTION`
}

const addContext = require('mochawesome/addContext');

const pageHome= new HomePage();
const inputFormSubmit = new InputFormsExtended();

it("Navigating to inout form submit page", (async () => {
    await pageHome.navigateInputFormSubmit()
    .catch((err) => expect.fail(err));    
 }));

 it("Input form with validations", (async () => {
   
    for (let [key, value] of Object.entries(objInputForm)) {
        await inputFormSubmit.writeInputFormFields(key, value)
        .catch((err) => console.log(err));
        // console.log(key, value);
    }
 }));