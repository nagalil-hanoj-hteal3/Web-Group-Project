<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>FitRat Login</title>
    <link rel="stylesheet" href ="/css/cart.css">
    <link rel="icon" href="https://cdn.discordapp.com/attachments/1081329569258287296/1086137061750353971/image.png">
</head>
<body>

<?php
if (empty($_GET['full_name'])||empty($_GET['email'])||empty($_GET['cname'])||empty($_GET['cnumber'])||empty($_GET['date'])||empty($_GET['cvv']))
{
  echo "<script>alert('Please fill out whole form!!');</script>";
}

//connecting to the database with PDO
require_once("config.php");

// getting values
$Name=$_GET['full_name'];
$Email = $_GET['email'];
$Card_Name=$_GET['cname'];
$Card_Number = $_GET['cnumber'];
$Date=$_GET['date'];
$CVV = $_GET['cvv'];

$TableName = "payment";

//insert payment data to the table
//$sql = "INSERT INTO $TableName VALUES (NULL, '$Email','$Password',NULL,NULL,NULL,NULL,NULL,NULL,NULL)";

$sql = "INSERT INTO $TableName (full_name, email, card_holder, card_number, expiration, cvv) VALUES ('$Name','$Email', '$Card_Name', '$Card_Number' , '$Date', '$CVV')";


$pdo->exec($sql);

//retrieve the name
$sql = "SELECT * FROM $TableName WHERE full_name = '$Name'";
$result= $pdo->query($sql);
if($row = $result->fetch())
  $user = $row['full_name'];

header('Location: /php/paymentDone.php');

// closes connection and frees the resources used by the PDO object
$pdo = null;
?>


<p>Your order has been processed, <strong><?=$Name?></strong>!</p>
<a href="/html/index.html">Click here to go back to homepage</a>

</body>
</html>