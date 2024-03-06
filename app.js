var saludo = ('Hola como estas');


function cambiarDeNombre (){
    var nuevoNombre = prompt ('¿Cual es tu nombre?');

    if(nuevoNombre){
        mostrarSaludo(nuevoNombre);
    }
}

function mostrarSaludo(nombre) {
    document.getElementById('saludo').innerText  = "Hola " + nombre + ' bienvenido' ;
}

document.getElementById('Cambiarnombre').addEventListener('click', cambiarDeNombre);
