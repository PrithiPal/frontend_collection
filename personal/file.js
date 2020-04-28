function LightenDarkenColor(col, amt) {
// credits : https://css-tricks.com/snippets/javascript/lighten-darken-color/

    var usePound = false;
    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }
    var num = parseInt(col,16);
    var r = (num >> 16) + amt;
    if (r > 255) r = 255;
    else if  (r < 0) r = 0;
    var b = ((num >> 8) & 0x00FF) + amt;
    if (b > 255) b = 255;
    else if  (b < 0) b = 0;
    var g = (num & 0x0000FF) + amt;
    if (g > 255) g = 255;
    else if (g < 0) g = 0;
    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);

}

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
  var bg = "#CF4D6F";

  $("body").css("background-color",bg);

  $(".leftside").css("background-color",dark);

  /* Page link */
  $(".page-links a").css("color",light);

  $(".page-links a").mouseup(function(){
    $(this).css("color",light);
  });

  $(".page-links a").mousedown(function(){
    $(this).css("color","white");
  });


  /* Social */
  $(".social a").css("color",light);


  $(".social a").hover(function(){
    $(this).css("color",white);
    $(this).css("border-bottom","1px solid ".concat(white));
  },function(){
    $(this).css("color",light);
    $(this).css("border-bottom","");
  }
  );


  $(".rightside").css("background-color",light);
  $(".rightside-wrapper").css("color",dark);

  $(".footer").css("background-color",dark);
  $(".footer").css("color",white);



});
