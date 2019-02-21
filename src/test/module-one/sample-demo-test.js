
// 'use strict';
import 'babel-polyfill';
import { HomePage } from '../../lib/homePage';
import { SampleDemo } from '../../lib/subPages/sampleDemo';
import { assert } from 'chai';

const addContext = require('mochawesome/addContext');

const pageHome= new HomePage();
const pageSampleDemo = new SampleDemo();

   
it("Navigating to the Sample DemoPage", (async () => {
   assert.isTrue(await pageHome.navigateSampleDemo(), 'Navigation falied');    
}));

it("Enter the text in enter-message field and verify the message", (async () => {
      let message = await pageSampleDemo.enterTextandGetValue('My Text');
      assert.equal('My Text', message);   
}));

it("Enter the two numbers to get the toatl and verify", (async () => {
   let result = await pageSampleDemo.addNumbertoGetTotal(2, 3);  
   assert.equal(result, (2 + 3));          
}));
