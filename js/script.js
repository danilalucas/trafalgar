$('nav a').click(function(e){ 
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;
    $('html, body').animate({
        scrollTop: targetOffset
    }, 500)
});

$('.depoiment_slider').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

var form = document.getElementById("form");

form.addEventListener("submit", function(e){
    e.preventDefault();
    var send_success = document.getElementById("send_success");
    send_success.classList.replace("none", "block");
});
      