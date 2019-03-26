import 'babel-polyfill';
import { BasePage } from '../lib/base-page';
import { assert } from 'chai';
import{ utilComponent } from '../lib/utilities'
import { EntryPage } from '../lib/subPages/main-page';

const testFlow = require('./test-flow.json');
const basePage = new BasePage();
const addContext = require('mochawesome/addContext');
const UtilComponent = new utilComponent();
const MainPage = new EntryPage();

describe("Mocha is a test framework and chai is the assertion library", async function () {
    before('Launching the home page',async function() {
        // let url = 'http://www.seleniumeasy.com/test/';
        let url  ='https://webone.teksystems.com/TEKInternalApps/LeaveManagement/AbsenceManagement.aspx';
        await basePage.getURL(url)
        .then( async() => {
            return await basePage.maximizeBrowser();
        });     
    });

    after("Logout LMS application", async function() {
        await MainPage.logout();  
    });

    it("Verifying the homepage title", (async () => {
        await basePage.getTitle()
        .then((title) => assert.equal(title,`Login Page`)); 
        // .then((title) => console.log(title));
     }));

    let arrTestSuite = testFlow.testsuites;
    // console.log(arrTestSuite);
    for (let testSuite of arrTestSuite) {
        let suiteName = testSuite.name;
        if (testSuite.executionstatus !== true) {
            continue;
        }    
        Object.entries(testSuite.tests).forEach(async ([testName, testFlag]) => {
            if(testFlag) {
                await UtilComponent.runTest(testName, suiteName);
            }
        }); 
    }
});