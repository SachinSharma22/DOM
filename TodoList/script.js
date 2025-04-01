const inputTag = document.getElementById('input');
const addBtn = document.getElementById('button');

function addListItem() {
    const ulTag = document.getElementById('item-container');
    let liItem = document.createElement('li');
    let deleteBtn = document.createElement('button');
    let divTag = document.createElement('div');

    liItem.textContent = inputTag.value;
    deleteBtn.textContent = "Delete";
    deleteBtn.id = "jsBtn";

    divTag.append(liItem, deleteBtn);

    if(inputTag.value === ''){
        alert("Write your Task");
        return;
    }
    // ulTag.append(liItem, deleteBtn,);
    ulTag.append(divTag);
    inputTag.value = '';


    function removeList() {
      liItem.remove();
      deleteBtn.remove();
    }


   deleteBtn.addEventListener('click', removeList);

}

addBtn.addEventListener('click', addListItem);