console.log("Everything is good");

const inputTag = document.getElementById('input');
const addBtn = document.getElementById('button');

console.log("next is you function");

function addListItem() {
    console.log("function works");
    let ulTag = document.getElementById('item-container');
    let liItem = document.createElement('li');
    // console.log(liItem);
    liItem.textContent = inputTag.value;
    console.log(liItem.textContent);
    ulTag.appendChild(liItem);
}

addBtn.addEventListener('click', addListItem);