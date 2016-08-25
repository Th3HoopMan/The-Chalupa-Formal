var break_small = 320;
var break_medium = 768;
var break_large = 992;
var break_xlarge= 1200;
$(document).ready(function(){
  $("#preOverlay").hide()
  $("#postOverlay").hide();
  $("#duringOverlay").hide();
  // $("#preBlock").hide();
  // $("#duringBlock").hide();
  // $("#postBlock").hide();
  if ($(document).width >= break_large) {
  $("#formalDeets").hide();
  }
  $("#pre").click(function(){
    $('#preModal').modal('toggle');
  });
  $("#during").click(function(){
    $('#duringModal').modal('toggle');
  });
  $("#post").click(function(){
    $('#postModal').modal('toggle');
  });
  //Shows semiphases when hovered over
  $("#pre").hover(function(){
    $("#preOverlay").fadeIn()},
    function(){$("#preOverlay").fadeOut()});

    $("#during").hover(function(){
      $("#duringOverlay").fadeIn()},
      function(){$("#duringOverlay").fadeOut()});

    $("#post").hover(function(){
      $("#postOverlay").fadeIn()},
      function(){$("#postOverlay").fadeOut()});


  //
  //     //Reveal semi-formal details
  //     var toggleId;
  //     $("#pre").click(function(){
  //       $("#preOverlay").fadeOut()},
  //       function(){$("#pre").delay(500).slideToggle("slow")
  //       $("#during").delay(500).slideToggle("slow")
  //       $("#post").delay(500).slideToggle("slow")
  //       $("#preBlock").delay(1000).slideToggle("slow")
  //       toggleId = "#preBlock";
  //     });
  //
  //
  //     $("#during").click(function(){
  //       $("#preOverlay").fadeOut()},
  //       function(){$("#pre").delay(500).slideToggle("slow")
  //       $("#during").delay(500).slideToggle("slow")
  //       $("#post").delay(500).slideToggle("slow")
  //       $("#duringBlock").delay(1000).slideToggle("slow")
  //       toggleId = "#duringBlock";
  //     });
  //
  //     $("#post").click(function(){
  //       $("#preOverlay").fadeOut()},
  //       function(){$("#pre").delay(500).slideToggle("slow")
  //       $("#during").delay(500).slideToggle("slow")
  //       $("#post").delay(500).slideToggle("slow")
  //       $("#postBlock").delay(1000).slideToggle("slow")
  //       toggleId = "#postBlock";
  //     });
  //
  //     //Hide semi details
  //     $(".backButton").click(function(){
  //         $(toggleId).delay(500).slideToggle("slow")
  //         $("#pre").delay(1000).slideToggle("slow")
  //         $("#during").delay(1000).slideToggle("slow")
  //         $("#post").delay(1000).slideToggle("slow")
  //     });
  //
      //FormalOverlay
      $("#formalBlock").hover(function(){
        $("#formalDeets").delay(300).fadeIn()
        $(".blackFadeLess").css("background-color", "rgba(0, 0, 0, 0.6)")
        },
        function(){$("#formalDeets").delay(300).fadeOut();
        $(".blackFadeLess").css("background-color", "rgba(0, 0, 0, 0.01)");
        }
      );
  //
  //     //Highlight text
  //     $(".backButton").hover(function(){$(this).addClass("hover")},
  //             function(){$(this).removeClass("hover")});


     $(".question").click(function(){
          $(this).siblings().toggle();
     });
});
