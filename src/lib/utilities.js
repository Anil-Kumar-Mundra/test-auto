
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/mydb";

const utilComponent = function () { };
(function() {
    this.compare = function(arr1,arr2) {  
        let result;
        if(!arr1  || !arr2) return        
        arr1.forEach((e1 )=> arr2.forEach(e2 => {
            if (e1.length > 1 && e2.length) {
                result = compare(e1,e2);
            } else if(e1 !== e2 ) {
                result = false
            } else {
                result = true
            }
        }));
        return result       
    },
    this.runTest = async function (testName, suiteName) {
        await describe(testName, async function () {            
            await require(`../test/${suiteName}/${testName}`);
        });
    },
    this.getRecordArrayMongoDB = async function(dbName, collectionName) {
        const obj =[];
        await MongoClient.connect(url, async function(err, db) {
            if (err) throw err;
            const dbo = db.db(dbName);            
            await dbo.collection(collectionName).find({}, { projection: { _id: 0, name: 1 } }).toArray(
                async function(err, result) {
                    if (err) throw err;
                    console.log(result);            
                    db.close();    
            });  
        });
        
    }
}).call(utilComponent.prototype) //creating a prototype object && properties for BasePage object

export{ utilComponent }