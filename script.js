// 1 - Adicionando o Título Paleta de Cores
// let h1 = document.createElement('h1');
// h1.innerText = 'Paleta de Cores'
// document.body.appendChild(h1);

// let header = document.createElement('header');
// document.body.appendChild(header);

// 2 - A primeira cor deve ser preta e as demais aleatórias.
const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const color3 = document.getElementById('color3');
const color4 = document.getElementById('color4');
const quadroDePixels = document.querySelector('#pixel-board');
const botaoCores = document.getElementById('button-random-color');
const pixels = document.querySelectorAll('.pixel');

color1.style.backgroundColor = 'black';
color2.style.backgroundColor = 'purple';
color3.style.backgroundColor = 'pink';
color4.style.backgroundColor = 'violet';

// 3 e 4 - criar uma botão que crie cores aleatórias - com o id button-random-color
const buttonRandomcolor = document.getElementById('button-random-color');

function corAleatoria(opacidade = 1) {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;

  return `rgba(${r}, ${g}, ${b}, ${opacidade})`;
}

buttonRandomcolor.addEventListener('click', function aleatoria() {
  color1.style.backgroundColor = 'black';
  color2.style.backgroundColor = corAleatoria();
  color3.style.backgroundColor = corAleatoria();
  color4.style.backgroundColor = corAleatoria();
  saveCores();
});

// 5 - Crie uma função usando localStorage para que a paleta de cores gerada aleatoriamente seja mantida após recarregar a página.

function saveCores() {
  const cores = [color2.style.backgroundColor = corAleatoria(), color3.style.backgroundColor = corAleatoria(), color4.style.backgroundColor = corAleatoria()];
  localStorage.setItem('colorPalette', JSON.stringify(cores));
}

function initialRendering() {
  const valoresSalvos = JSON.parse(localStorage.getItem('colorPalette'));
  color2.style.backgroundColor = valoresSalvos[0];
  color3.style.backgroundColor = valoresSalvos[1];
  color4.style.backgroundColor = valoresSalvos[2];
}

window.onload = () => { 
  if (localStorage.getItem('colorPalette') === null) {
    localStorage.setItem('colorPalette', JSON.stringify([]));
  }
  initialRendering(); gerarQuadroDePixels(); pintar();
};

// 6 e 7- Crie um quadro de pixels

function gerarQuadroDePixels (){
  quadroDePixels.style.width = '250px';
  for (let i = 1; i < 26; i += 1) {
    div = document.createElement('div');
    div.className = 'pixel';
    quadroDePixels.appendChild(div)
  }
}

// 8 - Defina a cor preta como inicial da paleta
// color1 = document.getElementsByClassName('color1')[0];
// const classInicialColor = document.createElement('className')
// classInicialColor.className = 'selected';
// color1.appendChild(classInicialColor);

// 9 - Crie uma função para selecionar uma cor na paleta de cores.

function addClass (event) {
  const selecionado = document.querySelector('.selected');
  selecionado.classList.remove('selected');
  event.target.classList.add('selected');
};

color1.addEventListener('click', addClass);
color2.addEventListener('click', addClass);
color3.addEventListener('click', addClass);
color4.addEventListener('click', addClass);

// 10 - Preenchendo um pixel com a cor selecionada.
function color() {
  const newColor = document.querySelector('.selected').style.backgroundColor;
  return newColor;
}

function pintar() {
  const salvarCores = [];
  const pixels = document.querySelectorAll('.pixel')
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', () => {
      pixels[index].style.backgroundColor = color();
      salvarCores[index] = pixels[index].style.backgroundColor = color()
      localStorage.setItem('pixelBoard', JSON.stringify(salvarCores))
  });
  }
}

const pegarCoresSalvas = JSON.parse(localStorage.getItem('pixelBoard'))
for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].style.backgroundColor = pegarCoresSalvas[index];
  salvarCores = pegarCoresSalvas;
}

// 11 - Botão de limpar

const limpar = document.querySelector('#clear-board')
  limpar.addEventListener('click', () => { 
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white'
    salvarCores[index] = pixels[index].style.backgroundColor = 'white'
    localStorage.setItem('pixelBoard', JSON.stringify(salvarCores))
  }
});
