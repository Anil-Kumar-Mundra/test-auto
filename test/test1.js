
// 'use strict';
import 'babel-polyfill';
import { HomePage } from '../lib/homePage';
import { SampleDemo } from '../lib/subPages/sampleDemo';
import { assert } from 'chai';

const addContext = require('mochawesome/addContext');

const pageHome= new HomePage();
const pageSampleDemo = new SampleDemo();


describe('Mocha is a test framework and chai is the assertion library', async function() {   
   
   before('Launching the home page',async function() {
      let url = 'http://www.seleniumeasy.com/test/';
      await pageHome.getHomePage(url);     
   });  
   

   it('Verifying the homepage title',async function() {
      let title = await pageHome.getTitle();
      assert.equal(title,`Selenium Easy - Best Demo website to practice Selenium Webdriver Online`);
      addContext(this, 'simple string');
      
   });
   
   it("Navigating to the Sample DemoPage", (async () => {
      let methodFlag = await pageHome.navigateSampleDemo();
      assert.isTrue(methodFlag, 'Navigation falied');    
   }));

   it("Enter the text in enter-message field and verify the message", (async () => {
         let message = await pageSampleDemo.enterTextandVerify('My Text');
         assert.equal('My Text', message);   
   }));

   it("Enter the two numbers to get the toatl and verify", (async () => {
      let result = await pageSampleDemo.enterTwoNumberstoGetTotal(2, 3);  
      assert.equal(result, (12 + 3));          
   }));

        
});

