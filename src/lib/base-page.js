/**
 * @fileoverview this module have web driver related methods for test optimization.
 * Dependencies. By, Until from selenium webdriver and driver form driver module.
 * 
 */
import { By, until, promise } from 'selenium-webdriver';
import { driver} from './driver';
/**
 *  BasePage constructor function. 
*/
function BasePage() {
    this.driver = driver;
    this.By = By;
    this.until = until;
}
/**
 *  Web Driver related methods as constructor function later convert as 
 *      prototype object
*/
(function() {
    /**
     * Luanch the main page URL.
     * @param {string} value.
     * @return {Promise}
     */   
    this.getURL= async (url) => await driver.get(url);
    /**
     * Maximize the Browser
     * @return {Promise}
     */
    this.maximizeBrowser = async() => await driver.manage().window().maximize();
    /**
     * Get the tht title of the web page
     * @return {Promise}
     */  
    this.getTitle = async () => await driver.getTitle();
    /**
     * Get the element using locator object
     * @param element is a locator object(bound with By)
     * @return {Promise}
     */  
    this.getWebElement = async(element) =>  await driver.findElement(element);
    /**
     * Close the current session
     * @return {Promise}
     */  
    this.close = async () => await driver.close();
    /**
     * Quit the current session
     * @return {Promise}
     */  
    this.quit = async() => await driver.quit();
    /**
     * Get the text from web element
     * @param element is a locator object(bound with By)
     * @return {String|number}
     */  
    this.getText = async(objElement) => {
        return await this.getWebElement(objElement)
        .then(async(obj) => {
            return await obj.getText();
        });   
    }
     /**
     * Get the text from web element
     * @param element is a locator object(bound with By)
     * @param {String} attributeName is a attribute name of web element
     * @return {String|number}
     */     
   this.getValue = async(objElement, attributeName) => {
       return await this.getWebElement(objElement)
       .then( async(obj) => {
            return await obj.getAttribute(attributeName); 
       });   
    }
    /**
     * Cliicks on web element
     * @param element is a locator object(bound with By)
     * @return {!Array<Promise>}
     */  
    this.clickWebElements = async function(...objElement) {  
        this.allPromises = [];
        for(let element of objElement ) {                
            await this.getWebElement(element)
            .then(async (element) => {
                return this.allPromises.push(await element.click());
            });                  
        }   
        
        return Promise.all(this.allPromises);      
    }
    /**
     * Set the value of web elements
     * @param element is a locator object(bind with By)
     * @return {!Array<Promise>}
     */  
    this.setWebElements = async(...objElement) => { 
        this.allPromises = [];
        for(let objArray of objElement) { 
            let element = objArray[0];
            let strText = objArray[1];
            await this.getWebElement(element)
            .then(async (element) => {
                return this.allPromises.push(await element.sendKeys(strText));        
            })
        }
        return Promise.all(this.allPromises);      
    }
    /**
     * Get the check/uncheck options of checkbox/radio buttons
     * @param element is a locator object(bind with By)
     * @return {Boolean}
     */  
    this.isSelected = async(obj) => { 
        return await this.getWebElement(obj)
        .then(async (obj) =>  await obj.isSelected())        
        .catch((err) =>console.log(err));  
    }
    
    /**
     * Get the check/uncheck options of checkbox/radio buttons
     * 
     */ 
      
     this.selectListValue = async (obj, listValue) => {
        await this.getWebElement(obj)
        .then(async (obj) => {
            await obj.click()
            .then(async() => {
                let items = await driver.findElements(By.tagName('option'));
                return promise.filter(items, async(item) => {
                    await item.getText()
                    .then((text) => {
                        if( text === listValue) {
                            item.click();
                        }
                    });
                })
            })
        })  
     }
    

}).call(BasePage.prototype) //creating a prototype object && properties for BasePage object

export{ BasePage }