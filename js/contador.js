//Elementos HTML
let span = document.querySelectorAll(".num");

//Fecha de estreno
let fechaEstreno = new Date('12/15/2021 8:00 PM');

//Manejo de dias, horas, minutos y segundos
let segundos = 1000;
let minutos = segundos * 60;
let horas = minutos * 60;
let dias = horas * 24;

function cuentaRegresiva(){
    //Calculos
    let dyhActual = new Date();
    let duracion = fechaEstreno - dyhActual;
    let diasRestantes = Math.floor(duracion / dias);
    let horasRestantes = Math.floor((duracion % dias) / horas);
    let minRestantes = Math.floor((duracion % horas) / minutos);
    let segRestantes = Math.floor((duracion % minutos) / segundos);

    //Imprimir en HTML
    span[0].innerHTML = diasRestantes;
    span[1].innerHTML = horasRestantes;
    span[2].innerHTML = minRestantes;
    span[3].innerHTML = segRestantes;
}

//Iniciar contador
cuentaRegresiva();

//Actualizar cada segundo
setInterval(cuentaRegresiva, segundos); 