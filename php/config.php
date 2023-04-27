<?php
    $connString = "mysql:host=localhost; dbname=project";
    $user="kyrstnhall";
    $pass="asian._.dallas";

    $pdo=new pdo($connString,$user,$pass);

    $pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);//useful during initial development and debugging
