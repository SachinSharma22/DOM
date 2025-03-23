let paraElement = document.getElementById('spara');
paraElement.style.backgroundColor = 'blue';
paraElement.style.color = "#fff";

let secondElement = document.getElementById('sdiv');
console.log("you added these styles " + secondElement.style.cssText);//cssText method work only on inline css
secondElement.style.cssText = "background-color: black; color: white; padding: 2.2rem; font-size: 25px; font-weight: bold;";
console.log(secondElement.style.cssText);