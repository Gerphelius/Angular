'use strict';

const admin = require('firebase-admin');

const serviceAccount = require('./vendors/credentials/angular-hw5-firebase-adminsdk-1epn5-c7ac35371b.json');

const firebase = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://angular-hw5.firebaseio.com"
});

console.log("Start firebase database connection");
console.log("databaseURL: https://angular-hw5.firebaseio.com");
module.exports = firebase;