
function allOperation1() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var num1value = parseInt(num1);
    var num2value = parseInt(num2);
    var result = num1value + num2value;
    document.getElementById('result').innerHTML = "Sum: " + result;
}
function allOperation2() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var num1value = parseInt(num1);
     num2value = parseInt(num2);
    var result = num1value - num2value;
    document.getElementById('result').innerHTML = "Subtract: " + result;
}
function allOperation3() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var num1value = parseInt(num1);
    var num2value = parseInt(num2);
    var result = num1value * num2value;
    document.getElementById('result').innerHTML = "Multiply: " + result;
}
function allOperation4() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var num1value = parseInt(num1);
    var num2value = parseInt(num2);
    var result = num1value / num2value;
    document.getElementById('result').innerHTML = "Divide: " + result;
}