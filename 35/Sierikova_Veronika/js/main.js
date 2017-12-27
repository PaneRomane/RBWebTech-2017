jQuery(function ($) {
    $(".fancybox").fancybox({
        modal: false,
        helpers: {
            overlay: {
                locked: false
            }
        }
    });
    $(".filter").on("click", function () {
        var $this = $(this);
        // if we click the active tab, do nothing
        if (!$this.hasClass("active")) {
            $(".filter").removeClass("active");
            $this.addClass("active"); // set the active tab
            var $filter = $this.data("rel"); // get the data-rel value from selected tab and set as filter
            $filter == 'all' ? // if we select "view all", return to initial settings and show all
                $(".fancybox").attr("data-fancybox-group", "gallery").not(":visible").fadeIn() : // otherwise
                $(".fancybox").fadeOut(0).filter(function () {
                    return $(this).data("filter") == $filter; // set data-filter value as the data-rel value of selected tab
                }).attr("data-fancybox-group", $filter).fadeIn(1000); // set data-fancybox-group and show filtered elements
        }
    });
});

$(document).ready(function () {
    $('.simple-menu').simpleMenu();
});

$(document).ready(function () {
    // Select all links with hashes
    $('.wrapper').find('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen

                    event.preventDefault();
                    var targeClickt = event.target || event.srcElement;
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });
});
