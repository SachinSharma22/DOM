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