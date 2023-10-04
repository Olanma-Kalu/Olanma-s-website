
const validateButton = document.querySelector('.first-button');

// Add a click event listener to the button
validateButton.addEventListener('click', function() {
    // Get the value of the email input field by its class name
    const emailInput = document.querySelector('.fourth-input');
    const email = emailInput.value.trim(); // Trim to remove leading/trailing spaces

    // Check if the email includes "@gmail.com"
    if (email.includes('@gmail.com')) {
        // Valid email address
        alert('Email is valid.');
    } else {
        // Invalid email address
        alert('Invalid email.');
    }
});