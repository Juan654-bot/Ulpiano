// Selecciona todos los enlaces con la clase "smooth-scroll"
const smoothScrollLinks = document.querySelectorAll('.smooth-scroll');

// Agrega un evento de clic a cada enlace con la clase "smooth-scroll"
smoothScrollLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace
        const targetId = this.getAttribute('href'); // Obtiene el ID del objetivo del enlace
        const targetElement = document.querySelector(targetId); // Selecciona el elemento objetivo
        const offsetTop = targetElement.offsetTop; // Calcula la distancia desde la parte superior del documento
        // Desplaza suavemente hacia el objetivo
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
});


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("myHeader").classList.add("opaque");
  } else {
    document.getElementById("myHeader").classList.remove("opaque");
  }
}

window.addEventListener('scroll', function() {
    var columnLeft = document.querySelector('.column-left');
    var columnCenter = document.querySelector('.column-center');
    var columnRight = document.querySelector('.column-right');

    var positionLeft = columnLeft.getBoundingClientRect().top;
    var positionCenter = columnCenter.getBoundingClientRect().top;
    var positionRight = columnRight.getBoundingClientRect().top;

    var screenHeight = window.innerHeight;

    if (positionLeft < screenHeight) {
        columnLeft.classList.add('visible');
    } else {
        columnLeft.classList.remove('visible');
    }

    if (positionCenter < screenHeight) {
        columnCenter.classList.add('visible');
    } else {
        columnCenter.classList.remove('visible');
    }

    if (positionRight < screenHeight) {
        columnRight.classList.add('visible');
    } else {
        columnRight.classList.remove('visible');
    }
});