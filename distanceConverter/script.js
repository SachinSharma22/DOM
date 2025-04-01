document.getElementById("btnAi").addEventListener('click', function() {

    const inputDistance = parseFloat(document.querySelector(".first-input").value);
    const fromUnit = document.getElementById("option1").value;
    const toUnit = document.getElementById("option2").value;

    if(isNaN(inputDistance)){
        alert("Please enter a valid number:");
        return;
    }

    // Conversion factors
    const kmToMile = 0.621371;
    const mileToKm = 1.60934;
    const kmToM = 1000;
    const mToKm = 0.001;
    const mileToM = 1609.34;
    const mToMile = 0.000621371;

    let result;

    if(fromUnit === "1" && toUnit === "2"){
        result = inputDistance * kmToMile;
    }else if(fromUnit === "1" && toUnit === "3"){
        result = inputDistance * kmToM;
    }else if(fromUnit === "2" && toUnit === "1"){
        result = inputDistance * mileToKm;
    }else if(fromUnit === "2" && toUnit === "3"){
        result = inputDistance * mileToM;
    }else if(fromUnit === "3" && toUnit === "1"){
        result = inputDistance * mToKm;
    }else if(fromUnit === "3" && toUnit === "2"){
        result = inputDistance * mToMile;
    }else{
        result = inputDistance;
    }

    document.querySelector(".second-input").value = result.toFixed(2);

});