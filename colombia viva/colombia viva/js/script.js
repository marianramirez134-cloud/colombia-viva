// ==============================
// 1. MENSAJE DE BIENVENIDA
//    segun la hora del dia
// ==============================

function mostrarSaludo() {
    var hora = new Date().getHours();
    var saludo = '';

    if (hora >= 6 && hora < 12) {
        saludo = ' ¡Buenos días! Bienvenido a Colombia Viva';
    } else if (hora >= 12 && hora < 18) {
        saludo = ' ¡Buenas tardes! Bienvenido a Colombia Viva';
    } else {
        saludo = '  ¡Buenas noches! Bienvenido a Colombia Viva';
    }

    var elemento = document.getElementById('saludo');
    if (elemento) {
        elemento.textContent = saludo;
    }
}

mostrarSaludo();


// ==============================
// 2. MENU DESPLEGABLE
//    al pasar el mouse por Festivales
// ==============================

var menuFestivales = document.getElementById('menu-festivales');
var submenu = document.getElementById('submenu-festivales');

if (menuFestivales && submenu) {

    menuFestivales.addEventListener('mouseover', function() {
        submenu.style.display = 'block';
    });

    menuFestivales.addEventListener('mouseout', function() {
        submenu.style.display = 'none';
    });

    submenu.addEventListener('mouseover', function() {
        submenu.style.display = 'block';
    });

    submenu.addEventListener('mouseout', function() {
        submenu.style.display = 'none';
    });
}


// ==============================
// 3. SLIDER DE IMAGENES
//    automatico y manual
// ==============================

var slides = document.querySelectorAll('.slide');
var indiceActual = 0;
var intervalo;

function mostrarSlide(indice) {
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    if (slides[indice]) {
        slides[indice].style.display = 'block';
    }
}

function siguienteSlide() {
    indiceActual++;
    if (indiceActual >= slides.length) {
        indiceActual = 0;
    }
    mostrarSlide(indiceActual);
}

function anteriorSlide() {
    indiceActual--;
    if (indiceActual < 0) {
        indiceActual = slides.length - 1;
    }
    mostrarSlide(indiceActual);
}

if (slides.length > 0) {
    mostrarSlide(0);
    intervalo = setInterval(siguienteSlide, 3000);
}

var btnSiguiente = document.getElementById('btn-siguiente');
var btnAnterior = document.getElementById('btn-anterior');

if (btnSiguiente) {
    btnSiguiente.addEventListener('click', function() {
        clearInterval(intervalo);
        siguienteSlide();
        intervalo = setInterval(siguienteSlide, 3000);
    });
}

if (btnAnterior) {
    btnAnterior.addEventListener('click', function() {
        clearInterval(intervalo);
        anteriorSlide();
        intervalo = setInterval(siguienteSlide, 3000);
    });
}