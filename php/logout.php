<?php
    session_start();
    session_destroy();
    setcookie('Username', '', time() - 3600, '/');
    header("Location: /html/index.html");
    exit;
?>