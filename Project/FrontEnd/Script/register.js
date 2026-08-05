const apiRoute = "../../BackEnd";

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
        headers: {},
        body: JSON.stringify({
            username: username.value,
            password: password.value,
            email: email.value
        })
    })
    .then(response => response.json());
});