/*
    Module Name: Base component 
    Description: 
    Author: Anil Kumar Mundra 
    Creation Notes:
    Modification Notes
*/

import { By, until } from 'selenium-webdriver';
import { driver} from './driver'

function BasePage() {

    this.driver = driver;
    this.By = By;
    this.until = until;
}


(async function() {

    /* To navigate home page */
    this.getHomePage= async (url) => { 

        this.driverFlag = false;

        try {
            await driver.then(
                async (driver) => 
                {
                    // console.log(`Session created`);
                    await driver.get(url) 
                    .then( async() => 
                    {                   
                        await driver.manage().window().maximize()  
                        .then( () => 
                        {                        
                            // console.log(`browser maximized`);
                            this.driverFlag = true;
                        })
                        .catch( (err) => console.log(`
                            Error while maximizing the browser:- ${err}
                        `));
                    })
                    .catch((err) => console.error(`Session Error ${err}`)); 
                })
            .catch( (err) => console.log(err));

        } catch(err) {
            console.error(` Error while launching the browser or home page ${err}`);
        } finally {
            return this.driverFlag;
        }

    }

    /*
    * Get title
    */
    this.getTitle = async () => await driver.getTitle().then((title) => title);

    /* 
    * to get an element in web page
    */
    this.getWebElement = objElement =>  driver.findElement(objElement);

    /*
    * Get title
    */
   this.getValue = async(objElement) => {
       return await this.getWebElement(objElement)
       .then( async(obj) => {
            return await obj.getAttribute("value"); 
       });   
    }

    /* 
    *to click on element 
    */
    this.clickWebElement = async(...objElement) => {        
        
        this.methodFlag = false;

        try {             
            for(let obj of objElement ) {

                await this.getWebElement(obj)
                .then(async (obj) => 
                {
                    await obj.click()
                    .then( () =>
                    {
                        this.methodFlag = true;
                        // console.log(`click method on obj`);
                        
                    })
                    .catch((err) => 
                    {
                        
                        this.methodFlag = false;
                        console.error(err);                       
                        
                    })
                })
                .catch( (err) => 
                {
                    this.methodFlag = false;
                    console.log(`click method is not applied :- ${err}`);
                    
                });

               if(this.methodFlag == false) {
                   break
               }
            }
        } catch(err) {
            console.error(err);
        } finally {
            return this.methodFlag;
        } 
  
    }
    
    this.setWebElement = async(...objElement) => {        
        
        this.methodFlag = false;

        try {             
            for(let obj of objElement) {

                let objElement = obj[0];
                let strText = obj[1];

                await this.getWebElement(objElement)
                .then(async (obj) => {                    
                    await obj.sendKeys(strText)
                    .then( () => {
                        this.methodFlag = true;
                        // console.log(`text entered`);                        
                    })
                    .catch((err) => {
                        this.methodFlag = false;
                        console.error(err); 
                    });
                })
                .catch( (err) => {
                    this.methodFlag = false;
                    console.log(`text is not entered :- ${err}`);
                });

                if(this.methodFlag == false) {
                    break;
                }                
            }
        } catch(err) {
            console.error(err);
        } finally {
            return this.methodFlag;
        } 
  
    }    

}).call(BasePage.prototype)
export{ BasePage }