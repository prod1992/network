$(document).ready(function() {
    $(function() {
        $(".rslides").responsiveSlides({
            pager: true

        });
    });
    $('.toggle-button .fa').click(function() {
        $('nav').slideToggle();
    });

});


