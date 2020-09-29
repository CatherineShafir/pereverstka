$(".burger").on("click", function() {
    $(this).toggleClass("active");
    $(".menu").toggleClass("open");
    $('.tag').toggleClass("no");
  })
