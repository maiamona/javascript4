// var botaoAdicionar = document.querySelector("#adicionar-paciente");
// botaoAdicionar.addEventListener("click", function(event) {
//     event.preventDefault();

//     var form = document.querySelector("#form-adiciona");

//     var paciente = obtemPacienteDoFormulario(form);

//     var erros = validaPaciente(paciente);

//     if (erros.length > 0) {
//         exibeMensagensDeErro(erros);

//         return;
//     }

//     adicionaPacienteNaTabela(paciente);

//     form.reset();

//     var mensagensErro = document.querySelector("#mensagens-erro");
//     mensagensErro.innerHTML = "";

// });

// function obtemPacienteDoFormulario(form) {

//     var paciente = {
//         nome: form.nome.value,
//         peso: form.peso.value,
//         altura: form.altura.value,
//         gordura: form.gordura.value,
//         imc: calculaImc(form.peso.value, form.altura.value)
//     }

//     return paciente;
// }

// function montaTr(paciente) {
//     var pacienteTr = document.createElement("tr");
//     pacienteTr.classList.add("paciente");

//     pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
//     pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
//     pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
//     pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
//     pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

//     return pacienteTr;
// }

// function montaTd(dado, classe) {
//     var td = document.createElement("td");
//     td.classList.add(classe);
//     td.textContent = dado;

//     return td;
// }

// function validaPaciente(paciente) {

//     var erros = [];

//     if (paciente.nome.length == 0) {
//         erros.push("O nome não pode ser em branco");
//     }

//     if (paciente.gordura.length == 0) {
//         erros.push("A gordura não pode ser em branco");
//     }

//     if (paciente.peso.length == 0) {
//         erros.push("O peso não pode ser em branco");
//     }

//     if (paciente.altura.length == 0) {
//         erros.push("A altura não pode ser em branco");
//     }

//     if (!validaPeso(paciente.peso)) {
//         erros.push("Peso é inválido");
//     }

//     if (!validaAltura(paciente.altura)) {
//         erros.push("Altura é inválida");
//     }

//     return erros;
// }

// function exibeMensagensDeErro(erros) {
//     var ul = document.querySelector("#mensagens-erro");
//     ul.innerHTML = "";

//     erros.forEach(function(erro) {
//         var li = document.createElement("li");
//         li.textContent = erro;
//         ul.appendChild(li);
//     });
// }

// function adicionaPacienteNaTabela(paciente) {
//     var pacienteTr = montaTr(paciente);
//     var tabela = document.querySelector("#tabela-pacientes");
//     tabela.appendChild(pacienteTr);
// }


var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault(); //previne o comportamento padrão
    var form = document.querySelector("#form-adiciona");
    // console.log(form.altura.value);
    // console.log(form.peso.value);
  var paciente = obtemPacienteDoFormulario(form);
    // console.log(paciente.nome);
    // console.log(paciente.peso);
    // console.log(paciente.altura);
    // console.log(paciente.gordura);
    // console.log(paciente.imc);



    // console.log(peso);
    // console.log(altura);
    // console.log(gordura);
    // var pacienteTr = document.createElement("tr");
    // pacienteTr.classList.add("paciente");

// console.log(pacienteTr);

// var pacienteTr = montaTr(paciente);
var erros = validaPaciente(paciente);
// console.log(erros);  

// if (!validaPaciente(paciente)) {
if (erros.length > 0) {
    // console.log("Paciente invalido");
    // var mensagemErro = document.querySelector("#mensagem-erro");
    exibeMensagensDeErro(erros);
    // mensagemErro.textContent = erros;

    return;
}

adicionarPacienteNaTabela(paciente);

// var table = document.querySelector('#tabela-pacientes');

// table.appendChild(pacienteTr);
// pacienteTr = table.lastChild;
form.reset();//apaga todos os campos preenchidos do formulario

var ul = document.querySelector("#mensagem-erro");
ul.innerHTML ="";//limpa a 'ul'
});
// console.log(botaoAdicionar);

function adicionarPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    var table = document.querySelector('#tabela-pacientes');
    table.appendChild(pacienteTr);
}

function exibeMensagensDeErro(erros) {//´for' e 'forEach'
    var ul = document.querySelector("#mensagem-erro");

    ul.innerHTML ="";
    // for (let i = 0; i < array.length; i++) {
    //     var erros = array[i]; 
    // }
erros.forEach(function (erro) {
    var li = document.createElement("li");
    li.textContent = erro;//conteudo do texto dela
    ul.appendChild(li);
});
}

function obtemPacienteDoFormulario(form) {
    var paciente = {
nome: form.nome.value,
peso: form.peso.value,
altura: form.altura.value,
gordura: form.gordura.value,
imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
    // var nome = form.nome.value;
    // var peso = form.peso.value;
    // var altura = form.altura.value;
    // var gordura = form.gordura.value;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

  

//     var nomeTd = document.createElement("td");
// nomeTd.classList.add("info-nome");
// nomeTd.textContent = paciente.nome;
// var nomeTd = montaTd(paciente.nome, "info-nome");
// var pesoTd = montaTd(paciente.peso, "info-peso");
// var alturaTd = montaTd(paciente.altura, "info-altura");
// var gorduraTd = montaTd(paciente.gordura, "info-gordura");
// var imcTd = montaTd(paciente.imc, "info-imc");


// var pesoTd = document.createElement("td");
// pesoTd.classList.add("info-peso");
// var alturaTd = document.createElement("td");
// alturaTd.classList.add("info-altura");
// var gorduraTd = document.createElement("td");
// gorduraTd.classList.add("info-gordura");
// var imcTd = document.createElement("td");
// imcTd.classList.add("info-imc");


// pesoTd.textContent = paciente.peso;
// alturaTd.textContent = paciente.altura;
// gorduraTd.textContent = paciente.gordura;

// imcTd.textContent = paciente.imc;



// pacienteTr.appendChild(nomeTd);
pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));//elementos filhos dentro elento pai
pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function validaPaciente(paciente) {
var erros = [];

if (paciente.nome.length == 0) {
    erros.push("O nome não pode ser em branco");
}

if (paciente.peso.length == 0) {
    erros.push("O peso não pode ser em branco");
}

if (paciente.altura.length == 0) {
    erros.push("A altura não pode ser em branco");
}

    // if (!validaPeso(paciente.peso)) {
        // return true;
        // return "";
        
    // } else{
        // return false;
        // return "O Peso é invalido";
        if (!validaPeso(paciente.peso)) erros.push(" Peso é inválido");//função em uma unica linha
    // }

    // if (!validaAltura(paciente.altura)) {
        
        // return "";
        
    // } else{
      
        // return "Altura é invalida";
        if (!validaAltura(paciente.altura)) erros.push(" Altura é invalida");//função em uma unica linha
    // }
    if (paciente.gordura.length == 0) {
        erros.push("A gordura não pode ser em branco");
    }
    return erros;
}

