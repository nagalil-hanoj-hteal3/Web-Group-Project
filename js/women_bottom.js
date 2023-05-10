
/* function for toggling the menu button */

const menuToggle= document.querySelector('.toggle')
const showcase= document.querySelector('.showcase')

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active')
    showcase.classList.toggle('active')
})
/***************/

//dataset for women sweatpants 
let women_sweatpant_items= [
    {
        name:'FitRat Edition I',
        id:1, 
        price:35, 
        img:'/images/Women/Women_Sweatpants/Sweatpants 1/Black.jpg', 
        img_hover:'/images/Women/Women_Sweatpants/Sweatpants 1/Green.jpg'
    },
    {
        name:'FitRat Edition II',
        id:2, 
        price:35, 
        img:'/images/Women/Women_Sweatpants/Sweatpants 2/Black.jpg', 
        img_hover:'/images/Women/Women_Sweatpants/Sweatpants 2/Grey.jpg'
    },
    {
        name:'FitRat Edition III',
        id:3, 
        price:35, 
        img:'/images/Women/Women_Sweatpants/Sweatpants 3/Black.jpg', 
        img_hover:'/images/Women/Women_Sweatpants/Sweatpants 3/Red.jpg'
    },

]

let women_sweatpant_item_container= document.querySelector('.women_sweatpant_items')
  
    for (let item of women_sweatpant_items){
        women_sweatpant_item_container.innerHTML+=`<td><img onmouseout="mouseOut_sweatpant(event)" onmouseover="mouseOver_sweatpant(event)" data-itemid="${item.id}" src="${item.img}"  width="150px" height="210px"/><br>
        <label>${item.name}</label><br><label>$${item.price}</label>
        <button>Add To Cart</button>
        </td>`
    }

function mouseOut_sweatpant(event){
    event.target.src=women_sweatpant_items.find(obj=>obj.id==event.target.dataset.itemid).img
}
function mouseOver_sweatpant(event){
    event.target.src=women_sweatpant_items.find(obj=>obj.id==event.target.dataset.itemid).img_hover
}

const cart_buttons=document.querySelectorAll("button"); 
var cartCount=JSON.parse(localStorage.getItem('cart_count')); 

for(let i=0; i<cart_buttons.length; i++){
    console.log("women sweatpant testing")
    cart_buttons[i].addEventListener("click", function(event){
        let temp_arr=JSON.parse(localStorage.getItem('shopping_cart_items'))
        if (!temp_arr){
            temp_arr=[]
        }
        
        temp_arr.push(women_sweatpant_items[i])
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





