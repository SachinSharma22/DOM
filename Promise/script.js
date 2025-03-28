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
