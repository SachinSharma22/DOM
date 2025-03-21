let mydiv = document.querySelector('#mydiv');
let newElement = document.createElement('span');
newElement.textContent = "This is me sachin sharma";
mydiv.insertAdjacentElement('beforebegin', newElement);


let mydiv1 = document.querySelector('#mydiv');
let newElement1 = document.createElement('span');
newElement1.textContent = "This is me sachin sharma part2";
mydiv1.insertAdjacentElement('afterbegin', newElement1);


let mydiv2 = document.querySelector('#mydiv');
let newElement2 = document.createElement('span');
newElement2.textContent = "This is me sachin sharma part3";
mydiv2.insertAdjacentElement('beforeend', newElement2);

let mydiv3 = document.querySelector('#mydiv');
let newElement3 = document.createElement('span');
newElement3.textContent = "This is me sachin sharma part4";
mydiv3.insertAdjacentElement('afterend', newElement3);