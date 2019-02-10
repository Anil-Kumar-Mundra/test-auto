import { BasePage } from '../basePage';
import { By } from 'selenium-webdriver';


const User_Message = By.id('user-message');

function SampleDemo() {
    BasePage.call(this);
}


SampleDemo.prototype = Object.create(BasePage.prototype);

SampleDemo.prototype.writeUserMessage = async function(strText, strText2) {

    return await this.setWebElement(
        [ User_Message, strText ],
        [ User_Message, strText2 ],
    );
}

SampleDemo.prototype.getUserMessageText = async function() {


    return await this.getValue(User_Message);
      
}

export  { SampleDemo }