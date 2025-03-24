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
// let anchorTag  = document.getElementById('fanchor');


// anchorTag.addEventListener('click', function(event) {
//     event.preventDefault();
//     anchorTag.textContent = "Click done";
// });


// here we use a method to call several addEventListener at once
// let paras = document.querySelectorAll('p');

// function alertMsg(event) {
    
//         alert("You hava clicked on para: "+ event.target.textContent);
// }

// for(let i = 0; i<paras.length; i++){
//     let para = paras[i];
//     para.addEventListener('click', alertMsg);
// }


// This is another approach for doing same task

let mydiv = document.getElementById('wrapper');


// Make sure you only clicked on the element because when you clicked on other part of the document JavaScript alerts you that you have clicked on document
function alertMsg (event) {
    alert("You have clicked on : "+ event.target.textContent);
}

document.addEventListener('click', alertMsg);