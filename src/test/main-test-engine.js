import 'babel-polyfill';
import { BasePage } from '../lib/base-page';
import { assert } from 'chai';
import{ utilComponent } from '../lib/utilities'
import { EntryPage } from '../lib/subPages/main-page';
import { Credentials} from './credentials-properties';


const testFlow = require('./test-flow.json');
const basePage = new BasePage();
const addContext = require('mochawesome/addContext');
const UtilComponent = new utilComponent();
const LoginDetails = new Credentials();
const MainPage = new EntryPage();

describe("Mocha is a test framework and chai is the assertion library", async function () {
    before('Launching the home page',async function() {        
        await basePage.getURL(LoginDetails.url)
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
     }));

    let arrTestSuite = testFlow.testsuites;
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