const apiRoute = "http://localhost:8080";

let username = document.getElementById('username');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirmPassword');
let email = document.getElementById('email');

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    if (password.value !== confirmPassword.value) {
        alert("Passwords do not match!");
        return;
    }
    fetch(`${apiRoute}/register.php`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username.value,
            password: password.value,
            email: email.value
        })
    })
    .then(response => response.json())
    .then(response => {
        console.log(response);
        if (response.success) {
            alert("Registration successful!");
            window.location.href = "login.html";
        } else {
            alert(response.message);
        }
    });
});