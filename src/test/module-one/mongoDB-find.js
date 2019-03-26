import 'babel-polyfill';
import { expect} from 'chai';
import{ utilComponent } from '../../lib/utilities';

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

const UtilModule = new utilComponent();

it("MongoDB get recordset", (async () => {
    await UtilModule.getRecordArrayMongoDB('lms_details', 'sportsDetails')
    .catch((err) => expect.fail(err));    
 }));

 
it("MongoDB delete recordset", (async () => {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        const dbo = db.db("lms_Systems");
        const myquery = { name : 'tennis', };
        dbo.collection("sportsDetails").deleteOne(myquery, function(err, obj) {
          if (err) throw err;
          console.log("1 document deleted");
          db.close();
        });
      });     
 }));

 it("MongoDB update recordset", (async () => {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        const dbo = db.db("lms_Systems");
        const myquery = { name: "golf" };
        const newvalues = { $set: {name: "Rugby" } };
        dbo.collection("sportsDetails").updateOne(myquery, newvalues, function(err, res) {
          if (err) throw err;
          console.log("1 document updated");
          db.close();
        });
      });  
 }));