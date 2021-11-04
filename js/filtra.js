// var campoFiltro = document.querySelector("#filtrar-tabela");

// campoFiltro.addEventListener("input", function() {
//     var pacientes = document.querySelectorAll(".paciente");

//     if (this.value.length > 0) {
//         for (var i = 0; i < pacientes.length; i++) {
//             var paciente = pacientes[i];
//             var tdNome = paciente.querySelector(".info-nome");
//             var nome = tdNome.textContent;
//             var expressao = new RegExp(this.value, "i");

//             if (!expressao.test(nome)) {
//                 paciente.classList.add("invisivel");
//             } else {
//                 paciente.classList.remove("invisivel");
//             }
//         }
//     } else {
//         for (var i = 0; i < pacientes.length; i++) {
//             var paciente = pacientes[i];
//             paciente.classList.remove("invisivel");
//         }
//     }
// });


//filtro utilizando jquery
/* <div class="collapse navbar-collapse" id="navbarsExample03">
            <ul id="a" class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link" href="#">PAGINA PRINCIPAL</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="sobrenosn.html">SOBRE NOS</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="funcaon.html">FUNCIONALIDADES</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="vantagemn.html">VANTAGENS</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="contaton.html">CONTACTO</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="loginn.html">LOGIN</a>
                </li>
            </ul>
            <form class="form-inline my-2 my-md-0">
              <input id="myInput" class="form-control" type="text" placeholder="Pesquisa rapida">
            </form>
          </div> */
        //   $(document).ready(function(){
        //     $("#myInput").on("keyup", function() {
        //       var value = $(this).val().toLowerCase();
        //       $("#a li a").filter(function() {
        //         $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        //       });
        //     });
        //   });

        var campoFiltro = document.querySelector("#filtrar-tabela");
        // console.log(campoFiltro);
        campoFiltro.addEventListener("input", function () {
            // console.log("digitaram no campo"); 
            // console.log(campoFiltro.value); 
            console.log(this.value); 
            var pacientes = document.querySelectorAll(".paciente");

            if (this.value.length > 0) {
                // console.log("tem algo digitado");
                
                for (let i = 0; i < pacientes.length; i++) {
                    var paciente = pacientes[i];
    var tdNome = paciente.querySelector(".info-nome")
                    var nome = tdNome.textContent;
                    var expressao = new RegExp(this.value,"i")// espressão regular que faz a busca igual ao CTRL + F, o "i" busca por Maiusculo e Minusculo
                    // console.log(nome);
                    // if (nome != this.value) {
                    if (!expressao.test(nome)) {
                        paciente.classList.add("invisivel");//adiciona a classe
                    } else {
                        paciente.classList.remove("invisivel");//remove a classe
                    }
                }
            } else{
                for (let i = 0; i < pacientes.length; i++) {
                    var paciente = pacientes[i];
                    paciente.classList.remove("invisivel");//remove a classe
                }
            }

        });