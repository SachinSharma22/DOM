document.getElementById('btnAi').addEventListener("click", function() {
    const heigthInInch = parseFloat(document.getElementById("inch-height").value);

    const weightInPound = parseFloat(document.getElementById("wPound").value);

    if(isNaN(heigthInInch) || isNaN(weightInPound)){
        alert("Please enter numerical value");
        return;
    }

    let inchToCm = 2.54;
    let poundToKg = 0.453592;

    let heightInCm = heigthInInch * inchToCm;
    let weightInKg = weightInPound * poundToKg;

    document.getElementById("cm").value = heightInCm;
    document.getElementById("kg").value = weightInKg;


});

let a = "hello";
a = prompt("World");
console.log(a);