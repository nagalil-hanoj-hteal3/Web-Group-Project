let men_sweatpant_items=[
    {
        name:'Clothed Sweatpant',
        id:1, 
        price:20, 
        img:'/images/Men/Men_Sweatpants/Sweatpants 1/Black.jpg', 
        img_hover:'/images/Men/Men_Sweatpants/Sweatpants 1/Grey.jpg'
    },
    {
        name:'Heated Sweatpant',
        id:2, 
        price:25, 
        img:'/images/Men/Men_Sweatpants/Sweatpants 2/Black.jpg', 
        img_hover:'/images/Men/Men_Sweatpants/Sweatpants 2/Maroon.jpg'
    }
]

/* function for sweatpants */
let men_sweatpant_items_container=document.querySelector('.men_sweatpant_items'); 

function mouseOut_sweatpant(event){
    event.target.src=men_sweatpant_items.find(obj=>obj.id==event.target.dataset.itemid).img
}
function mouseOver_sweatpant(event){
    event.target.src=men_sweatpant_items.find(obj=>obj.id==event.target.dataset.itemid).img_hover
}
for (let item of men_sweatpant_items){
    men_sweatpant_items_container.innerHTML+=`<td><img onmouseout="mouseOut_sweatpant(event)" onmouseover="mouseOver_sweatpant(event)" data-itemid="${item.id}" src="${item.img}"  width="150px" height="190px"/><br>
    <label>${item.name}</label><br><label>$${item.price}</label>
    <button>Add To Cart</button>
    </td>`
}

//cartcount
var cartCount=JSON.parse(localStorage.getItem('cart_count')); 


const cart_buttons=document.querySelectorAll("button"); 

for(let i=0; i<cart_buttons.length; i++){
    console.log("men sweatpant testing")
    cart_buttons[i].addEventListener("click", function(event){
        let temp_arr=JSON.parse(localStorage.getItem('shopping_cart_items'))
        if (!temp_arr){
            temp_arr=[]
        }
        
        temp_arr.push(men_sweatpant_items[i])
        localStorage.setItem('shopping_cart_items',JSON.stringify(temp_arr))
        const cart_items= JSON.parse(localStorage.getItem('shopping_cart_items')); 
        console.log(cart_items[i].img); 

        if(cartCount === NaN){
            cartCount=0; 
        }
        //increment cartCount
        cartCount++ ; 
        localStorage.setItem('cart_count', cartCount);
        document.querySelector('.cart_count').innerHTML=cartCount;

        event.preventDefault(); 
    })
}




