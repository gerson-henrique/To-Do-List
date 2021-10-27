let texto = document.getElementById('texto-tarefa')
let lista = document.getElementById('lista-tarefas')
let btnC = document.getElementById('criar-tarefa')
let btnA = document.getElementById('apaga-tudo')
let btnL = document.getElementById('remover-finalizados')
let btnS = document.getElementById('remover-selecionado') 

//Criando atalhos ^ 

btnC.addEventListener('click', criaEvento)
btnA.addEventListener('click', apagaLista)
btnL.addEventListener('click', apagaFinalizados)
btnS.addEventListener('click', apagaSelecionado)
//chama Eventos


function criaEvento() {

  let newLi = document.createElement('li')
  lista.appendChild(newLi)
  newLi.innerText = texto.value
  texto.value = ''
  newLi.addEventListener('dblclick', concluir)
  newLi.addEventListener('click', selecionar)

}

//Criar os eventos que vem do input ^ 

function selecionar(box) {



  let tamanhoDaLista = document.querySelectorAll('li')

  for (i = 0; i < tamanhoDaLista.length; i += 1) {
    posicaoDalista = tamanhoDaLista[i]

    if (posicaoDalista.classList.contains('selected')) {
      posicaoDalista.classList.remove('selected')

    }
  }

  box.target.classList.add('selected')


}

//seleciona e muda o fundo ^ 

function concluir(box) {


  let ElementoSelecionado = box.target;

  if (ElementoSelecionado.classList.contains('completed')) {
    ElementoSelecionado.classList.remove('completed')

  } else {

    box.target.classList.add('completed')
  }



}

//Conclui tarefas  ^ 

function apagaLista() {

  lista.innerHTML = ""


}

//Apaga a lista^ 

function apagaFinalizados() {
  
  let Arrfinalizados = document.getElementsByClassName("completed")

  for (i = Arrfinalizados.length-1; i >=0; i -= 1) {
  let finalizados = Arrfinalizados[i]
    console.log('teste',finalizados)
    lista.removeChild(finalizados)
    
  }
}

//Apaga Finalizados^ 

function apagaSelecionado() {
  console.log('rs')
  let selecionado = document.getElementsByClassName("selected")[0]
  lista.removeChild(selecionado)
}

//Apaga Selecionado^ 





