function myFunction() {
   
    let labelTag = document.createElement('label');
    labelTag.textContent = "You form is submitted Sucessfully!";

    let bodyTag = document.querySelector('body');
    bodyTag.append(labelTag);
   
}