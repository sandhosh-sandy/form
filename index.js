
document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Stop form submission
    let valid = true;

    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");

    const usernameError = document.getElementById("usernameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");

    // Reset error messages
    usernameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";

    // Validate Username
    if (username.value.trim() === "") {
        usernameError.textContent = "Username is required";
        valid = false;
    } else if (username.value.length < 3) {
        usernameError.textContent = "Username must be at least 3 characters";
        valid = false;
    }

    // Validate Email
    if (email.value.trim() === "") {
        emailError.textContent = "Email is required";
        valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        emailError.textContent = "Invalid email format";
        valid = false;
    }

    // Validate Password
    if (password.value.trim() === "") {
        passwordError.textContent = "Password is required";
        valid = false;
    } else if (password.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        valid = false;
    }

    // Validate Confirm Password
    if (confirmPassword.value.trim() === "") {
        confirmPasswordError.textContent = "Confirm Password is required";
        valid = false;
    } else if (confirmPassword.value !== password.value) {
        confirmPasswordError.textContent = "Passwords do not match";
        valid = false;
    }

    // If all validations pass, show success message
    if (valid) {
        alert("Form submitted successfully!");
    }
});
