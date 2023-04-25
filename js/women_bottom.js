
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
        name:'FitRat Exclusive',
        id:1, 
        price:35, 
        img:'/images/Women/Women_Sweatpants/Sweatpants 1/Black.jpg', 
        img_hover:'/images/Women/Women_Sweatpants/Sweatpants 1/Green.jpg'
    },
    {
        name:'FitRat Exclusive',
        id:2, 
        price:35, 
        img:'/images/Women/Women_Sweatpants/Sweatpants 2/Black.jpg', 
        img_hover:'/images/Women/Women_Sweatpants/Sweatpants 2/Grey.jpg'
    },
    {
        name:'FitRat Exclusive',
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

//empty array to contain items from women section 

let counter = 0;
  

const cart_buttons=document.querySelectorAll("button"); 

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

        //convert dataset into JSON string
        // const women_sweatpant_items_String=JSON.stringify(women_sweatpant_items[i]);
        // localStorage.setItem("shopping_cart_items",women_sweatpant_items_String );
        // const stored_dataset= localStorage.getItem("shopping_cart_items");
        // const read_dataset= JSON.parse(stored_dataset); 
        console.log(cart_items[i].img); 

        //testing to output the items in cart after clicking add to cart 
        //document.getElementById("cart_items").innerHTML+=`<img src="${cart_items[i].img}" width="150px" height="210px"></img>`;

        event.preventDefault(); 
    })
}




