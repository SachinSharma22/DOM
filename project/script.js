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

            // Show the alert message after form data is validated
            alert(`Registration Successful!\nUsername: ${username}\nEmail: ${email}\nPassword: ${password}`);
        }


//register button alert message
const rgBtn = document.getElementById('btnAi');

function showMessage() {
    alert("Your form is Submitted Successfully");
}
rgBtn.addEventListener('submit', showMessage);



document.getElementById('register-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get the form values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Create a user object to store in local storage
    const user = {
        username: username,
        email: email,
        password: password // In a real-world app, you'd hash this before saving
    };

    // Get existing users from local storage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the email already exists in local storage
    const emailExists = users.some(user => user.email === email);

    if (emailExists) {
        alert('Email already registered!');
        return;
    }

    // Add the new user to the list
    users.push(user);

    // Store the updated users list back in local storage
    localStorage.setItem('users', JSON.stringify(users));

    // Show success message
    alert('Registration successful!');

    // Clear the form fields
    document.getElementById('register-form').reset();
});



document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get the form values
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Retrieve stored users from local storage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the user exists in local storage and the password matches
    const user = users.find(user => user.username === username && user.password === password);

    // Show modal if login is successful
    if (user) {
        // Show success modal
        showModal();
    } else {
        alert('Invalid username or password!');
    }
});

// Show the modal
function showModal() {
    const modal = document.getElementById('loginSuccessModal');
    modal.style.display = 'flex'; // Display the modal
}

// Close the modal
function closeModal() {
    const modal = document.getElementById('loginSuccessModal');
    modal.style.display = 'none'; // Hide the modal
}



