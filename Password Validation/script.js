usernameField = document.querySelector("#username")
passwordField = document.querySelector("#password")
let pass = document.querySelector("#pass")


function validatePassword() {
    username = usernameField.value
    password = passwordField.value

    if (password === "") {
        pass.textContent = "Password cannot be empty";
    } else if (password.length < 6) {
        pass.textContent = "Password must be at least 6 characters";
    } else if (!/[A-Z]/.test(password)) {
        pass.textContent = "Password must be at least one capital letter";
    } else if (/[0-9]/.test(password)) {
        pass.textContent = "Password must not contain any number";
    } else {
        pass.textContent = "Password is valid";
    }
    passwordField.value = "";
    usernameField.value = "";

}


function reset() {
    usernameField.value = "";
    passwordField.value = "";
    passField.textContent = "";
}


