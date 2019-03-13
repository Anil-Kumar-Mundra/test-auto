// 'use strict';
import 'babel-polyfill';
import { HomePage } from '../../lib/home-page';
import { SampleDemo } from '../../lib/subPages/input-forms';
import { expect} from 'chai';

const addContext = require('mochawesome/addContext');

const pageHome= new HomePage();
const RadioButtonDemo = new SampleDemo();

it("Navigating to radio button demo Page", (async () => {
    await pageHome.navigateRadioButtonDemo()
    .catch((err) => expect.fail(err));
 }));
   
it("Select gender as Male and Click on button to get the selected value and verify it", (
async () => {
    await RadioButtonDemo.selectGenderRadio('Male')
    .catch((err) => expect.fail(err));
    await RadioButtonDemo.clickGetCheckedValue()
    .catch((err) => expect.fail(err));
    let results = await RadioButtonDemo.getSingleRadioStatus();
    expect(results).to.equal(`Radio button 'Male' is checked`);   
}));

it("Select gender as Female and Click on button to get the selected value and verify it", (
async () => {
    await RadioButtonDemo.selectGenderRadio('Female')
    .catch((err) => expect.fail(err));
    await RadioButtonDemo.clickGetCheckedValue()
    .catch((err) => expect.fail(err));
    let results = await RadioButtonDemo.getSingleRadioStatus();
    expect(results).to.equal(`Radio button 'Female' is checked`);   
}));

it("Click on button to get the selected values from gender(M) and Age group(0 to 5)", (
async () => {
    await RadioButtonDemo.selectRadioGroupGender('Male')
    .catch((err) => expect.fail(err));
    await RadioButtonDemo.selectRadioAgeGroup('0 to 5')
    .catch((err) => expect.fail(err));
    await RadioButtonDemo.clickGetValues()
    .catch((err) => expect.fail(err));
    let results = await RadioButtonDemo.getMultiRadioStatus('Male');
    expect(results).to.include.all.string('Sex : Male','Age group: 0 - 5');
    
}));
it("Click on button to get the selected values from gender(M) and Age group(5 to 15)", (
async () => {
    await RadioButtonDemo.selectRadioGroupGender('Male')
    .catch((err) => expect.fail(err));
    await RadioButtonDemo.selectRadioAgeGroup('5 to 15')
    .catch((err) => expect.fail(err));
    await RadioButtonDemo.clickGetValues()
    .catch((err) => expect.fail(err));
    let results = await RadioButtonDemo.getMultiRadioStatus('Male');
    expect(results).to.include.all.string('Sex : Male','Age group: 5 to 15)');
    
}));

it("Click on button to get the selected values from gender(M) and Age group(15 to 50)", (
async () => {
    await RadioButtonDemo.selectRadioGroupGender('Male')
    .catch((err) => expect.fail(err));
    await RadioButtonDemo.selectRadioAgeGroup('15 to 50')
    .catch((err) => expect.fail(err));
    await RadioButtonDemo.clickGetValues()
    .catch((err) => expect.fail(err));
    let results = await RadioButtonDemo.getMultiRadioStatus('Male');
    expect(results).to.include.all.string('Sex : Male','Age group: 15 to 50');
    
}));

it("Click on button to get the selected values from gender(F) and Age group(0 to 5)", (
async () => {
    await RadioButtonDemo.selectRadioGroupGender('Female')
    .catch((err) => expect.fail(err));
    await RadioButtonDemo.selectRadioAgeGroup('0 to 5')
    .catch((err) => expect.fail(err));
    await RadioButtonDemo.clickGetValues()
    .catch((err) => expect.fail(err));
    let results = await RadioButtonDemo.getMultiRadioStatus('Female');
    expect(results).to.include.all.string('Sex : Female','Age group: 0 - 5');
    
}));
it("Click on button to get the selected values from gender(F) and Age group(5 to 15)", (
async () => {
    await RadioButtonDemo.selectRadioGroupGender('Female')
    .catch((err) => expect.fail(err));
    await RadioButtonDemo.selectRadioAgeGroup('5 to 15')
    .catch((err) => expect.fail(err));
    await RadioButtonDemo.clickGetValues()
    .catch((err) => expect.fail(err));
    let results = await RadioButtonDemo.getMultiRadioStatus('Female');
    expect(results).to.include.all.string('Sex : Female','Age group: 5 to 15)');
    
}));
    
it("Click on button to get the selected values from gender(F) and Age group(15 to 50)", (
async () => {
    await RadioButtonDemo.selectRadioGroupGender('Female')
    .catch((err) => expect.fail(err));
    await RadioButtonDemo.selectRadioAgeGroup('15 to 50')
    .catch((err) => expect.fail(err));
    await RadioButtonDemo.clickGetValues()
    .catch((err) => expect.fail(err));
    let results = await RadioButtonDemo.getMultiRadioStatus('Female');
    expect(results).to.include.all.string('Sex : Female','Age group: 15 to 50');
    
}));
