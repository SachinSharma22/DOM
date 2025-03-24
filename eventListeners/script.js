// let fpara = document.getElementById('fpara');
// fpara.textContent = "sachin";

// function changeText(event) {
//     console.log(event)
//     let fpara = document.getElementById('fpara');
//     fpara.textContent = "Your eventlistner perfome well";
// }

// let fpara = document.getElementById('fpara');
// fpara.addEventListener('click', changeText);

// If you want to stop eventListner then just writ removeEventlistner('click', your function)
// fpara.removeEventListener('click', changeText); 

// Here we try to change the default behaviour of anchor tag
let anchorTag  = document.getElementById('fanchor');


anchorTag.addEventListener('click', function(event) {
    event.preventDefault();
    anchorTag.textContent = "Click done";
});

