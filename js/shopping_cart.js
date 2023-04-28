window.onload= function(){
    let items_in_cart= JSON.parse(localStorage.getItem('shopping_cart_items'))
    console.log('shopping cart testing');

    if(!items_in_cart){}
    else{
    for(let i=0; i<items_in_cart.length;i++){
        console.log(items_in_cart[i].img); 
        document.getElementById('item_in_cart').innerHTML+=
        `<div id="items_in_cart_2">
        <img src="${items_in_cart[i].img}" width="40px" height="70px" ></img>
        <label id="name">${items_in_cart[i].name}</label>
        <br>
        <label id="price">$${items_in_cart[i].price}</label>
        <button>Remove</button></br>
        </div></br></br>`
        }
    }
}
