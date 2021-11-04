var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

// var pacientes = document.querySelectorAll(".paciente");

// for (var i = 0; i < pacientes.length; i++) {

//     var paciente = pacientes[i];

//     var tdPeso = paciente.querySelector(".info-peso");
//     var peso = tdPeso.textContent;

//     var tdAltura = paciente.querySelector(".info-altura");
//     var altura = tdAltura.textContent;

//     var tdImc = paciente.querySelector(".info-imc");

//     var pesoEhValido = validaPeso(peso);
//     var alturaEhValida = validaAltura(altura);

//     if (!pesoEhValido) {
//         console.log("Peso inválido!");
//         pesoEhValido = false;
//         tdImc.textContent = "Peso inválido";
//         paciente.classList.add("paciente-invalido");
//     }

//     if (!alturaEhValida) {
//         console.log("Altura inválida!");
//         alturaEhValida = false;
//         tdImc.textContent = "Altura inválida";
//         paciente.classList.add("paciente-invalido");
//     }

//     if (pesoEhValido && alturaEhValida) {
//         var imc = calculaImc(peso, altura);
//         tdImc.textContent = imc;
//     }
// }

// function calculaImc(peso, altura) {
//     var imc = 0;
//     imc = peso / (altura * altura);

//     return imc.toFixed(2);
// }

// function validaPeso(peso) {

//     if (peso >= 0 && peso <= 1000) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function validaAltura(altura) {

//     if (altura >= 0 && altura <= 3.00) {
//         return true;
//     } else {
//         return false;
//     }
// }

// var paciente = document.querySelector("#primeiro-paciente");
var pacientes = document.querySelectorAll(".paciente");
// console.log(pacientes);


for (let i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

// var pesoEValido = true;
// var alturaEValida = true;
var pesoEValido = validaPeso(peso);//'true' ou 'false'
// var alturaEValida = true;
var alturaEValida = validaAltura(altura);
//    console.log(paciente); 
  
   // console.log(paciente); //tr     
//console.log(tdPeso);//td
//console.log(peso);
//console.log(tdAltura);
//console.log(altura);

// if (peso <= 0 || peso >= 1000) {
if (!pesoEValido) {
    // console.log("Peso invalido");  
    pesoEValido = false;
    tdImc.textContent = "Peso invalido";
    paciente.classList.add("paciente-invalido");
}

// if (altura <= 0 || altura >= 3.00) {
if (!alturaEValida) {
    // console.log("Altura invalida");  
    alturaEValida = false;
    tdImc.textContent = "Altura invalida";
    paciente.classList.add("paciente-invalido");
}

if (pesoEValido && alturaEValida) {
    
    //var IMC = peso / (altura * altura);// 100 / 2.0 * 2.0 = 100 / 4 = 25
    var IMC = calculaImc(peso, altura);
    // var imc = Math.round(IMC);
    // console.log(IMC);
    // tdImc.innerHTML = IMC;
    tdImc.textContent = IMC;
}
}

function validaPeso(peso) {
    if (peso >= 0 && peso < 1000) {
      return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if (altura >= 0 && altura <= 3.0) {
        return true;
    } else {
        return false;
    }
}



// titulo.addEventListener("click", mostraMensagem);
// titulo.addEventListener("click", function () {
//     console.log("eu sou uma função anonima"); 
// });

// function mostraMensagem() {
//     console.log("ola eu fui clicado");
// }

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}





