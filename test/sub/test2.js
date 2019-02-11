// import { BasePage} from './lib/basePage'
// import { HomePage } from '../lib/homePage';
// import { SampleDemo } from '../lib/subPages/sampleDemo';

// const SampleDemoComponent = new SampleDemo();
// const  BaseComponent= new HomePage();




// (async function testSampleDemo() {
  
//     let url = 'http://www.seleniumeasy.com/test/';
//    await BaseComponent.getHomePage(url);
//    await BaseComponent.navigateSampleDemo();
//    await SampleDemoComponent.enterText();
//    console.log('end of test case');
   
// })();


'use strict';
// require("babel-core/register");
// require("babel-polyfill");
import 'babel-polyfill';
import { Builder, By, until } from 'selenium-webdriver';
const driver = new Builder().forBrowser('chrome').build();


describe('Home Missing Alt Tags Test', () => {
   // process.on('unhandledRejection', (error) => {
   //   throw (error); // promote promise warning to mocha error
   // });
 
   before(async () => {
      await driver.get('http://www.seleniumeasy.com/test/');
   });
 
   it("Sample async/await mocha test using wrapper", (async () => {
      console.log('karmara babu');
     
  }));
 
   after( async() => await driver.quit());
 });