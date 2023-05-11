<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User</title>

    <link rel="stylesheet" href ="/css/user_page.css">
    <link rel="icon" href="https://cdn.discordapp.com/attachments/1081329569258287296/1086137061750353971/image.png">

</head>
<body>

    <section class="showcase">
            <div class="toggle"></div>
            
            <div class="music">
                <a hidden>
                <audio controls loop autsoplay> 
                    <source src="/music/feeling_happy.wav" type="audio/wav" >
                </audio>
                </a>
            </div>

            <?php
                // Check if the user is logged in
                if(isset($_COOKIE['Username'])) {
                    $Username = $_COOKIE['Username'];
                } 
            ?>

             <p>Welcome <strong><?=$Username?></strong>!</p>
             <button onclick="location.href='/php/logout.php'">Log Out</button>

    </section>

    <div class="menu">
        <ul>
            <li><a href="/html/index.html"> 
                <img src="https://cdn.discordapp.com/attachments/1081329569258287296/1086137061750353971/image.png" width="50" height="50">
            </a></li>
            <li><div class ="dropdown" >
                <div href="/html/women.html">Women</div>  
                <div class="dropdown_item">
                    <a href="/html/women_top.html">Tops</a>
                    <a href="/html/women_bottom.html">Bottoms</a> 
                </div> 
            </div> </li>
    
            <li><div class ="dropdown" >
                <div href="/html/men.html">Men</div>  
                <div class="dropdown_item">
                    <a href="/html/men_top.html">Tops</a>
                    <a href="/html/men_bottom.html">Bottoms</a> 
                </div></div></li> 
            
                <li><a href="/html/accessories.html" >Accessories</a> </li>
                <li><a href="/html/sales.html" >Sales</a></li>
                <li><a href="/html/customerservice.html" >Services</a></li>
                <li><a href="/html/about-us.html">About Us</a> </li><br><br>
                <li><a href="/html/shopping_cart.html"><br><br><br>
                    <span class="shopping_cart_pic">
                        <img class="shopping_cart_pic" src="/images/shopping_bag.png" width="50" height="50">
                        <span class="cart_count"></span>
                    </span>
                <a href="user_page.php"><img src="/images/login.png" width="50" height="50"></a>
                </a></li>
        </ul>
    </div>
    <script src="/js/menu.js" defer></script>
</body>
</html>