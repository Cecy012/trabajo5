var imagenes = [];
var contador = 0;

var imagenElement = document.getElementById("imagen");
var agregarBtn = document.getElementById("agregar-btn");

agregarBtn.addEventListener("click", agregarImagen);

function agregarImagen() {
  if (contador < 5) {

    var urlImagen = obtenerURLImagen();

    
    imagenes.push(urlImagen);//agrega como git bash
    imagenElement.src = urlImagen; //actualizar
    contador++;

    console.log("Imagen agregada al arreglo:", imagenes);
  } else {
    console.log("Ya se han agregado las 5 imágenes.");
  }
}

function obtenerURLImagen() {
  var imagenesPredefinidas = [
    
    "../trabajo6/albumes.png",
    "../trabajo6/concierto.jpg",
    "../trabajo6/poster.jpg",
    "../trabajo6/vinilo.jpg",
    "../trabajo6/viniloxd.jpg"
  ];

  return imagenesPredefinidas[contador];
}