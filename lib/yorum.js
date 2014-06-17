exports.yorum=yorum={
  randompassword : ''
  ,kaydet :  function(yorum_id ,y orum_yapan_id , yorum_yapan_name , yorum , yorum_turu) {
  	console.log("kaydetmek için hazır hale getiriliyor");
  	var sonuc="erka";
    return sonuc;

  }
  
}


exports.createObject=function(){
  var obj = Object.create(yorum);
  return obj;
}