var debug=0;

if(debug==1){
  $("document").ready(function(){
    var b = "border";
    $(".page-wrapper").css(b,"1px solid black");
    $(".leftside").css(b,"1px solid red");
    $(".leftside-wrapper").css(b,"1px solid blue");
    $(".page-links").css(b,"1px solid blue");
    $(".page-links a").css(b,"1px solid red");
    $(".social").css(b,"1px solid blue");
    $(".social a").css(b,"1px solid pink");
    $(".rightside").css(b,"1px solid red");
    $(".rightside-wrapper").css(b,"1px solid blue");
    $(".footer").css(b,"1px solid black");

  });
}

$("document").ready(function(){

  var dark = "#19409a";
  var light = "#80e2b0";
  var white = "white" ;
  var bg = "#DCCDC2";

  $("body").css("background-color",bg);

  $(".leftside").css("background-color",dark);
  $(".page-links a:link").css("color",light);
  $(".page-links a:visited").css("color",light);
  $(".page-links a:hover").css("color",light);
  $(".page-links a:active").css("color",light);

  $(".social a").css("color",white);

  $(".rightside").css("background-color",light);
  $(".rightside-wrapper").css("color",dark);

  $(".footer").css("background-color",dark);
  $(".footer").css("color",white);

});
