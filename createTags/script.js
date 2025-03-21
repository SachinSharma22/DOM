let h1 = document.createElement('h1');
h1.textContent = "This text is written by JavaScript";
let bodyTag = document.querySelector('body');
bodyTag.appendChild(h1);


let labelTag = document.createElement('label');
labelTag.textContent = "This label is added by JavaScript";

let firstHead = document.getElementById('fhead');
firstHead.append(labelTag);

let firstSpan = document.createElement('a');
firstSpan.href = "www.google.com";
firstSpan.textContent = "Google";

let spanTag = document.querySelector('span');
spanTag.append(firstSpan);

let divElement = document.createElement('div');
divElement.className = 'container';
divElement.textContent = "This div created by JavaScript";

let bodyTag1 = document.querySelector('body');
bodyTag1.append(divElement);


function tryMyFunc() {
    let buttonTag = document.createElement('label');
    buttonTag.textContent = "My Button work properly";

    let bodyTag2 = document.querySelector('body');
    bodyTag2.append(buttonTag);
}