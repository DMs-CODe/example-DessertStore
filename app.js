
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);
});


document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances =  M.Carousel.init(elems, true);
  });



let animado = document.querySelectorAll(".animado");
function mostrarScroll(){
    let scrollTop =document.documentElement.scrollTop;// Cantidad de scroll que se realiza mientras uno baja
    for(var i=0; i<animado.length; i++){
        let alturaAnimado=animado[i].offsetTop;
            if(alturaAnimado - 400 <scrollTop){ //Se le genera una resta para que se aplique la transición
                animado[i].style.opacity=1; //Se agrega el cambio de opacidad 
                animado[i].classList.add("mostrarArriba"); //Se agrega la clase de la animación
            }
     
    }
}

window.addEventListener('scroll',mostrarScroll);  //Se agrega el listener cuando se realice el scroll se genera la función mostrarScroll