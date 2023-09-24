
function showCustomTooltip() {
    var tooltip = document.getElementById('custom-tooltip');
    tooltip.style.visibility = 'visible';
}

// Función para ocultar el mensaje emergente personalizado
function hideCustomTooltip() {
    var tooltip = document.getElementById('custom-tooltip');
    tooltip.style.visibility = 'hidden';
}



let menuVisible = false;
//función de ocultar menu
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
window.addEventListener('scroll', () => {
    // Verifica la posición actual del usuario en la página
    if (window.scrollY > 500) { // Cambia 100 por la posición deseada
        // Muestra los botones
        botonesNavegacion.style.display = 'block';
    } else {
        // Oculta los botones
        botonesNavegacion.style.display = 'none';
    }
});







