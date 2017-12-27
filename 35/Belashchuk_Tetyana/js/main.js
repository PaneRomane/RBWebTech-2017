 // js/main.js

$(document).ready(function() {
  // Select all links with hashes
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
   
}); // document ready
const panels = document.querySelectorAll('.panel');

  function toggleOpen(e) {
    this.classList.toggle('open');
  }

  function toggleActive(e) {
    if (e.propertyName.includes('flex'))
      this.classList.toggle('open-active');
  }

  panels.forEach(panel => panel.addEventListener('click', toggleOpen));
  panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
$(".twitter").hover(function () {
	$("#social-section").toggleClass("color-twitter")
});

$(".facebook").hover(function () {
	$("#social-section").toggleClass("color-facebook")
});

$(".googleplus").hover(function () {
	$("#social-section").toggleClass("color-googleplus")
});

$(".pinterest").hover(function () {
	$("#social-section").toggleClass("color-pinterest")
});

$(".dribbble").hover(function () {
	$("#social-section").toggleClass("color-dribbble")
});

$(".instagram").hover(function () {
	$("#social-section").toggleClass("color-instagram")
});


// Create a lightbox
(function() {
  var $lightbox = $("<div class='lightbox'></div>");
  var $img = $("<img>");
  var $caption = $("<p class='caption'></p>");

  // Add image and caption to lightbox

  $lightbox
    .append($img)
    .append($caption);

  // Add lighbox to document

  $('body').append($lightbox);

  $('.lightbox-gallery img').click(function(e) {
    e.preventDefault();

    // Get image link and description
    var src = $(this).attr("src");
    var cap = $(this).attr("alt");

    // Add data to lighbox

    $img.attr('src', src);
    $caption.text(cap);

    // Show lightbox

    $lightbox.fadeIn('fast');

    $lightbox.click(function() {
      $lightbox.fadeOut('fast');
    });
  });

}());