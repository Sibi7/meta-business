$(document).ready(function () {
    //scroll link
    $(document).on('click', '.header__text__arrow-down a', function (event) {
        event.preventDefault();
        var href = $(this).attr('href');
        var target = $(href);
        var top = target.offset().top;
        $('html,body').animate({scrollTop: top}, 1000);
        return false;
    });
    $(document).on('click', '.footer__menu a', function (event) {
        event.preventDefault();
        var href = $(this).attr('href');
        var target = $(href);
        var top = target.offset().top;
        $('html,body').animate({scrollTop: top}, 1000);
        return false;
    });
    $(document).on('click', '.header__wrapper__navigation a', function (event) {
        event.preventDefault();
        var href = $(this).attr('href');
        var target = $(href);
        var top = target.offset().top;
        $('html,body').animate({scrollTop: top}, 1000);
        return false;
    });
    //scroll link end
    //animate element 'animate css'
    //animate text header
    $('.header__text h1').each(function () {
        $(this).addClass('animated bounceInDown').css('opacity', '1');
    });
    $('.header__text h2').each(function () {
        $(this).addClass('animated bounceInUp').css('opacity', '1');
    });
    /*clouds animation*/
    $(window).scroll(function () {

        $('.quote__wrapper').each(function () {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 400) {
                $(this).css('opacity', '1');
            }
        });
        $('.what-learn').each(function () {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 400) {
                $(this).css('opacity', '1');
            }
        });
        $('.results-people h1').each(function () {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 400) {
                $(this).addClass('animated fadeInLeft').css('opacity', '1');
            }
        });
        $('.results-people h2').each(function () {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 400) {
                $(this).addClass('animated fadeInRight').css('opacity', '1');
            }
        });
        $('.useful h1').each(function () {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 400) {
                $(this).addClass('animated fadeInLeft').css('opacity', '1');
            }
        });
        $('.useful__wrapper__item').each(function () {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 400) {
                $(this).css('opacity', '1');
            }
        });
        $('.results-people__stats-people ').each(function () {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 400) {
                $(this).css('opacity', '1');
            }
        });
        $('.results-people__wrapper ').each(function () {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 400) {
                $(this).css('opacity', '1');
            }
        });
        $('.results-people__stats ').each(function () {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 400) {
                $(this).css('opacity', '1');
            }
        });
        $('.results-people ul').each(function () {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 400) {
                $(this).css('opacity', '1');
            }
        });
        //end img----------------------------

        //dot----------------------------
        $('.better__block--dot').each(function () {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 500) {
                $(this).css('opacity', '1')
                    .addClass('fadeInUpBig')
                    .css('height', '250px');
            }
        });
        //end dot----------------------------

        //text----------------------------
        $('.better__block--text').each(function () {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 400) {
                $(this).css('opacity', '1')
                    .addClass('animated zoomIn')
            }
        });
        //end text----------------------------

        //time-and-money----------------------------
        $('.time-money__left p img').each(function () {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 400) {
                $(this).css('opacity', '1').addClass('animated rotateIn')
            }
        });
        $('.classes h1').each(function () {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 400) {
                $(this).addClass('animated fadeInLeft').css('opacity', '1');
            }
        });
        $('.classes__item').each(function () {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 400) {
                $(this).css('opacity', '1');
            }
        });
        $('.classes-second-day__item').each(function () {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 400) {
                $(this).css('opacity', '1');
            }
        });
        $('.quote-bottom').each(function () {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 400) {
                $(this).css('opacity', '1');
            }
        });
        $('.result ul li').each(function () {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 300) {
                $(this).addClass('animated fadeInLeft').css('opacity', '1');
            }
        });
        //end time-and-money----------------------------

    });
});
//tabs
(function ($) {
    jQuery.fn.lightTabs = function (options) {

        var createTabs = function () {
            tabs = this;
            i = 0;

            showPage = function (i) {
                $(tabs).children("div").children("div").hide();
                $(tabs).children("div").children("div").eq(i).show();
                $(tabs).children("ul").children("li").removeClass("active");
                $(tabs).children("ul").children("li").eq(i).addClass("active");
            };

            showPage(0);

            $(tabs).children("ul").children("li").each(function (index, element) {
                $(element).attr("data-page", i);
                i++;
            });

            $(tabs).children("ul").children("li").click(function () {
                showPage(parseInt($(this).attr("data-page")));
            });
        };
        return this.each(createTabs);
    };
})(jQuery);
$(document).ready(function () {
    $(".tabs").lightTabs();
});
//end tabs