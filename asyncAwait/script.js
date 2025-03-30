
//fetching the API
// async function getData() {

//     // get request - async
//     let response =  await fetch('https://jsonplaceholder.typicode.com/todos/1');

//     //parse json - async
//     let data = await response.json();
//     console.log(data);
// }

// getData();

//Post method to post some data to an API
async function postData() {
    const url = 'https://jsonplaceholder.typicode.com/posts';

    //Data to be posted
    const postData = {
        title: "sachin",
        body: "bar",
        userId : 1
    };

    //Make a POST request using fetch

    const response = await fetch(url, {
        method: 'POST', //Set request method to POST
        headers: {
            'content-Type' : 'aplication/json'// Indicate that the body content is json

        },
        body: JSON.stringify(postData) //Convert JavaScript object to JSON string for the body
    });

     const data = await response.json();

     // Log the result to the console
     console.log(data);
}

 postData();


// async function getData() {
//     setTimeout(() => {
//         console.log("I am inside set Timeout block");
//     }, 3000);
// }
// getData()



/*function resolveafter2Second() {
    return new Promise((resolve) =>  {
        setTimeout(() =>{
            resolve("resolved");
        }, 2000)
    });
}

async function asyncCall() {
    console.log("Calling...");
    const result = await resolveafter2Second();
    console.log(result);
    //Expected output: "resolved"
}

asyncCall();
*/