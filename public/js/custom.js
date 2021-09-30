// test

$(document).ready(function () {
  if (".authors-slider".length != 0) {
    $(".authors-slider").addClass("owl-carousel owl-theme");
    $(".authors-slider").owlCarousel({
      loop: false,
      nav: true,
      navText: [
        '<i class="fas fa-angle-left"></i>',
        '<i class="fas fa-angle-right"></i>',
      ],
      dots: false,
      margin: 0,
      autoplay: false,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      mouseDrag: true,
      margin: 20,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        576: {
          items: 1,
        },
        768: {
          items: 1,
        },
        1200: {
          items: 1,
        },
      },
    });
  }

  if ($(window).width() < 991) {
    if (".clients-reviews-slider".length != 0) {
      $(".clients-reviews-slider").addClass("owl-carousel owl-theme");
      $(".clients-reviews-slider").owlCarousel({
        loop: false,
        nav: false,
        navText: [
          '<i class="fas fa-angle-left"></i>',
          '<i class="fas fa-angle-right"></i>',
        ],
        dots: true,
        margin: 25,
        autoplay: false,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1,
          },

          575: {
            items: 1,
          },
          768: {
            items: 2,
          },
        },
      });
    }
  }

  if ($(window).width() < 991) {
    if (".our-wrt-serv-col".length != 0) {
      $(".our-wrt-serv-col").addClass("owl-carousel owl-theme");
      $(".our-wrt-serv-col").owlCarousel({
        loop: false,
        nav: false,
        margin: 0,
        dots: true,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        mouseDrag: true,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
          },
          576: {
            items: 2,
          },
          768: {
            items: 2,
          },
        },
      });
    }
  }

  if ($(window).width() < 991) {
    if (".compr-serv-boxes-slider".length != 0) {
      $(".compr-serv-boxes-slider").addClass("owl-carousel owl-theme");
      $(".compr-serv-boxes-slider").owlCarousel({
        loop: false,
        nav: false,
        margin: 5,
        dots: true,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        mouseDrag: true,
        autoHeight: true,
        responsiveClass: true,
        responsive: {
          0: {
            items: 2,
          },
          576: {
            items: 2,
          },
          768: {
            items: 2,
          },
        },
      });
    }
  }

  if ($(window).width() < 991) {
    if ($(window).width() < 991) {
      if (".authors-sec-slider".length != 0) {
        $(".authors-sec-slider").addClass("owl-carousel owl-theme");
        $(".authors-sec-slider").owlCarousel({
          loop: false,
          nav: false,
          margin: 00,
          dots: true,
          autoplay: false,
          autoplayTimeout: 4000,
          autoplayHoverPause: true,
          mouseDrag: true,
          responsiveClass: true,
          responsive: {
            0: {
              items: 1,
            },
            768: {
              items: 2,
            },
          },
        });
      }
    }
  }

  if (".procedure-slider".length != 0) {
    $(".procedure-slider").addClass("owl-carousel owl-theme");
    $(".procedure-slider").owlCarousel({
      loop: false,
      nav: false,
      margin: 00,
      dots: true,
      autoplay: false,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      mouseDrag: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 1,
        },
      },
    });
  }
  // sticky header
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 105) {
      $("header").addClass("sticky-header");
    } else {
      $("header").removeClass("sticky-header");
    }
  });

  AOS.init({
    once: true,
    duration: 700,
    easing: "ease",
  });
  (function ($) {
    "use strict";
    $(".count-num").rCounter({
      duration: 30,
    });
  })(jQuery);

  $(".purchase_btn").on("click", function () {
    $(".thanks_pop_up").fadeIn(500).css("display", "flex");
  });

  $(".cross_icon").on("click", function () {
    $(".thanks_pop_up").fadeIn(500).css("display", "none");
  });

  var showChar = 130;
  var ellipsestext = "...";
  var moretext = "see more";
  var lesstext = "see less";
  $(".qoute_para").each(function () {
    var content = $(this).html();

    if (content.length > showChar) {
      var c = content.substr(0, showChar);
      var h = content.substr(showChar - 1, content.length - showChar);

      var html =
        c +
        '<span class="moreellipses">' +
        ellipsestext +
        '&nbsp;</span><div class="morecontent"><span>' +
        h +
        `</span><button class="morelink">` +
        moretext +
        "</button></div>";

      $(this).html(html);
    }
  });
  $(".morelink").click(function () {
    if ($(this).hasClass("less")) {
      $(this).removeClass("less");
      $(this).html(moretext);
    } else {
      $(this).addClass("less");
      $(this).html(lesstext);
    }
    $(this).parent().prev().toggle();
    $(this).prev().toggle();
    return false;
  });

  /* popup js */

  $("#entry-box_close").click(function () {
    $("#entry-popup").fadeOut();
  }),
    $(".open-popup").click(function () {
      $("#input-box").html(""),
        null != $(this).data("price") &&
          ($("#input-box").append(
            '<input type="hidden" name="customers_meta[price]" value="' +
              $(this).data("price") +
              '">'
          ),
          $("#input-box").append(
            '<input type="hidden" name="customers_meta[name]" value="' +
              $(this).data("name") +
              '">'
          )),
        $("#entry-popup").css("display", "flex").fadeIn();
    });

  $("#entry-box_close").click(function () {
    $("#entry-popup").fadeOut();
  }),
    window.location.hash ||
      setTimeout(function () {
        $("#entry-popup").css("display", "flex").fadeIn();
      }, 150000);

  /* popup js */

  // header hover dropdown
  if ($(window).width() > 991) {
    $("li.dropdown").hover(
      function () {
        $(this).find(".dropdown-menu").stop(true, true).delay(200).fadeIn(500);
      },
      function () {
        $(this).find(".dropdown-menu").stop(true, true).delay(200).fadeOut(500);
      }
    );
  }

  $(".cust-navbar .navbar-toggler").click(function () {
    $("body").toggleClass("removeScroll");
  });
}); // Document Ready Fun CLOSE sHERE

$(document).ready(function () {
  $(".angle_down").click(function () {
    $(this).parent().parent().toggleClass("showform");
    $("#change_ic").toggleClass("fa-angle-double-down fa-angle-double-up");
    $(".banner_img").fadeToggle();
  });
});

$(document).ready(function () {
  if ($(window).width() > 767) {
    $(".angle_down").parent().parent().toggleClass("showform");
    $("#change_ic").toggleClass("fa-angle-double-down fa-angle-double-up");
    $(".banner_img").fadeToggle();
  }
});

$(".flip-2").on("done", function () {});
$(".flip-2").on("beforeFlipping", function (e, data) {});
$(".flip-2").on("afterFlipping", function (e, data) {});
