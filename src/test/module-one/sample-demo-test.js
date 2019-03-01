// 'use strict';
import 'babel-polyfill';
import { HomePage } from '../../lib/home-page';
import { SampleDemo } from '../../lib/subPages/input-forms';
import { assert, expect } from 'chai';

const addContext = require('mochawesome/addContext');
const pageHome= new HomePage();
const pageSampleDemo = new SampleDemo();

it("Navigating to the Sample DemoPage", (async () => {
   await pageHome.navigateSampleDemo()
   .catch(async(err) => await assert.fail(err));  
}));

//Single Input Field
it("Enter your message", (async () => {   
   await pageSampleDemo.writeMessage('Text verification')
   .catch(async(err) => await assert.fail(err)); 
}));
it("Click on Show Message button to display message entered in input field", (async () => {
   await pageSampleDemo.clickShowMessage()
   .catch(async(err) => await assert.fail(err));
   
}));
it("Message Verification", (async () => {
   const result = await pageSampleDemo.getMessage();
   expect(result).to.equal('Text verification');    
}));

//Two Input Fields
it("Enter Value for a and b", (async () => {   
   await pageSampleDemo.enterTwoNumbers(4, 5)
   .catch(async(err) => await expect.fail(err)); 
}));
it("Click on Show Message button to display message entered in input field", (async () => {
   await pageSampleDemo.clickGetTotal()
   .catch(async(err) => await expect.fail(err));
   
}));
it("Message Verification", (async () => {
   const result = await pageSampleDemo.getTotalOfTwoValues();
   expect(parseInt(result)).to.equal(4 + 5); 
}));