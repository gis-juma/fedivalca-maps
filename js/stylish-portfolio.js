// Plantilla original de estilo Js de Start-Bootstrap

(function($) {
  "use strict"; 

  // Función para cerrar la barra deslizable de menú
  $(".menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
    $(this).toggleClass("active");
  });

  // Desplazamiento suavizado
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Cierre del menu responsive 
  $('#sidebar-wrapper .js-scroll-trigger').click(function() {
    $("#sidebar-wrapper").removeClass("active");
    $(".menu-toggle").removeClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
  });

  // Desplazamiento al principio
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

})(jQuery); 

// Función que permite desactivar el zoom dentro del Heatmap, hasta que el usuario clicke en el
// Ver http://stackoverflow.com/a/25904582/1607849
var onMapMouseleaveHandler = function(event) {
  var that = $(this);
  that.on('click', onMapClickHandler);
  that.off('mouseleave', onMapMouseleaveHandler);
  that.find('iframe').css("pointer-events", "none");
}
var onMapClickHandler = function(event) {
  var that = $(this);
  // Desactiva los clicks hasta que se encuentre el puntero dentro del mapa, evitando que el scroll del desplazamiento en la web genere se convierta en zoom
  that.off('click', onMapClickHandler);
  that.find('iframe').css("pointer-events", "auto");
  that.on('mouseleave', onMapMouseleaveHandler);
}
//  abilitar el zoom del mapa con el desplazamiento del ratón cuando el usuario hace clic en el mapa
$('.map').on('click', onMapClickHandler);
