const password = document.getElementById("password");
const strengthText = document.getElementById("strengthText");

password.addEventListener("input", () => {

    let value = password.value;

    if(value.length < 5){
        strengthText.innerHTML = "Weak";
        strengthText.style.color = "red";
    }
    else if(value.length < 8){
        strengthText.innerHTML = "Medium";
        strengthText.style.color = "orange";
    }
    else{
        strengthText.innerHTML = "Strong";
        strengthText.style.color = "lightgreen";
    }

});

// Show/Hide Password
function togglePassword(){

    if(password.type === "password"){
        password.type = "text";
    }
    else{
        password.type = "password";
    }

}

// Form Validation
document.getElementById("authForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let pass = document.getElementById("password").value.trim();
    let confirmPass = document.getElementById("confirmPassword").value.trim();

    let message = document.getElementById("message");

    if(username === "" || email === "" || pass === "" || confirmPass === ""){

        message.innerHTML = "Please fill all fields!";
        message.style.color = "red";

        return;
    }

    if(pass !== confirmPass){

        message.innerHTML = "Passwords do not match!";
        message.style.color = "red";

        return;
    }

    if(pass.length < 6){

        message.innerHTML = "Password must be at least 6 characters!";
        message.style.color = "orange";

        return;
    }

    message.innerHTML = "Registration Successful 🚀";
    message.style.color = "lightgreen";

});