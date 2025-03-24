// let fpara = document.getElementById('fpara');
// fpara.textContent = "sachin";

function changeText() {
    let fpara = document.getElementById('fpara');
    fpara.textContent = "Your eventlistner perfome well";
}

let fpara = document.getElementById('fpara');
fpara.addEventListener('click', changeText);

// If you want to stop eventListner then just writ removeEventlistner('click', your function)
// fpara.removeEventListener('click', changeText); 
