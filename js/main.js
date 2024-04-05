(function ($) {
    "use strict";

    // ------- Prealoder ------
    $(window).on('load', function () {
        $("#preloader").delay(300).fadeOut("slow");
    });


    // Handle Menu on Sreen scrolling
    function MenuOnScrol() {
        const elementToModify = document.querySelector(".site_header");
        let lastScrollTop = 0;
        window.addEventListener("scroll", () => {
            const scrollTop = window.scrollY || window.pageYOffset;
            if (scrollTop > lastScrollTop && lastScrollTop > 200) {
                elementToModify.classList.add("sticky");
            } else if (lastScrollTop < 210) {
                elementToModify.classList.remove("menu_up");
                elementToModify.classList.remove("sticky");
            } else {
                elementToModify.classList.remove("menu_up");
            }
            if (scrollTop > lastScrollTop) {
                elementToModify.classList.add("menu_up");
            }
            lastScrollTop = scrollTop;
        });
    }


    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').addClass("topbtn_hide");
        } else {
            $('.back-to-top').removeClass("topbtn_hide");
        }
    });
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);


        // Menu Hide
        MenuOnScrol()
    });


    $(document).ready(function () {

        // header scroling
        MenuOnScrol()


        // Toggle Menu
        $('.hamburger').click(function (e) {
            $('.site_header').toggleClass("active_mobile");
        });

        // Increase Decrease
        $(document).ready(function () {
            $(".increase").click(function () {
                var $outputElement = $(this).siblings(".incre_decre_output");
                var currentValue = parseInt($outputElement.text());
                $outputElement.text(currentValue + 1);
            });

            $(".decrease").click(function () {
                var $outputElement = $(this).siblings(".incre_decre_output");
                var currentValue = parseInt($outputElement.text());
                if (currentValue > 0) {
                    $outputElement.text(currentValue - 1);
                }
            });
        });




    });

})(jQuery);