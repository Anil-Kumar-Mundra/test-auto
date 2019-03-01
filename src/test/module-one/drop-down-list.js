import 'babel-polyfill';
import { HomePage } from '../../lib/home-page';
import { InputFormsExtended } from '../../lib/subPages/input-forms-extended';
import { expect} from 'chai';

const addContext = require('mochawesome/addContext');

const pageHome= new HomePage();
const DropdownList = new InputFormsExtended();

it("Navigating to drop-down-list demo Page", (async () => {
    await pageHome.navigateDropdownList()
    .catch((err) => expect.fail(err));
 }));

 it("Selected value from the list will display below the dropdown", (async () => {
    let arrayObj = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
        'Thursday', 'Friday', 'Saturday'];
    for(let element of arrayObj) {
        await DropdownList.clickSelectDay(element)
        .then(async() => {            
            let results = await DropdownList.getListMessage();
            expect(results).to.equal(`Day selected :- ${element}`)
        });
    }
 }));

 it(`By clicking on the buttons, you can get value from the list which 
    will display just below the buttons`, (async () => {
    let arrSates= ['California', 'Florida', 'New Jersey', 'New York',
        'Ohio', 'Texas', 'Pennsylvania', 'Washington']
    for(let stateName of arrSates) {
        await DropdownList.clickSelectDay(stateName)
        .then(async() => {
            await DropdownList.clickFirstSelected()
            .catch((err) => expect.fail(err));            
            let results = await DropdownList.getMultiListMessage();
            expect(results).to.equal(`First selected option is : ${stateName}`)
        });
    }       
 }));