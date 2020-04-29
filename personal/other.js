$("document").ready(function(){

  var dark = "#19409a";
  var light = "#80e2b0";
  var white = "white" ;
  var bg = "#CF4D6F";

// BODY CSS
  $("body").css("background-color",light);

// NAVBAR CSS
  $(".nav-container").css("background-color",dark);

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

//   TAB
  $(".nav-tabs").css("background-color",dark);
  $(".nav-link").css("color",white);
  $(".tab-content").css("background-color",white);
// CARD
  $(".card-header").css("color","black");
  $(".card-body").css("background-color",dark);
  $(".card-body").css("color",white);

});

$( window ).resize(function() {
  var screen_width = $(window).width();

  var small = 540 ;
  var medium = 720 ;
  var large = 960 ;
  var extra_large = 1140;

  var show_text = "";

  if(screen_width > small || screen_width<small){
    show_text = "small";
  }
  if(screen_width > medium){
    show_text = "medium";
  }
  if(screen_width > large){
    show_text = "large";
  }

  if(screen_width > extra_large){
    show_text = "extra_large";
  }

  $(".page-topic h2").html(show_text);
  $( ".page-topic h3" ).html(screen_width);
});
