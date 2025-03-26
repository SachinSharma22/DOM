// method 1
// THis methos is called Reflow Method
// It tooks much time then Repaint because when this event is happend it reload the whole document

/*
let p1 = performance.now();
for(let i=0;i<100;i++){
    let para = document.createElement('p');
    para.textContent = "This is para:" + i;

    document.body.append(para);
}
let p2 = performance.now();
console.log("Time is :"+ (p2 -p1));

*/

// Method 2
// You can see on console that second method tooks very few time to do the task
// This method is called Rapaint Method in terms of performence

/*
let p3 = performance.now();

let myDiv = document.createElement('div');
for(let i = 0; i<100;i++){
    let para2 = document.createElement('p');
    para2.textContent = "This is div Para " + i;
    myDiv.appendChild(para2);
}

document.body.append(myDiv);

let p4 = performance.now();
console.log("This time is "+ (p4 -p3));
*/


//Best code for memory representation


//This is good practice for adding some content or element to the document
let fragment  = document.createDocumentFragment();
for(let i = 0; i<=100; i++) {
    let para = document.createElement('p');
    para.textContent = "This is para " + i;
    //No reflow and No repaint for the below line
    fragment.appendChild(para);
}

//The below line takes 1reflow and 1 repaint
document.body.appendChild(fragment);