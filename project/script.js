const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');
// const container = document.querySelector('.container');

registerBtn.addEventListener('click', () =>{
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
})

 // Function to generate a random password
 function generateRandomPassword(length = 12) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

// Function to populate the password field with the generated password
function generateAndFillPassword() {
    const passwordField = document.getElementById("password");
    const randomPassword = generateRandomPassword(12); // Generate a random password of length 12
    passwordField.value = randomPassword; // Set the generated password as the value of the password field
}


        // Handle form submission
        function handleFormSubmit(event) {
            event.preventDefault(); // Prevent the form from submitting immediately

            // Get the form data
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            // const recaptchaResponse = grecaptcha.getResponse(); // Get reCAPTCHA response

            // Check if the reCAPTCHA is completed
            // if (!recaptchaResponse) {
            //     alert("Please complete the CAPTCHA");
            //     return;
            // }

            // You can perform further actions like sending the data to the server here

            // Show the alert message after form data is validated
            alert(`Registration Successful!\nUsername: ${username}\nEmail: ${email}\nPassword: ${password}`);
        }


//register button alert message
const rgBtn = document.getElementById('btnAi');

function showMessage() {
    alert("Your form is Submitted Successfully");
}
rgBtn.addEventListener('submit', showMessage);

// // Google recaptcha code

// function onSubmit(token) {
//   document.getElementById("demo-form").submit();
// }
