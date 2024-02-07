$(document).ready(function () {
    var nav = $("nav");

    function addAnimationClass() {
        nav.addClass("animate__animated animate__fadeInDown");
    }

    addAnimationClass();
   
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > nav.offset().top) {
            addAnimationClass();
        }
    });

    $(window).on('scroll', function () {
        if ($(this).scrollTop() === 0) {
            nav.removeClass("animate__animated animate__fadeInDown");
        }
    });

    $(".transparent_1").waypoint(function () {
        $(".transparent_1").addClass("animate__animated animate__fadeInRight");
      }, {offset: "80%"}
      );
    
    $(".transparent_2").waypoint(function () {
        $(".transparent_2").addClass("animate__animated animate__fadeInLeft");
      }, {offset: "80%"}
      );

      $(".transparent_3").waypoint(function () {
        $(".transparent_3").addClass("animate__animated animate__fadeInRight");
      }, {offset: "80%"}
      );

      $(".transparent_4").waypoint(function () {
        $(".transparent_4").addClass("animate__animated animate__fadeInLeft");
      }, {offset: "80%"}
      );

      $(".earth_icon").waypoint(function () {
        $(".earth_icon").addClass("animate__animated animate__zoomIn");
      }, {offset: "80%"})

      $(".ecology_icon").waypoint(function () {
        $(".ecology_icon").addClass("animate__animated animate__zoomIn");
      }, {offset: "80%"})

      $(".background-color_1").waypoint(function () {
        $(".background-color_1").addClass("backgraund__animated");
      }, {offset: "80%"})

      $(".background-color_2").waypoint(function () {
        $(".background-color_2").addClass("backgraund__animated");
      }, {offset: "90%"})

    $(".icon_heart").on("click", function() {
        $(this).find("path").toggleClass("redHeart");
    });

});