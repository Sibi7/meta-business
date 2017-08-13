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
    //scroll link end
});