$(document).ready(function () {

    $(document).on('click', ' a[href*="#"]', function (e) {
        e.preventDefault();
    });


    /* ---------------------------------------------------
    **    header menu
    ** ------------------------------------------------- */
    $(document).on('click', 'header .menu a[href*="#"]', function () {

        // active
        $('header .menu a').removeClass('active');
        $(this).addClass('active');

        // On-page links
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 500, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    }
                });
            }
        }
    });
    var menu_1 = $('.menu');
    var menu = $('.menu ul');
    $('#nav-icon1').click(function(){
        $(this).toggleClass('open');
        menu.toggleClass('open');
        menu_1.toggleClass('open');
    });

    /* ---------------------------------------------------
     **    section-1 slider
     ** ------------------------------------------------- */

    $('#home').vegas({
        delay: 7000,
        timer: false,
        shuffle: true,
        // firstTransition: 'fade',
        transition: 'fade',
       // firstTransitionDuration: 5000,
        transitionDuration: 2000,
        slides: [
            // picture resources for slider
            {src: 'images/portfolio/slider_images/0.jpg'},
            {src: 'images/portfolio/slider_images/1.jpg'},
            {src: 'images/portfolio/slider_images/2.jpg'},
            {src: 'images/portfolio/slider_images/3.jpg'}
        ]
    });

    // prev /next http://vegas.jaysalvat.com/documentation/methods/
    $('.prev').on('click', function () {
        $('#home').vegas().vegas('previous');
    });

    $('.next').on('click', function () {
        $('#home').vegas().vegas('next');
    });


    /* ---------------------------------------------------
    **  section-3 section-gallery filter https://bootsnipp.com/snippets/featured/portfolio-gallery-with-filtering-category
    ** ------------------------------------------------- */
    $(document).on('click', '.gallery-menu a', function (e) {
        var value = $(this).attr('data-filter');

        $('.gallery-menu a').removeClass('active');
        $(this).addClass('active');


        if (value == "all") {
            $('.filter').show('1000');
        } else {
            $(".filter").not('.' + value).hide('300');
            $('.filter').filter('.' + value).show('300');
        }
    });

    // http://sachinchoolur.github.io/lightGallery/
    $(document).ready(function () {
        $("#gallery-container").lightGallery({
            selector: 'a',
            thumbnail: false
        });
    });


    console.log('all is working and document is ready');
}); // document ready