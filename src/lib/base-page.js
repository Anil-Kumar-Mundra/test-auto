/**
 * @fileoverview this module have web driver related methods for test optimization.
 * Dependencies. By, Until from selenium webdriver and driver form driver module.
 * 
 */
import { By, until, promise, Keys } from 'selenium-webdriver';
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
    this.getWebElement = async function(element) {        
            return await driver.findElement(element)
            .catch(() => driver.wait(until.elementLocated(element), 5000));
    }
    /**
     * Get the mutiple elements using locator objects
     * @param element is a locator object(bound with By)
     * @return {Promise}
     */  
    this.getWebElements = async function(element) {        
        return await driver.findElements(element)
        .then((elemnts) => elemnts)
        .catch(() => driver.wait(until.elementLocated(element), 5000));
}
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
            return await obj.getAttribute(attributeName)
            // .then((selected) => selected);
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
        .then(async obj =>  await obj.isSelected());
    }
    /**
     * Get the check/uncheck options of checkbox/radio buttons
     * @param element is a locator object(bind with By)
     * @return {Boolean}
     */  
    this.isDisplayed= async(obj) => { 
        return await this.getWebElement(obj)
        .then(async obj =>  await obj.isDisplayed());
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

    this.enterKeys= async(obj) => { 
        return await this.getWebElement(obj)
        .then(async obj =>  await obj.sendKeys(Keys.ENTER));
    }

    this.findChildsWithTagName = async(obj, childTagName) => {
        return await obj.findElements(By.tagName(childTagName))
        .then((objElements) => objElements);
    }

    this.getCellText = async(obj) => {
        return await obj.getText()
        .then((text) => text);
    }

    this.webTable = async(obj) => {
        const objTable = {};
        let rowCnt = -1;
        let headerCnt = -1;
        let columnCnt = -1;
        /* Get web table row, header and column count */
        let rowsObj = await this.getWebElements(obj);
        rowCnt = rowsObj.length;
        await rowsObj[0].findElements(By.tagName('th'))
        .then((headerElements) => headerCnt = headerElements.length);
        await rowsObj[1].findElements(By.tagName('td'))
        .then((columElements) => columnCnt = columElements.length);
        
         
            
            for(let i = 0; i < columnCnt; i++) {
                let propertyName = '';
                let objArray=[];
                await rowsObj[0].findElements(By.tagName('th'))
                .then(async(headerElements) => {                                     
                    propertyName = await this.getCellText(headerElements[i]);
                });
                for(let j = 1; j < rowCnt; j++) {
                    await rowsObj[j].findElements(By.tagName('td'))
                    .then(async(colElements) => {                                     
                     objArray.push(await this.getCellText(colElements[i]));
                    });
                }
                
                objTable[propertyName] = objArray;
            }            

        return {
            rowCount: rowCnt,
            headerCount: headerCnt,
            columnCount : columnCnt,
            getDataObject: objTable
        }
    }    

    this.staticWait = async function() {
        await this.driver.sleep(3000);
    }

    
}).call(BasePage.prototype) //creating a prototype object && properties for BasePage object

export{ BasePage }