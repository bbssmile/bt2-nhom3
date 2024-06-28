<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="register.css">
</head>
<style></style>
<body>
<div class="container">
    
    <form id="form" action="/">
        <h1>Registration</h1>
        <p>Please fill in this form to create an account.</p>
        <div class="input-control">
            <label for="user"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="user" id="user">
            <div class="error"></div>
        </div>
        <div class="input-control">
            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" id="email">
            <div class="error"></div>
        </div>
        <div class="input-control">
            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" id="psw">
            <div class="error"></div>
        </div>   
        <div class="input-control">
            <label for="psw-repeat"><b>Repeat Password</b></label>
            <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat">
            <div class="error"></div>
        </div>
        <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
        <button type="submit" name="submit" >Sign up </button>
    </form>
</div>

<script defer src="script.js"></script>
</body>
</html>
