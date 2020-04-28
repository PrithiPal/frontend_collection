$("document").ready(function(){

  var dark = "#19409a";
  var light = "#80e2b0";
  var white = "white" ;
  var bg = "#CF4D6F";

  $("body").css("background-color",bg);


  /* Page link */
  $(".link a").css("color",light);

  $(".link a").mouseup(function(){
    $(this).css("color",light);
  });

  $(".link a").mousedown(function(){
    $(this).css("color",white);
  });


  /* Social */
  $(".logo a").css("color",light);


  $(".logo a").hover(function(){
    $(this).css("color",white);
    $(this).css("border-bottom","1px solid ".concat(white));
  },function(){
    $(this).css("color",light);
    $(this).css("border-bottom","");
  }
  );

  /* CONTENTS OF PAGE */
  $(".page-topic").css("background-color",light);
  $(".page-topic").css("color",dark);



});
