let menuVisible = false;
function mostrarOcultarMenu() {
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}

const botonesNavegacion = document.querySelector('.botones-navegacion');

// Función que se ejecuta cuando el usuario desplaza la página
window.addEventListener('', () => {
    // Verifica la posición actual del usuario en la página
    if (window.scrollY > 500) { // Cambia 100 por la posición deseada
        // Muestra los botones
        botonesNavegacion.style.display = 'block';
    } else {
        // Oculta los botones
        botonesNavegacion.style.display = 'none';
    }
});
 // Función para mostrar un mensaje emergente personalizado
 function showCustomTooltip() {
      var tooltip = document.getElementById('custom-tooltip');
      tooltip.style.visibility = 'visible';
  }

  // Función para ocultar el mensaje emergente personalizado
  function hideCustomTooltip() {
      var tooltip = document.getElementById('custom-tooltip');
      tooltip.style.visibility = 'hidden';
  }



  const cards = document.querySelectorAll(".cardport");
const imagenesPorCard = [
    // Define las imágenes y sus tamaños para cada card aquí
    [
    { src: "../img/malaga.jpg", width: "450px", height: "520px" }
    
     
    ],
    [
   
        { src: "../img/jaen0.jpg", width: "450px", height: "520px" }
        
],
    
    [
        { src: "../img/madrid3.jpg", width: "450px", height: "520px" }
        
       
    ],
    [
   
        { src: "../img/madrid1.jpg", width: "450px", height: "520px" }
       
    ],
   
    [
       
        {  src: "../img/malaga1.jpg", width: "450px", height: "520px" }
        
       
    ],
    [
   
        {  src: "../img/malaga2.jpg", width: "450px", height: "520px" }
        
],
    
    [
   
        {  src: "../img/jaen1.jpg", width: "450px", height: "520px" }
        
],
 
[
   
   {  src: "../img/madrid3.jpg", width: "450px", height: "520px" }
   
],
 
[
   
   {  src: "../img/Madrid4.jpg", width: "450px", height: "520px" }
   
],
 
[
   
   {  src: "../img/madrid1.jpg", width: "450px", height: "520px" }
   
]
 

    
];
let imagenActualPorCard = new Array(cards.length).fill(0);

cards.forEach((card, index) => {
    const img = card.querySelector("img");

    function actualizarImagen() {
        const windowWidth = window.innerWidth;
        const imagenes = imagenesPorCard[index];

        const imagenActual = imagenActualPorCard[index];
        img.style.width = windowWidth <= 600 ? "100%" : imagenes[imagenActual].width;
        img.style.height = windowWidth <= 600 ? "auto" : imagenes[imagenActual].height;
        img.src = imagenes[imagenActual].src;
    }

    card.addEventListener("click", () => {
        imagenActualPorCard[index] = (imagenActualPorCard[index] + 1) % imagenesPorCard[index].length;
        actualizarImagen();
    });

    window.addEventListener("load", actualizarImagen);
    window.addEventListener("resize", actualizarImagen);
});
// Función para mostrar un mensaje emergente personalizado
function showCustomTooltip() {
      var tooltip = document.getElementById('custom-tooltip');
      tooltip.style.visibility = 'visible';
  }

  // Función para ocultar el mensaje emergente personalizado
  function hideCustomTooltip() {
      var tooltip = document.getElementById('custom-tooltip');
      tooltip.style.visibility = 'hidden';
  }
 
  