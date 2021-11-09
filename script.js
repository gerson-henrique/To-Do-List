const texto = document.getElementById('texto-tarefa');
const lista = document.getElementById('lista-tarefas');
const btnC = document.getElementById('criar-tarefa');
const btnA = document.getElementById('apaga-tudo');
const btnL = document.getElementById('remover-finalizados');
const btnS = document.getElementById('remover-selecionado');
const btnUp = document.getElementById('mover-cima');
const btnDn = document.getElementById('mover-baixo');
const saveBtn = document.getElementById('salvar-tarefas');
let tager = -1;
// Criando atalhos ^

function selecionar(box) {
  const tamanhoDaLista = document.querySelectorAll('li');
  let posicaoDalista = [];
  for (let i = 0; i < tamanhoDaLista.length; i += 1) {
    posicaoDalista = tamanhoDaLista[i];

    if (posicaoDalista.classList.contains('selected')) {
      posicaoDalista.classList.remove('selected');
    }
  }
  box.target.classList.add('selected');
}
// Seleciona e muda o fundo ^

function concluir(box) {
  const ElementoSelecionado = box.target;
  if (ElementoSelecionado.classList.contains('completed')) {
    ElementoSelecionado.classList.remove('completed');
  } else {
    box.target.classList.add('completed');
  }
}

// Conclui tarefas ^

function criaEvento() {
  tager += 1;
  const newLi = document.createElement('li');
  lista.appendChild(newLi);
  newLi.innerText = texto.value;
  texto.value = '';
  newLi.id = tager;
  newLi.addEventListener('dblclick', concluir);
  newLi.addEventListener('click', selecionar);
}

// Criar os eventos que vem do input ^

function apagaLista() {
  lista.innerHTML = '';
}

// Apaga a lista ^

function apagaFinalizados() {
  const Arrfinalizados = document.getElementsByClassName('completed');

  for (let i = Arrfinalizados.length - 1; i >= 0; i -= 1) {
    const finalizados = Arrfinalizados[i];
    console.log('teste', finalizados);
    lista.removeChild(finalizados);
  }
}

// Apaga Finalizados ^

function apagaSelecionado() {
  console.log('rs');
  const selecionado = document.getElementsByClassName('selected')[0];
  lista.removeChild(selecionado);
}

// Apaga Selecionado ^

function changeUp() {
  const selecionado = document.getElementsByClassName('selected')[0];
  if (selecionado === undefined) {
    return;
  }
  const selectedFather = selecionado.parentNode;
  if (selecionado == selectedFather.children[0]) {
    return;
  }
  selectedFather.insertBefore(selecionado, selecionado.previousElementSibling);
}
//  Troca acima ^

function changeDw() {
  const selecionado = document.getElementsByClassName('selected')[0];
  if (selecionado === undefined) {
    return;
  }
  const selectedFather = selecionado.parentNode;

  if (selecionado === selectedFather.lastChild) {
    return;
  }
  selectedFather.insertBefore(selecionado.nextElementSibling, selecionado);
}
//  Troca abaixo ^

function savedFunction() {
  const saved = lista.innerHTML;
  localStorage.setItem('memoryCard', saved);
}

function LoadedFunction() {
  if (typeof localStorage.getItem('memoryCard') === 'undefined') {
    return;
  }
  const loaded = localStorage.getItem('memoryCard');
  lista.innerHTML = loaded;
}

LoadedFunction();

btnC.addEventListener('click', criaEvento);
btnA.addEventListener('click', apagaLista);
btnL.addEventListener('click', apagaFinalizados);
btnS.addEventListener('click', apagaSelecionado);
btnUp.addEventListener('click', changeUp);
btnDn.addEventListener('click', changeDw);
saveBtn.addEventListener('click', savedFunction);
// Chama Eventos ^
