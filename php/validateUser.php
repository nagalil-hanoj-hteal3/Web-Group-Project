<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>FitRat Login</title>
</head>
<body>
<?php
if (empty($_GET['username'])||empty($_GET['password']))
    exit ("<p> You must enter values in all fields! Click your browser's Back button to return to the previous page.</p>");

$Username=$_GET['username'];
$Password = $_GET['password'];

//connecting to the database with PDO
require_once("config.php");

$TableName = "users";


$sql = "SELECT * FROM $TableName 
        WHERE userName = '$Username' 
        AND password = '$Password'";
$result = $pdo->query($sql);

//echo "<pre>$sql<pre>";


if(!$row = $result->fetch())
   exit("You must enter a valid username and password. Click your browser's Back button to return to the previous page.</p>");
else {
    $userID = $row['id'];}

 // closes connection and frees the resources used by the PDO object
 $pdo = null;
?>

<h2> Login Successful!</h2>

</body>
</html>