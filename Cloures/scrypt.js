// function init() {
//     myName = "sachin"; //name is a local variable created by init

//     function displayName() {
//         //display() is the inner function, that forms a closure
//         console.log(myName); // use variable declared in the parent function
//     }

//     displayName();
// }

// init();

/*
if(Math.random() > 0.5){
    var x = 1;
}else{
    var x = 2;
}
document.body.innerHTML = x;

function makeFunc() {
    const name = "Moxilla";
    function displayName1() {
        console.log(name);
    }
    return displayName1;
}

const myFunc = makeFunc();
myFunc();

function makeAdder(x) {
    return function(y) {
        return x + y;
    };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(3));
console.log(add10(2));
*/

function makeSizer(size) {
    return function() {
        document.body.style.fontSize = `${size}px`;
    };
}

const size12 = makeSizer(12);
const size14 = makeSizer(24);
const size16 = makeSizer(32);

document.getElementById("size-12").onclick = size12;
document.getElementById("size-14").onclick = size14;
document.getElementById("size-16").onclick = size16;