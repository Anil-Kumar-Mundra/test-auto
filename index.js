// import { BasePage} from './lib/basePage'
import { HomePage } from './lib/homePage';
import { SampleDemo } from './lib/subPages/sampleDemo';

const SampleDemoComponent = new SampleDemo();
const  BaseComponent= new HomePage();




(async function testSampleDemo() {
  
    let url = 'http://www.seleniumeasy.com/test/';
   await BaseComponent.getHomePage(url);
   await BaseComponent.navigateSampleDemo();
   await SampleDemoComponent.enterText();
   console.log('end of test case');
   
})();



