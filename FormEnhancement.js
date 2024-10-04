// Form Enhancement with dialog boxes and custom validation
document.getElementById('submitBtn').addEventListener('click', function() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var nameError = document.getElementById('nameError');
    var emailError = document.getElementById('emailError');

    // Reset error messages
    nameError.textContent = "";
    emailError.textContent = "";

    // Validate the form
    if (validateForm(name, email)) {
        // Show a confirmation dialog before submission
        if (confirm("Do you want to submit the form?")) {
            alert('Form Submitted Successfully!');
        } else {
            alert('Form submission canceled.');
        }
    }
});

// Custom validation logic for name and email
function validateForm(name, email) {
    let isValid = true;

    if (name === "") {
        document.getElementById('nameError').textContent = "Name is required!";
        alert("Please enter your name.");
        isValid = false;
    }

    if (!validateEmail(email)) {
        document.getElementById('emailError').textContent = "Invalid email address!";
        alert("Please enter a valid email address.");
        isValid = false;
    }

    return isValid;
}

// Function to validate email format
function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
