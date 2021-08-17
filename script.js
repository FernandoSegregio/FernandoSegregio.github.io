function titleH2() {
  const title1H2 = document.createElement('h1');
  title1H2.id = 'nameProjet';
  title1H2.innerText = 'Super Pixel Art World';
  document.body.appendChild(title1H2);
}
titleH2();

// Cria titulo
function titleH1() {
  const title1H1 = document.createElement('h1');
  title1H1.id = 'title';
  title1H1.innerText = 'Paleta de Cores';
  document.body.appendChild(title1H1);
}
titleH1();

// cria as cores sortidas
function collorsRandom() {
  const collorRandom = Math.floor(Math.random() * 255);
  return collorRandom;
}

// cria as 4 paletas com id color-palette, define as cores sortidas para as paletas 2,3,4;
// adiciona classe color, define borda, coloca a cor nos box
function createDiv() {
  const arrayColor = ['black'];
  for (let index = 1; index < 4; index += 1) {
    arrayColor.push(`rgb(${collorsRandom()}, ${collorsRandom()}, ${collorsRandom()})`);
  }
  const divColorFather = document.createElement('div');
  divColorFather.id = 'color-palette';
  document.body.appendChild(divColorFather);
  for (let index = 0; index < 4; index += 1) {
    const divColorSon = document.createElement('div');
    divColorSon.className = 'color';
    divColorSon.style.border = '1px solid black';
    divColorSon.style.backgroundColor = arrayColor[index];
    divColorFather.appendChild(divColorSon);
  }
}
createDiv();

function criaP() {
  const paragraph = document.createElement('p');
  paragraph.id = 'paragraph';
  paragraph.innerText = '(Selecione a cor desejada)';
  document.body.appendChild(paragraph);
}
criaP();
// cria os 25 box com a classe pixel e o background color branco

let dimensionBox = 5;
function createBox() {
  const divFather = document.createElement('div');
  const valueWidthHeight = 42 * dimensionBox;
  divFather.id = 'pixel-board';
  divFather.style.width = `${valueWidthHeight}px`;
  divFather.style.height = `${valueWidthHeight}px`;
  document.body.appendChild(divFather);
  for (let index = 0; index < (dimensionBox ** 2); index += 1) {
    const divChild = document.createElement('div');
    divChild.className = 'pixel';
    divChild.style.backgroundColor = 'white';
    divFather.appendChild(divChild);
  }
}
createBox();

// adiciona classe selected no preto
let firstChild = document.querySelector('.color');
firstChild.classList.add('selected');

// pega todas das divs com a classe color
const allBoxCollor = document.querySelectorAll('.color');

// remove e adiciona classe selected
function removeAddSelected() {
  for (let index = 0; index < allBoxCollor.length; index += 1) {
    allBoxCollor[index].addEventListener('click', (event) => {
      firstChild.classList.remove('selected');
      event.target.classList.add('selected');
      firstChild = event.target;
    });
  }
}
removeAddSelected();

// add cor no box

const pixelBox = document.getElementsByClassName('pixel');

function selectPixel() {
  for (let index = 0; index < pixelBox.length; index += 1) {
    pixelBox[index].addEventListener('click', (event) => {
      const collorSelected = firstChild.style.backgroundColor;
      const evento = event.target;
      evento.style.backgroundColor = collorSelected;
    });
  }
}
selectPixel();

// cria botão
function createBotton() {
  const button = document.createElement('button');
  button.id = 'clear-board';
  button.innerText = 'Limpar';
  document.body.insertBefore(button, document.querySelector('#pixel-board'));

  // adiciona fundo branco nos boxs ao clicar no botão
  button.addEventListener('click', () => {
    for (let index = 0; index < pixelBox.length; index += 1) {
      pixelBox[index].style.backgroundColor = 'white';
    }
  });
}
createBotton();

// requisito 10 / entre 5 e 10
const div = document.createElement('div');
div.id = 'button-input';
document.body.insertBefore(div, document.querySelector('#clear-board'));

const input = document.createElement('input');
input.id = 'board-size';
input.type = 'number';
input.min = '1';
div.appendChild(input);

const button = document.createElement('button');
button.id = 'generate-board';
button.innerText = 'VQV';
div.appendChild(button);

function setInput() {
  button.addEventListener('click', () => {
    let numberDoInput = input.value;
    if (numberDoInput === '') {
      alert('Board inválido!');
      return;
    }
    if (numberDoInput < 5) {
      numberDoInput = 5;
    }
    if ((numberDoInput >= 50)) {
      numberDoInput = 50;
    }
    dimensionBox = numberDoInput;
    document.body.removeChild(document.querySelector('#pixel-board'));
    createBox();
    selectPixel();
  });
}
setInput();
