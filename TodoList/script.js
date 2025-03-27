const inputTag = document.getElementById('input');
const addBtn = document.getElementById('button');

function addListItem() {
    const ulTag = document.getElementById('item-container');
    let liItem = document.createElement('li');
    liItem.textContent = inputTag.value;
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = "Delete";
    deleteBtn.id = "jsBtn";

    ulTag.append(liItem, deleteBtn);

}

addBtn.addEventListener('click', addListItem);