import 'babel-polyfill';
import { EntryPage } from '../../lib/subPages/main-page';
import { expect} from 'chai';

const AbsenceDetails = new EntryPage();

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";


it("Navigate to absence details", (async () => {
    await AbsenceDetails.navigateAbsenceDetails()
    .catch((err) => expect.fail(err));
 }));
 
 it("Get Row Count", (async () => {
    let obj = await AbsenceDetails.captureAbsenceDetails();
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      const dbo = db.db("lms_details");     
      dbo.collection("lmsRecords").insertOne(obj, function(err, res) {
        if (err) throw err;
        db.close();
      });
    });
 }));