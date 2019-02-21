
// 'use strict';
import 'babel-polyfill';
import { HomePage } from '../../lib/homePage';
import { SampleDemo } from '../../lib/subPages/sampleDemo';
import { assert } from 'chai';

const addContext = require('mochawesome/addContext');

const pageHome= new HomePage();
const pageSampleDemo = new SampleDemo();

it("Navigating to radio button demo Page", (async () => {
    let blnMethod = await pageHome.navigateRadioButtonDemo();
    assert.isTrue(blnMethod, 'Navigation falied');    
 }));
   
 it("click on the check box and verify the message", (async () => {
    let result = await pageSampleDemo.radioButtonDemo();
    assert.equal(result, `Radio button 'Male' is checked`);
}));
