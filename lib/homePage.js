import { BasePage } from './basePage'
import { By } from 'selenium-webdriver';

const Input_Forms = By.xpath(`/html/body/div[1]/div[2]/nav/div/div[2]/ul[1]/li[1]/a`);
const Input_Links = By.xpath(`html/body/div[1]/div[2]/nav/div/div[2]/ul[1]/li[1]/ul/li[1]/a`);

function HomePage() {

    BasePage.call(this);
}

HomePage.prototype = Object.create(BasePage.prototype);

HomePage.prototype.navigateSampleDemo = async function()  {

     return await this.clickWebElement(
         Input_Forms, 
         Input_Links
    ) 

}



export { HomePage }