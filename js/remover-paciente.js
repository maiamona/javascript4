// var pacientes = document.querySelectorAll(".paciente");

// var tabela = document.querySelector("#tabela-pacientes");

// tabela.addEventListener("dblclick", function(event) {
//     event.target.parentNode.classList.add("fadeOut");

//     setTimeout(function() {
//         event.target.parentNode.remove();
//     }, 500);

// });

var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

/*
tabela.addEventListener("click", function () {
    // console.log("fiu clicado");
});
*/

tabela.addEventListener("dblclick", function (mona) { 
    mona.target.parentNode.classList.add("fadeOut");  
    // console.log(mona.target);
   // a diferencia de 'this' e 'target' é que 'this'- é o dono do evento e 'target'- é quem sofreu o evento em si 
    // console.log(this);

    // mona.target.remove();
    
    setTimeout(() => {
        /*
        var alvoEvento = mona.target;
        var paiDoAlvo = alvoEvento.parentNode;// será o nosso TR = paciente = remover
        paiDoAlvo.remove();   
        */
        mona.target.parentNode.remove();
    }, 500);


   // mona.target.parentNode;//Nó do elemento pai
});

/*
// console.log(pacientes); 
pacientes.forEach(function(paciente) {//para cada item do meu array (todas as classes 'paciente')
paciente.addEventListener("dblclick", function() {//evento duplo click
    console.log("fui clicado com duplo click");  
    this.remove(); //remove o elemento clicado(duplo click) 
});
   
});
*/