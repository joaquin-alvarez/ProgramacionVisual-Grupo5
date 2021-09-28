//Tomar elementos HTML
let imgCentral = document.querySelector(".imgCentral");
let thumbnail = document.querySelectorAll(".lista img");
let flechas = document.querySelectorAll(".flecha");
let flechaDerecha = document.querySelector(".flechaDerecha");
let flechaIzquierda = document.querySelector(".flechaIzquierda");

//Función que maneja el cambio de imganes
cambiarImagen = (e) => imgCentral.src = e.target.src;

//Función que maneja el recorrido de la galeria mediante las flechas
recorrerGaleria = (e) => {
    if(e.target.classList.contains('flechaIzquierda')){
        
        let src = imgCentral.src; 
        let numImgActual = src.length - 5;                
        numImgActual = Number(src[numImgActual]);
        let numImgNueva = numImgActual - 1; 

        if (numImgNueva == 0) {
            numImgNueva = 7;
        }

        imgCentral.src = `static/images/galeria-${numImgNueva}.jpg`;

    }else{

        let src = imgCentral.src; 
        let numImgActual = src.length - 5;                
        numImgActual = Number(src[numImgActual]);
        let numImgNueva = numImgActual + 1; 

        if (numImgNueva == 8) {
            numImgNueva = 1;
        }

        imgCentral.src = `static/images/galeria-${numImgNueva}.jpg`;
    }
}

//Ejecutar el cambio de imagen escuchando el evento click de cada thumbnail
thumbnail.forEach(img => img.addEventListener('click', cambiarImagen));

//Ejecutar el cambio de imagen escuchando el click de las flechas
flechas.forEach(flecha => flecha.addEventListener('click', recorrerGaleria));