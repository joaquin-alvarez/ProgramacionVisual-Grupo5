//Elementos HTML
var span = document.querySelectorAll(".num");
console.log(span);

//Fecha de estreno
var fechaEstreno = new Date('12/15/2021 8:00 PM');
console.log(fechaEstreno);

//Manejo de dias, horas, minutos y segundos
var segundos = 1000;
var minutos = segundos * 60;
var horas = minutos * 60;
var dias = horas * 24;

function cuentaRegresiva(){
    //Calculos
    var dyhActual = new Date();
    var duracion = fechaEstreno - dyhActual;
    var diasRestantes = Math.floor(duracion / dias);
    var horasRestantes = Math.floor((duracion % dias) / horas);
    var minRestantes = Math.floor((duracion % horas) / minutos);
    var segRestantes = Math.floor((duracion % minutos) / segundos);

    //Imprimir en HTML
    span[0].innerHTML = diasRestantes;
    span[1].innerHTML = horasRestantes;
    span[2].innerHTML = minRestantes;
    span[3].innerHTML =segRestantes;
    /* console.log('Faltan: ' + diasRestantes + 'días ' + horasRestantes + 'hs ' + minRestantes + 'min ' + segRestantes + 'seg'); */
}

//Iniciar contador
cuentaRegresiva();

//Actualizar cada segundo
setInterval(cuentaRegresiva, segundos); 