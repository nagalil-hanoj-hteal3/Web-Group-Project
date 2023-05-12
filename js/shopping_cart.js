window.onload= function(){
    let total=0; //global variable for the total 
    let items_in_cart= JSON.parse(localStorage.getItem('shopping_cart_items'))
    console.log('shopping cart testing');

    if(!items_in_cart){}
    //generate display  of the item 
    else{
    for(let i=0; i<items_in_cart.length;i++){
        //console.log(items_in_cart[i].img); 
        document.getElementById('item_in_cart').innerHTML+=
        `<div id="items_in_cart_2">
        <img src="${items_in_cart[i].img}" width="60px" height="70px" ></img>
        <label id="name">${items_in_cart[i].name}</label>
        <br>
        <label id="price">$${items_in_cart[i].price}</label>
        <button id="remove">Remove</button></br>
        </div></br></br>`

        //calculate total 
        total+= items_in_cart[i].price; 
        console.log("the total after add= "+ total); 
        }
    }

    //remove item that user want to remove 
    const item_arr= JSON.parse(localStorage.getItem('shopping_cart_items')); //read the localstore and set to array 
    const removeBtn= document.querySelectorAll("#remove"); 
    for(let i=0; i< removeBtn.length; i++){
        console.log("testing remove button"); 
        removeBtn[i].addEventListener("click", function(event){
            //console.log(i); 
            //loop thru the aray to match the id of the item user want to remove 
            // let item_id= item_arr[i].id;
            // console.log("ID of item: "+item_id);  
            //console.log(item_arr); //array of the items in shoppig cart 
            item_arr.splice(i, 1);  
            localStorage.setItem('shopping_cart_items',JSON.stringify(item_arr)); 
            
            //live load the page 
            location.reload(); 
            total = total - item_arr[i]; 
            console.log("the total after remove= "+total); 

            //decrease cartCount
            var cart_count2= JSON.parse(localStorage.getItem('cart_count'));
            cart_count2= cart_count2-1; 
            localStorage.setItem('cart_count',JSON.stringify(cart_count2));

        })
    }
    document.getElementById('subtotal').innerHTML= `$`+total; 

   var cart_count1= JSON.parse(localStorage.getItem('cart_count')); 

    const payBtn= document.getElementById('confirm'); 
    payBtn.addEventListener("click", function(){
        location.reload();
        console.log("before payment"); 
        item_arr.splice(0); 
        localStorage.setItem('shopping_cart_items',JSON.stringify(item_arr));
        
        cart_count1=0; 
        localStorage.setItem('cart_count',JSON.stringify(cart_count1));  

        console.log("PAID");
    })
    
}
