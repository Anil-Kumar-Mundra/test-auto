
// 'use strict';
import 'babel-polyfill';
import { HomePage } from '../../lib/homePage';
import { SampleDemo } from '../../lib/subPages/sampleDemo';
import { assert } from 'chai';

const addContext = require('mochawesome/addContext');

const pageHome= new HomePage();
const pageSampleDemo = new SampleDemo();

   
it("Navigating to checkboc demo Page", (async () => {
   let blnMethod = await pageHome.navigateCheckboxDemo();
   assert.isTrue(blnMethod, 'Navigation falied');    
}));

it("click on the check box and verify the message", (async () => {
      let result = await pageSampleDemo.clickCheckboxCaptureEventMessage();
      assert.equal(result, `Success - Check box is checked`);
}));

it("click on the multiple checkboxes and verify the message", (async () => {
   let blnMethod = await pageSampleDemo.clickMultiCheckbox();
   assert.isTrue(blnMethod, `Success - Check box is checked`);
}));
