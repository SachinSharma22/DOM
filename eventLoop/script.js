//Synchronous code in JavaScript 
// This is ByDdefault
console.log("Hiii");

function greet() {
    console.log("Sachin Sharma");
}

greet();

console.log("Welcome");

// Asynchronous Code in JavaScript

function fetchData(callback) {
    setTimeout(() => {
        const data = "Data fetched!";
        callback(data);
    },2000);
}

fetchData ((data) => {
    console.log(data);
})

console.log("start");

setTimeout(() => {
    console.log("This is delayed by 2 seconds!");
},2000);

console.log("End");

//Cancel the timeout before it triggers

 const timeoutId = setTimeout(() =>{
    console.log("This will not run");
 },2000);

 clearTimeout(timeoutId);


 //Event loop 
 console.log("Start");

 setTimeout(() => {
    console.log("Timeout 1");
 }, 0);

 Promise.resolve() .then(() =>{
    console.log("promise 1");
 });

 setTimeout(() => {
    console.log("Timeout 2");
 }, 0);

 console.log('end');