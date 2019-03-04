
import 'babel-polyfill';
import { BasePage } from '../lib/base-page';
import { assert } from 'chai';

const basePage = new BasePage();
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
        await basePage.getURL(url)
        .then( async() => {
            return await basePage.maximizeBrowser();
        });     
    });

    it("Verifying the homepage title", (async () => {
        await basePage.getTitle()
        .then((title) => assert.equal(title,`Selenium Easy - Best Demo website to practice Selenium Webdriver Online`)); 
     }));
    await importTest("Sample Demo Input", './module-one/sample-demo-test');
    await importTest("Sample Demo Checkbox", './module-one/checkbox-demo-test');
    await importTest("Sample Demo Radio Button", './module-one/radiobutton-demo-test');
    await importTest("Sample demo drop-down-list", './module-one/drop-down-list');
    await importTest("Sample demo submit form", './module-one/input-form-submit');
    await importTest("Sample demo ajax form", './module-one/ajax-form-submit');
    await importTest("Sample demo jquery select", './module-one/jquery-select-dropdown');
});