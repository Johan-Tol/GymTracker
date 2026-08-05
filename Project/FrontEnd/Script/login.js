const apiRoute = "../../BackEnd";

let username = document.getElementById('username');
let password = document.getElementById('password');

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let response = fetch(`${apiRoute}/login.php`, {
        method: 'POST',
        headers: {},
        body: JSON.stringify({
            username: username.value,
            password: password.value
        })
    })
    .then(response => response.json());
});