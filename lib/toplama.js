var
  uuid            = require('node-uuid')
  ,crypto         = require('crypto')
  ,querystring    = require('querystring')
  ,http           = require('http');


exports.toplama=toplama={
  randompassword : ''
  ,dortislem :  function(a,b) {
    var sonuc=a+b;
    return sonuc;

  }
  
}

exports.createObject=function(){
  var obj = Object.create(toplama);
  return obj;
}