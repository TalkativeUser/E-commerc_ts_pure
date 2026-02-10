"use strict";
const form = document.querySelector("#signup-form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.querySelector('[data-input="name"]').value.trim();
    const email = form.querySelector('[data-input="email"]').value.trim();
    const password = form.querySelector('[data-input="password"]').value;
    const confirmPassword = form.querySelector('[data-input="confirmPassword"]').value;
    validationSchema({ name, email, password, confirmPassword });
});
function validationSchema({ name, email, password, confirmPassword }) {
    if (!name || !email || !password || !confirmPassword) {
        alert("All fields are required");
        return;
    }
    if (!email.includes("@")) {
        alert("Invalid email");
        return;
    }
    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return;
    }
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }
    createUser({ name, email, password, confirmPassword });
}
function createUser(newUser) {
}
//# sourceMappingURL=signUp.js.map