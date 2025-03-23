let paraElement = document.getElementById('spara');
paraElement.style.backgroundColor = 'blue';
paraElement.style.color = "#fff";

let secondElement = document.getElementById('sdiv');
// console.log("you added these styles " + secondElement.style.cssText);//cssText method work only on inline css
secondElement.style.cssText = "background-color: black; color: white; padding: 2.2rem; font-size: 25px; font-weight: bold;";
// console.log(secondElement.style.cssText);

//changing first para

let firstPara = document.getElementById('fpara');
// firstPara.style.backgroundColor = 'grey';

firstPara.style.cssText = "background-color:grey;color:white; font-size: 30px; font-weight:bold text-align:center";

// adding class in html element
let firstElement = document.querySelector('#fdiv');
firstElement.setAttribute('class', 'firstDiv');
// if I again set another class firstone is override
firstElement.setAttribute('class', 'secondFirstDiv');

// we can also change the style property with the help of setAttribute
firstElement.setAttribute('style','padding:0.1rem')

let para1 = document.querySelector('#fpara');
para1.setAttribute('class','pawan');
para1.setAttribute('class','sachin class');


