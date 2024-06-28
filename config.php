<?php
$servername = "db"; 
$username = "my"; // Tên người dùng MySQL
$password = "31072003"; // Mật khẩu MySQL
$dbname = "mydatabase"; // Tên cơ sở dữ liệu MySQL

// Tạo kết nối
$conn = mysqli_connect($servername, $username, $password, $dbname);

$username = $_POST['user'];
$email = $_POST['email'];
$password = $_POST['password'];

$verify_query = mysqli_query($conn, "SELECT email FROM users WHERE email='$email' OR name='$username'");

if (mysqli_num_rows($verify_query) != 0)
{
    echo "This email or user is used, Try another one, please!";      
}
else 
{
    mysqli_query($conn, "INSERT INTO users(name, email, password) VALUES ('$username', '$email' , '$password')") or die("Error occured");
    echo "success!!";
}
?>