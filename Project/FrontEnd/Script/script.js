function LoginCheck () {
    username = localStorage.getItem("username");
    let route = window.location.href;
    let routeParts = route.split("/");
    route = routeParts[routeParts.length - 1];
    if (username == null || username == "") {
        document.getElementById("loginText").innerHTML = "Login";
        if (route != "login.html" && route != "register.html" && route != "home.html") {
            window.location.href = "login.html";
        }
    }
}

function LoginButton() {
    if (username == null || username == "") {
        window.location.href = "login.html";;
    } else {
        localStorage.removeItem("username");
        window.location.href = "login.html";
    }
}

LoginCheck();