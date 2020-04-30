$("document").ready(function(){

  var dark = "#19409a";
  var light = "#80e2b0";
  var white = "white" ;
  var bg = "#CF4D6F";

// BODY CSS
  $("body").css("background-color",light);
// MAIN WRAPPER CSS
  $(".main-wrapper").css("background-color",bg);

// NAVBAR CSS
  $(".nav-container").css("background-color",dark);

  $(".link a").css("color",light);
  $(".link a").css("text-decoration","none");

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

// PAGE TITLE
  $(".page-topic").css("background-color",dark);
  $(".page-topic").css("color",white);

//   TAB
   $(".nav-pills").css("background-color",dark);

   $(".nav-link").css("color",white);
   $(".nav-link").hover(function(){
     $(this).css("color",white);
   },function(){
     $(this).css("color",white);
   }
     );

// TAB NAVS

    var navlink_active_color = white;
    var navlink_active_border = "1px solid "+white ;
    var navlink_active_bg = dark;

    var navlink_notactive_color = dark;
    var navlink_notactive_border = "";
    var navlink_notactive_bg = dark;

    $(".nav-link.active").css("background-color",navlink_active_bg);
    $(".nav-link.active").css("border",navlink_active_border);

    $('.nav-link').click(function(){
      // not active CSS
      $('.nav-link').removeClass('active');

      $('.tab-content .tab-pane').removeClass('active');
      $('.nav-link').css("background-color",navlink_notactive_bg);
      $('.nav-link').css("border",navlink_notactive_border);

      // active link CSS
      $(this).addClass('active');
      $(this).css("background-color",navlink_active_bg);
      $(this).css("border",navlink_active_border);

      var link_id=$(this).attr("href");
      var l = link_id.substring(1,link_id.length);

      // for debugging
      // $("h1").html(l);
      // $('.tab-content #' + l ).css("background-color","red");

      $('.tab-content #' + l ).addClass('fade show active');

    });

  $(".tab-content").css("background-color","black");
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
