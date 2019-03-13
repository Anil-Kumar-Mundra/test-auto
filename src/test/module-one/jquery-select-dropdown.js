import 'babel-polyfill';
import { HomePage } from '../../lib/home-page';
import { InputFormsExtended } from '../../lib/subPages/input-forms-extended';
import { expect} from 'chai';

const addContext = require('mochawesome/addContext');

const pageHome= new HomePage();
const JQuerySelect = new InputFormsExtended();
const arrConutrylist = ['Australia', 'Bangladesh', 'Denmark', 'Hong Kong', 'India',
    'Japan', 'Netherlands', 'New Zealand', 'South Africa', 
    'United States of America']

const arrStateList = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 
    'Colorado', 'Connecticut', 'Delaware', 'District Of Columbia', 'Florida', 
    'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 
    'Kentucky', 'Louisiana', 'Maine', 'Maryland','Massachusetts', 'Michigan', 
    'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 
    'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 
    'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
    'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

const arrOutlyingTerritories= ['American Samoa', 'Northern Mariana Islands', 
    'Puerto Rico', 'Virgin Islands'];
const arrDisabledTerritories = ['Guam', 'United States Minor Outlying Islands'];

it("Navigating to drop-down-list demo Page", (async () => {
    await pageHome.navigateJQuerySelctDropDown()
    .catch((err) => expect.fail(err));
 }));
 
 it("Drop Down with Search box", (async () => {   
    for(let country of arrConutrylist) {
        let results= await JQuerySelect.selectCountryList(country);    
        expect(country).to.be.eql(results); 
    }    
 }));
 it("Multi Select - Search and Select multiple states", (async () => {   
    for(let state of arrStateList) {
        let results = await JQuerySelect.selectMultiStateList(state);    
        expect(state).to.be.eql(results.substring(1));        
    } 
 }));
 it("Multi UnSelect - Search and Select multiple states", (async () => {     
    for(let state of arrStateList) {
        await JQuerySelect.unSelectMultiStateList(state)  
        .catch((err) => expect.fail(err));
    } 
    return await JQuerySelect.clickWebElements(JQuerySelect.selectState);
 }));
 
 it("Select US Outlying Territories : Drop Down with Ensabled values", (async () => {   
    for(let territory of arrOutlyingTerritories) {
       await JQuerySelect.selectOutlyingTerritories(territory);                
    } 
 }));
 it("Select US Outlying Territories : Drop Down with disabled values", (async () => {   
    for(let territory of arrDisabledTerritories) {
       await JQuerySelect.selectDisabledTerritories(territory)
       .then(() => expect(false).to.be.true)
       .catch(()=> expect(true).to.be.true);                  
    } 
 }));