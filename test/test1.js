
// 'use strict';
import 'babel-polyfill';
import { HomePage } from '../lib/homePage';
import { SampleDemo } from '../lib/subPages/sampleDemo';

const assert = require('chai').assert;

const pageHome= new HomePage();
const pageSampleDemo = new SampleDemo();


describe('Mocha is a test framework and chai is the assertion library', async function() {   
   
   before('Launching the home page',async function() {
      let url = 'http://www.seleniumeasy.com/test/';
      await pageHome.getHomePage(url);     
   });  
   

   it('Verifying the homepage title',async () => {
      let title = await pageHome.getTitle();
      assert.equal(title,`Selenium Easy - Best Demo website to practice Selenium Webdriver Online`);
      
   });
   
   it("Navigating to the Sample DemoPage", (async () => {
      let methodFlag = await pageHome.navigateSampleDemo();
      assert.isTrue(methodFlag, 'Navigation falied');    
   }));

   it("Enter the text in sample message field", (async () => {
      await pageSampleDemo.writeUserMessage('My Text', 'My Text2'); 
      assert.equal('My Text', 'My Text');   
   }));

   
   it("text verification", (async () => {
      let message = await pageSampleDemo.getUserMessageText(); 
      assert.equal(message, 'My TextMy Text2');   
   }));
   
});

