import $ from 'jquery';
// Grab keys from API & apply to headers for collection
const APP_ID = 'yILkbuUq7khu3xmbEXkAfjowBBpxd5u2dn3GrH1C';
const API_KEY = 'esuCh0HdMzoI68NlnxheS6hVVzTLPAF7aCmwoXXz';

$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': APP_ID,
    'X-Parse-REST-API-Key': API_KEY
  }

});