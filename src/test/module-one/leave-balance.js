import 'babel-polyfill';
import { EntryPage } from '../../lib/subPages/main-page';
import { expect} from 'chai';

const LeaveBalance = new EntryPage();
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

it("Navigate to Leave Balance Details", (async () => {
    await LeaveBalance.navigateLeaveBalance()
    .catch((err) => expect.fail(err));
 }));
 it("Capture Leave Balance Details", (async () => {
    let obj = await LeaveBalance.captureLeaveDetails();
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      const dbo = db.db("lms_Systems");     
      dbo.collection("leaveBalance").insertOne(obj, function(err, res) {
        if (err) throw err;
        db.close();
      });
    });
 }));