
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

   
   
   it("Display Message", (async () => {
      await pageSampleDemo.showMessage(); 
      // assert.equal(message, 'My TextMy Text2');   
   }));

   it("Text verification", (async () => {
      let message = await pageSampleDemo.getUserMessageText(); 
      assert.equal(message, 'My TextMy Text2');   
   }));


   it("Enter the two numbers", (async () => {
      await pageSampleDemo.enterTwoNumberstoAdd(2, 3); 
         
   }));

   it("click on get total", (async () => {
      await pageSampleDemo.clickGetTotal();          
   }));

   it("Text verification", (async () => {
      let value = await pageSampleDemo.getTotalValue(); 
      assert.equal(value, (2 + 3));   
   }));


     
});

