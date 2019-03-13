
import 'babel-polyfill';
import { BasePage } from '../lib/base-page';
import { assert } from 'chai';
import{ utilComponent } from '../lib/utilities'

const testFlow = require('./test-flow.json');
const basePage = new BasePage();
const addContext = require('mochawesome/addContext');
const UtilComponent = new utilComponent();



function runTest(name, path) {
    describe(name, function () {
        require(path);
    });
}

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

    let arrTestSuite = testFlow.testsuites;
    for (let testSuite of arrTestSuite) {
        let suiteName = testSuite.name;
        if (testSuite.executionstatus !== true) {
            break;
        }    
        Object.entries(testSuite.tests).forEach(async ([testName, testFlag]) => {
            if(testFlag) {
                await UtilComponent.runTest(testName, suiteName);
            }
        }); 
    }
});