const titulo = document.querySelector('h1');

titulo.innerText = 'Novo valor';
titulo.style.backgroundColor = '#dfdfdf'
titulo.style.color = '#fff'

const body = document.querySelector('body')
const button = document.createElement('button')
button.textContent = 'Botão'
button.style.border = 'none'
button.style.backgroundColor = 'crimson'
button.style.color = '#fff'
button.style.width = '100%'
button.style.borderRadius = '3px'

body.appendChild(button)

button.addEventListener('click', eventoClick)

const input = document.querySelector('input')

input.addEventListener('keydown', eventoKeyDown)

function eventoMouseOver () {
    alert('Aconteceu o evento')
}

function eventoClick () {
    titulo.innerText = 'Cliquei no botão'
}

function eventoKeyDown() {
    alert('Uma tecla foi digitada')
}

// const titulo = 2;

// titulo = 4;
// console.log(titulo)