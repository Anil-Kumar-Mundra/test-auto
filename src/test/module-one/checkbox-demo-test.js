
// 'use strict';
import 'babel-polyfill';
import { HomePage } from '../../lib/home-page';
import { SampleDemo } from '../../lib/subPages/input-forms';
import { expect, should } from 'chai';

const addContext = require('mochawesome/addContext');

const pageHome= new HomePage();
const CheckboxDemo = new SampleDemo();

it("Navigating to checkbox demo Page", (async () => {
   await pageHome.navigateCheckboxDemo()
   .catch((err) => expect.fail(err));
}));

//Single Check Box
it("Clicking on the checkbox will display a success message", (async () => {
      await CheckboxDemo.clickSingleCheckBox()
      .catch((err) => should.fail(err));      
}));

it("click on the checkall button and verify all the checkboxes are selected", (async () => {
   let results = await CheckboxDemo.getCheckboxStatus();
   expect(results).to.equal(`Success - Check box is checked`);   
}));

//Multi Checkbox - check all
it("Click on 'Check All' to check all checkboxes at once", (async () => {
   await CheckboxDemo.clickMultiCheckbox()
   .catch((err) => should.fail(err));  
}));
it("When you check all the checkboxes, button will change to Uncheck All", (async () => {
   let results = await CheckboxDemo.captureMulticheckboxStatus();
   expect(results).to.be.an('array').that.does.not.include(false);
}));
//Multi Checkbox - uncheck all
it("Click on uncheck all to check all checkboxes at once", (async () => {
   await CheckboxDemo.clickMultiCheckbox()
   .catch((err) => should.fail(err));  
}));
it("When you check all the checkboxes, button will change to check All", (async () => {
   let results = await CheckboxDemo.captureMulticheckboxStatus();
   expect(results).to.be.an('array').that.does.not.include(true);
}));