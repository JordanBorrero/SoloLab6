function validateForm(event) {
    event.preventDefault();

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('errorMessage');

    // Reset error message
    errorMessage.textContent = '';

    // Validate passwords match
    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match.';
        return false;
    }

    // Create JSON object
    const userData = {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        password: password
    };

    // Display JSON in the pre element
    document.getElementById('jsonOutput').textContent = JSON.stringify(userData, null, 2);
    return true; 
}

function validate(input) {
    // Additional input validation logic if needed
    if (input.value === '') {
        input.classList.add('is-invalid');
    } else {
        input.classList.remove('is-invalid');
    }
}
