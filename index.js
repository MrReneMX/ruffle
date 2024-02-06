function cambiarImagen() {
    var gato = document.getElementById('gato');
    var imagenActual = gato.src;

    // Verifica la imagen actual y cambia a la siguiente
    if (imagenActual.endsWith('1.gif')) {
        gato.src = 'gato_bailarin_2.gif'; // Cambia a la segunda imagen
    } else {
        gato.src = 'gato_bailarin_1.gif'; // Cambia a la primera imagen
    }
}
