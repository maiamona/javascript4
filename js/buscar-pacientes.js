// var botaoAdicionar = document.querySelector("#buscar-pacientes");

// botaoAdicionar.addEventListener("click", function() {
//     var xhr = new XMLHttpRequest();

//     xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

//     xhr.addEventListener("load", function() {
//         var erroAjax = document.querySelector("#erro-ajax");

//         if (xhr.status == 200) {
//             erroAjax.classList.add("invisivel");
//             var resposta = xhr.responseText;
//             var pacientes = JSON.parse(resposta);

//             pacientes.forEach(function(paciente) {
//                 adicionaPacienteNaTabela(paciente);
//             });
//         } else {
//             erroAjax.classList.remove("invisivel");
//         }
//     });

//     xhr.send();
// });
// console.log(document);

var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function () {
   console.log("Buscando pacientes"); 

   var xhr = new XMLHttpRequest();//responsavel por fazer requisisões HTTP e XML

   xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
  
   xhr.addEventListener("load", function () {
    // console.log(xhr.responseText);
    var erroAjax = document.querySelector("#erro-ajax");

if (xhr.status == 200) {//se esta tudo bem
    erroAjax.classList.add("invisivel");
    var resposta = xhr.responseText;
    // console.log(typeof resposta);
    // console.log(resposta);

    var pacientes = JSON.parse(resposta);//transforma a string em object (traduz do JSON para linguagem javascript que mais utilizamos)
    // console.log(typeof pacientes);
    // console.log(pacientes);
    pacientes.forEach( function (paciente) {
        adicionarPacienteNaTabela(paciente);
    });  
} else{
    console.log(xhr.status);
    console.log(xhr.responseText);
    // var erroAjax = document.querySelector("#erro-ajax");
    erroAjax.classList.remove("invisivel");
}

   
   });
  
   xhr.send()
});