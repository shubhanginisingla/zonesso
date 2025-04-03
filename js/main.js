(function ($) {
  "use strict";

  // Preloader (if the #preloader div exists)
  $(window).on("load", function () {
    if ($("#preloader").length) {
      $("#preloader")
        .delay(100)
        .fadeOut("slow", function () {
          $(this).remove();
        });
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Initiate the wowjs animation library
  new WOW().init();

  // Header scroll class
  //   $(window).scroll(function() {
  //     if ($(this).scrollTop() > 100) {
  //       $('#header').addClass('header-scrolled');
  //     } else {
  //       $('#header').removeClass('header-scrolled');
  //     }
  //   });

  //   if ($(window).scrollTop() > 100) {
  //     $('#header').addClass('header-scrolled');
  //   }

  // footer menu dropdown

  $("#footer .top-nav li a").on("click", function () {
    $("#footer .top-nav li a.current").removeClass("current");
    $(this).addClass("current");
  });

  //Toggle Menu
  $(".sign-in > a, .agent-que").click(function () {
    $(".login_nav_drop").toggleClass("d-block");
    $(".logout_menu").click(function () {
      $(".login_nav_drop").removeClass("d-block");
    });
  });

  //show other language
  $(".hide-others").click(function () {
    $(".hide-others").addClass("hide");
    $(".back-to-hide").addClass("show");
    $(".show-others").toggleClass("d-block");
  });

  // $(".back-to-hide.show").click(function(){
  // $('.hide-others').addClass('show');
  // $('.show-others').toggleClass('d-none');

  // });

  //show other language
  $(".agentview").click(function () {
    $(".viewagentdetail").toggleClass("d-block");
    $(".agentview").addClass("d-none");
    // $('.show-others').toggleClass('d-block');
    $(".agent_view.active").removeClass("active");
    $(".agent_view").addClass("active");
  });
  //image slider for agent meeting
  $(".img-slider").owlCarousel({
    loop: false,
    margin: 1,
    nav: true,
    navText: [
      "<div class='nav-btn prev-slide'><img src='img/icons/listing/ic_left.png'></div>",
      "<div class='nav-btn next-slide'><img src='img/icons/listing/ic_right.png'></div>",
    ],
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  /* FOR NAV TOGGLES */
  $(".btn--filters-js").click(function () {
    $(this).toggleClass("is-active");
    $("html").toggleClass("show-filters-js");
  });
  $("body").click(function (e) {
    if ($(e.target).parents(".filter-cell").length == 0) {
      $(".filter-trigger-js").siblings(".filter-target-js").hide();
      $(".filter-trigger-js").removeClass("is-active");
      $("body").removeClass("filter-active");
    }
  });

  $(".categories-block").owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    center: false,
    items: 7,
    stagePadding: 50,
    dots: false,
    navText: [
      "<i class='icon-left'><img src='./img/icon/arrow-left.svg' alt='' width='30px' height='30px' /></i>",
      "<i class='icon-right'><img src='./img/icon/arrow-right.svg' alt='' width='30px' height='30px' /></i>",
    ],
    responsive: {
      0: {
        items: 2,
      },
      420: {
        items: 2,
      },
      767: {
        items: 4,
      },

      991: {
        items: 6,
      },
      1024: {
        items: 7,
      },
    },
  });
  $(".showrooms-block").owlCarousel({
    loop: false,
    margin: 20,
    nav: false,
    center: false,
    items: 5,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      420: {
        items: 2,
      },
      767: {
        items: 2,
      },

      991: {
        items: 4,
      },
      1024: {
        items: 5,
      },
    },
  });
  /*related-categories*/
  $(".related-categories").owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    center: false,
    items: 4,
    stagePadding: 50,
    dots: false,
    navText: [
      "<i class='icon-left'><img src='./img/icon/arrow-left.svg' alt='' width='30px' height='30px' /></i>",
      "<i class='icon-right'><img src='./img/icon/arrow-right.svg' alt='' width='30px' height='30px' /></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      420: {
        items: 1,
      },
      767: {
        items: 2,
      },
      991: {
        items: 3,
      },
      1024: {
        items: 4,
      },
    },
  });

  // toggle eye password
  // const togglePassword = document.querySelector("#togglePassword");
  //         const password = document.querySelector("#password");

  //         togglePassword.addEventListener("click", function () {
  //             // toggle the type attribute
  //             const type = password.getAttribute("type") === "password" ? "text" : "password";
  //             password.setAttribute("type", type);

  //             // toggle the icon
  //             this.classList.toggle("icon-eye");
  //         });

  //         // prevent form submit
  //         const form = document.querySelector("form");
  //         form.addEventListener('submit', function (e) {
  //             e.preventDefault();
  //         });

  // To add keyboard navigation (left/right arrow keys)
  // document.addEventListener("keydown", function (e) {
  //   if (document.getElementById("lightbox").style.display === "flex") {
  //     if (e.key === "ArrowLeft") {
  //       changeImage(-1);
  //     } else if (e.key === "ArrowRight") {
  //       changeImage(1);
  //     }
  //   }
  // });

  /*chat box*/
    $('#action_menu_btn').click(function(){
      $('.action_menu').toggle();
    });
    $('.ic_info').on('click', function(){
      $('.info-detail').removeClass('d-none');
      $('.info-detail').addClass('d-flex');
  });
})(jQuery);
