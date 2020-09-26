// Initialize elements
let username = document.getElementById("username")
let password = document.getElementById("password")
let loginBtn = document.getElementById("loginBtn")

// Add event listener
loginBtn.addEventListener("click", function () {
    if ((username.value == "admin") && (password.value === "123456")) {
        alert("Login successful!");
        window.location.href = "product.html";
    } else {
        document.getElementById("notice").innerHTML = "Invalid username or password."
    }
})

username.addEventListener("keyup", function (key) {
    if (key.key === "Enter") {
        if ((username.value === "admin") && (password.value === "123456")) {
            alert("Login successful!");
            window.location.href = "product.html";
        } else {
            document.getElementById("notice").innerHTML = "Invalid username or password."
        }
    }
})

password.addEventListener("keyup", function (key) {
    if (key.key === "Enter") {
        if ((username.value === "admin") && (password.value === "123456")) {
            alert("Login successful!");
            window.location.href = "product.html";
        } else {
            document.getElementById("notice").innerHTML = "Invalid username or password."
        }
    }
})