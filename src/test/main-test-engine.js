
import 'babel-polyfill';
import { HomePage } from '../lib/homePage';
import { assert } from 'chai';

const pageHome= new HomePage();
const addContext = require('mochawesome/addContext');

function importTest(name, path) {
    describe(name, function () {
        require(path);
    });
}

// var common = require("./module-one/checkbox-demo-test");

describe("Mocha is a test framework and chai is the assertion library", async function () {

  
    before('Launching the home page',async function() {
        let url = 'http://www.seleniumeasy.com/test/';
        await pageHome.getHomePage(url);     
    });

    before('Verifying the homepage title',async function() {
        let title = await pageHome.getTitle();
        assert.equal(title,`Selenium Easy - Best Demo website to practice Selenium Webdriver Online`);
        addContext(this, 'simple string');
        
     });  

     afterEach(function () {
        console.log("after all tests");
    });

    await importTest("Test Suite Two", './module-one/sample-demo-test');
    await importTest("Test Suite One", './module-one/checkbox-demo-test');
});