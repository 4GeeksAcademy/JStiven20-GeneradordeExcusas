let quien = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let accion = ['ate', 'peed', 'crushed', 'broke'];
let que = ['my homework', 'my phone', 'the car'];
let cuando = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

let Excusas = `${quien[getRandomIndex(quien)]} ${accion[getRandomIndex(accion)]} ${que[getRandomIndex(que)]} ${cuando[getRandomIndex(cuando)]}`;


document.getElementById ('Excusas').innerHTML = Excusas;