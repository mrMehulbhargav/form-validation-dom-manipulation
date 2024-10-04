// Error Tracing Code
function validateForm(name, email) {
    console.clear(); // Clear previous console logs

    if (name === "") {
        console.error("Name is required!");
    } else {
        console.log("Name entered: " + name);
    }

    if (!validateEmail(email)) {
        console.error("Invalid email: " + email);
    } else {
        console.log("Email entered: " + email);
    }
    
    // Reuse validation logic from FormEnhancement.js
    return !(name === "" || !validateEmail(email));
}
