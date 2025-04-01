document.querySelector(".red").addEventListener("click", () => {
    document.body.style.backgroundColor="red";
});
document.querySelector(".blue").addEventListener("click", () => {
    document.body.style.backgroundColor="blue";
});
document.querySelector(".green").addEventListener("click", () => {
    document.body.style.backgroundColor="green";
});

document.querySelector(".random").addEventListener("click", () => {
    let colorPicker = ["red", "green","blue","yellow","orange","black","gray","seagreen","purple","white"];

    let num = Math.floor(Math.random() * colorPicker.length);

    document.body.style.backgroundColor = colorPicker[num];
});