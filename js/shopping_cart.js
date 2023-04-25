window.onload= function(){
    let items_in_cart= JSON.parse(localStorage.getItem('shopping_cart_items'))
    console.log('shopping cart testing');

    if(!items_in_cart){}
    else{
    for(let i=0; i<items_in_cart.length;i++){
        console.log(items_in_cart[i].img); 
        document.getElementById('item_in_cart').innerHTML+=`<img src="${items_in_cart[i].img}" width="150px" height="210px"></img><br>`
        }
    }
}
