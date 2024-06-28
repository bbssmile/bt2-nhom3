let form = document.getElementById('form');
let username = document.getElementById('user');
let email = document.getElementById('email');
let psw = document.getElementById('psw');
let psw_repeat = document.getElementById('psw-repeat');

form.addEventListener("submit",e => {
    e.preventDefault();
    ValidateInput();
})

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');

}
const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');

}
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const ValidateInput=() => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const pswValue = psw.value.trim();
    const psw_repeatValue = psw_repeat.value.trim();
    let x = 0;
    if (usernameValue === ""){
        setError(username, "Username are required");
    }
    else{
        setSuccess(username);
        x++;
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
        x++;
    }

    if (pswValue === ""){
        setError(psw, "password are required");
    }else if (pswValue.length < 8 ) {
        setError(psw, 'Password must be at least 8 character.');}
    else{
        setSuccess(psw);x++;
    }

    if (psw_repeatValue === ""){
        setError(psw_repeat, "please confirm your password");
    }
    else if (psw_repeatValue !== pswValue) {
        setError(psw_repeat, "Passwords doesn't match");}
    else{
        setSuccess(psw_repeat);x++;
    }

    if (x === 4) {
        const xhttp = new XMLHttpRequest();
        xhttp.open("POST", "config.php");
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.onload = function() {
        alert(this.responseText);
        }
        xhttp.send("user=" + usernameValue + "&email=" + emailValue + "&password=" + pswValue);
    }
    x = 0;
}