/**
 * Checks if a given password meets the security requirements.
 * * Requirements:
 * 1. Must be at least 8 characters.
 * 2. Cannot contain spaces.
 * 3. Cannot contain the username (case-insensitive check).
 */

function isValidPassword(password, username) {
    // Requirement 1: Be at least 8 characters
    if (password.length < 8) {
        console.warn("Validation failed: Password is less than 8 characters.");
        return false;
    }

    // Requirement 2: Cannot contain spaces
    if (password.includes(' ')) {
        console.warn("Validation failed: Password contains spaces.");
        return false;
    }

    // Requirement 3: Cannot contain the username (case-insensitive)
    // Convert both to lowercase for a case-insensitive check.
    const lowerPassword = password.toLowerCase();
    const lowerUsername = username.toLowerCase();

    if (lowerPassword.includes(lowerUsername) && lowerUsername.length > 0) {
        // Check to make sure username is not empty to avoid false positives
        console.warn("Validation failed: Password contains the username.");
        return false;
    }

    // If all requirements are met
    console.info("Validation successful!");
    return true;
}

// --- Demo Logic ---
// This section handles the user interface interaction: reading input fields when the button is clicked,
// calling the core 'isValidPassword' function, and updating the results box based on the outcome.

const toggleButton = document.getElementById('togglePassword');
const passwordField = document.getElementById('password');

// New event listener for the show/hide password button
toggleButton.addEventListener('click', () => {
    // Check the current type of the input field
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    
    // Toggle the type attribute
    passwordField.setAttribute('type', type);
    
    // Change the button text
    if (type === 'text') {
        toggleButton.textContent = 'HIDE';
    } else {
        toggleButton.textContent = 'SHOW';
    }
});


document.getElementById('checkButton').addEventListener('click', () => {
    // Get the current values from the input fields
    const passwordInput = document.getElementById('password').value;
    const usernameInput = document.getElementById('username').value;
    const resultDiv = document.getElementById('result');

    // Call the core validation function
    const isValid = isValidPassword(passwordInput, usernameInput);

    // Display the result box
    resultDiv.style.display = 'block';

    // Update the display based on the validation result
    if (isValid) {
        resultDiv.className = 'valid';
        resultDiv.textContent = 'Password is VALID! ✅';
    } else {
        resultDiv.className = 'invalid';
        resultDiv.textContent = 'Password is INVALID! ❌';
    }
});