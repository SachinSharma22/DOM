// Some Technical Question
let a = 10, x = 20;
a = a++ + 10;
x = x++ + a;
console.log(a, x);

// Guess the output
let i = 10, j = 2, k = 0, m;
m = ++i && ++j && ++k;
console.log(i, j, k, m);

// Guess the output

let b, y = (1,2,3,4,5);
console.log(b, y);

// Predict the output
// In these type of cases 1 is always true and 0 is always false
if(1){
    console.log("hii");
}else{
    console.log("hello");
}

// Another
//In this type of cases last value is always considered
if(5,4,3,2,1,0){
    console.log("hii");
}else{
    console.log("Hello");
}

// It tooks the length of the string
if(console.log("Hai")){
    console.log("hello");
}else{
    console.log("hii");
}

if(console.log("O"), console.log("Teo")){
    console.log("Hello");
}else{
    console.log("Hii");
}

if(-1){
    console.log("True");
}else{
    console.log("False");
}

let A = 2;
switch(A){
    case 1: console.log("one");
    case 2: console.log("two");
    case 3: console.log("Three");
    default: console.log("Invalid option");
}

a=b=c=d=10;
console.log(A,b,c,d);

let sum;
let ch1 = 'a';
let ch2 = 'b';
sum = parseInt(ch1)+parseInt(ch2);
console.log(sum);

const num1 = 1.1;
var num2 = 1.1;
if(num1 == num2){
    console.log("Hii")
}else{
    console.log("not true");
}

console.log("%d")