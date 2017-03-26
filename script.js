var c2 = new Audio('assets/c2.mp3');
var d2 = new Audio('assets/d2.mp3');
var e2 = new Audio('assets/e2.mp3');
var f2 = new Audio('assets/f2.mp3');
var g2 = new Audio('assets/g2.mp3');
var a2 = new Audio('assets/a2.mp3');
var b2 = new Audio('assets/b2.mp3');
var c3 = new Audio('assets/c3.mp3');


noteLog = [];



$("#do").click(function() {
  c2.play();
  $("#do").css("background-color", "white");
  setTimeout(function(){
    $("#do").css("background-color", "red");
  }, 500);
  noteLog.push(1);
  console.log(noteLog);
  $("#bx10").append("<b>do </b>");
});





$("#re").click(function() {
  d2.play();
  $("#re").css("background-color", "white");
  setTimeout(function(){
    $("#re").css("background-color", "orange");
  }, 500);
  noteLog.push(2);
  console.log(noteLog);
  $("#bx10").append("<b>re </b>");
});




$("#mi").click(function() {
  e2.play();
  $("#mi").css("background-color", "white");
  setTimeout(function(){
    $("#mi").css("background-color", "yellow");
  }, 500);
  noteLog.push(3);
  console.log(noteLog);
  $("#bx10").append("<b>mi </b>");
});


$("#fa").click(function() {
  f2.play();
  $("#fa").css("background-color", "white");
  setTimeout(function(){
    $("#fa").css("background-color", "green");
  }, 500);
  noteLog.push(4);
  console.log(noteLog);
  $("#bx10").append("<b>fa </b>");
});




$("#sol").click(function() {
  g2.play();
  $("#sol").css("background-color", "white");
  setTimeout(function(){
    $("#sol").css("background-color", "blue");
  }, 500);
  noteLog.push(5);
  console.log(noteLog);
  $("#bx10").append("<b>sol </b>");
});



$("#la").click(function() {
  a2.play();
  $("#la").css("background-color", "white");
  setTimeout(function(){
    $("#la").css("background-color", "purple");
  }, 500);
  noteLog.push(6);
  console.log(noteLog);
  $("#bx10").append("<b>la </b>");
});




$("#ti").click(function() {
  b2.play();
  $("#ti").css("background-color", "white");
  setTimeout(function(){
    $("#ti").css("background-color", "pink");
  }, 500);
  noteLog.push(7);
  console.log(noteLog);
  $("#bx10").append("<b>ti </b>");
});




$("#do2").click(function() {
  c3.play();
  $("#do2").css("background-color", "white");
  setTimeout(function(){
    $("#do2").css("background-color", "red");
  }, 500);
  noteLog.push(8);
  console.log(noteLog);
  $("#bx10").append("<b>do </b>");
});
