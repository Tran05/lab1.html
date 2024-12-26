document.getElementById("toggle-password").addEventListener("click", function() {
    const passwordInput = document.getElementById("password");
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    this.textContent = type === "password" ? "Show" : "Hide";
});

// Validation logic (placeholder)
document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Reset error messages
    document.getElementById("username-error").textContent = "";
    document.getElementById("password-error").textContent = "";
    document.getElementById("email-error").textContent = "";
    document.getElementById("role-error").textContent = "";

    // Example validation (customize as needed)
    let valid = true;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;
    const role = document.getElementById("role").value;

    if (username.length < 3) {
        document.getElementById("username-error").textContent = "Username must be at least 3 characters.";
        valid = false;
    }

    if (password.length < 6) {
        document.getElementById("password-error").textContent = "Password must be at least 6 characters.";
        valid = false;
    }

    if (email && !/\S+@\S+\.\S+/.test(email)) {
        document.getElementById("email-error").textContent = "Invalid email format.";
        valid = false;
    }

    if (!role) {
        document.getElementById("role-error").textContent = "Role is required.";
        valid = false;
    }

    if (valid) {
        // Submit the form or perform an action
        alert("Account created successfully!");
    }
});

// Image preview for file input
document.getElementById("profile-picture").addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const preview = document.getElementById("image-preview");
            preview.innerHTML = `<img src="${e.target.result}" alt="Profile Picture" style="max-width: 100%; max-height: 200px;">`;
        };
        reader.readAsDataURL(file);
    }
});