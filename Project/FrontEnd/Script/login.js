const apiRoute = "http://localhost:8080";

let username = document.getElementById('username');
let password = document.getElementById('password');

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let response = fetch(`${apiRoute}/login.php`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username.value,
            password: password.value
        })
    })
    .then(response => response.json())
    .then(response => {
        console.log(response);
        if (response.success) {
            alert("Login successful!");
            window.location.href = "home.html";
        } else {
            alert(response.message);
        }
    });
});