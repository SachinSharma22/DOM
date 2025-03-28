let promise1 = new Promise((resolve, reject) => {
    let success =  true;

   setTimeout(() => {
    if(success){
        resolve("Promise1 Successfull:");
    }else{
        reject("Promise Rejected:")
    }
   }, 2000);
})

promise1.then((message) => {
    console.log("Your message is: " + message);
    return "Your new message is: ";
})
.then((newmsg) =>{
    console.log("here is " + newmsg);
})
.catch((error) => {
    console.log("Your error is : " + error);
}).finally((message) =>{
    console.log("I will run defenetilly ");
})




/*
let firtsPromise = new Promise((resolve, reject) => {
    console.log("Sachin");
    resolve(22222);
    // reject(new Error("Internal Server Error"));
})

console.log(firtsPromise);

function sayMyname() {
    console.log("My name is Sachin Sharma");

}

setTimeout(sayMyname, 2000);
*/
/*
function doSomething () {
    return new Promise((resolve) =>{
        setTimeout(() => {
            //Other things to do before completion of the promise
            console.log(("Did something"));

            //The fulfillment value of the promise
            resolve('www.google.com');
        }, 2000);
    });
}

doSomething();


let myPromise = new Promise(function(resolve, reject) {
    let success = true;

    if(success) {
        resolve("Operation successful!");
    } else {
        reject("Operation failed!");
    }
});

myPromise
.then(result => {
    console.log(result);
})
.catch(error => {
    console.log(error);
});

// Chaining Promises

myPromise
.then(result =>{
    console.log(result);
    return "next step";//passing the value to the next .then parameter
})
.then(nextResult =>{
    console.log(nextResult);
})
.catch(error =>{
    console.log(error);
});

// async operation

function fetchData() {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            const data = "Data factch successfully!";
            resolve(data);
        }, 2000);
    });
}

fetchData()
.then(result => console.log(result))
.catch(error => console.log(error));*/
