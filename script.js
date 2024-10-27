document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Create JSON object
    const userData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };

    // Display JSON in the pre element
    document.getElementById('jsonOutput').textContent = JSON.stringify(userData, null, 2);
});
