<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>FitRat Login</title>
    <link rel="stylesheet" href ="/css/login.css">
    <link rel="icon" href="https://cdn.discordapp.com/attachments/1081329569258287296/1086137061750353971/image.png">
</head>
<body>
<div class="center">
        <h1>Login
            <a href="index.html">
            <img src="https://cdn.discordapp.com/attachments/1081329569258287296/1086137061750353971/image.png" width="50px" height="50px">
        </a></h1>
        <form action = "/php/validateUser.php" method="get">
            <div class="txt_field">
                <p>Username:</p>
                <input type="text" name="username" required placeholder="type here">
                <span></span>
            </div>
            <div class="txt_field">
                <p>Password:</p>
                <input type="password" name="password" required placeholder="type here">
                <span></span>
            </div>
            <div class="pass">Forgot Password?</div>
                <input type="submit" name="submit" value="Login">
            <div class="signup_link">Not a member?<a href="register.html"> Register here</a></div>
        </form>
    </div>
    
<?php

session_start();

if (empty($_GET['username'])||empty($_GET['password']))
    exit ('<div class="error-message"><p>You must enter values in all fields! Click your browser\'s Back button to return to the previous page.</p></div>');

$Username=$_GET['username'];
$Password = $_GET['password'];

setcookie("Username",$Username);

//connecting to the database with PDO
require_once("config.php");

$TableName = "users";


$sql = "SELECT * FROM $TableName 
        WHERE userName = '$Username' 
        AND password = '$Password'";
$result = $pdo->query($sql);

//echo "<pre>$sql<pre>";


if(!$row = $result->fetch())
    echo "<script>alert('Invalid username or password. Please try again.');</script>";

else {
    $userID = $row['id'];
        // Redirect to index.html on successful login
        header('Location: /php/user_page.php');
}

 // closes connection and frees the resources used by the PDO object
 $pdo = null;
?>

</body>
</html>