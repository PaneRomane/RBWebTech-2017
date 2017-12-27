(function() {
  var button, contentCtr;

  button = document.querySelector(".cta");

  contentCtr = document.querySelector(".content-ctr");

  button.addEventListener("click", function() {
    var header;
    header = this.parentElement.parentElement;
    header.classList.toggle("active");
    return contentCtr.classList.toggle("active");
  });

  balapaCop("Material Scroll Animation", "#999");

}).call(this);
