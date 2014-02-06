var
  uuid            = require('node-uuid')
  ,crypto         = require('crypto')
  ,querystring    = require('querystring')
  ,http           = require('http');


exports.toplama=toplama={
  randompassword : ''
  ,
  ,dortislem :  function(a,b) {
    console.log(a);
    console.log(b);
  }
  
}

exports.createObject=function(){
  var obj = Object.create(toplama);
  return obj;
}