
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
        <button>Add to Cart</button>
        </td>`
    }

function mouseOut_sweatpant(event){
    event.target.src=women_sweatpant_items.find(obj=>obj.id==event.target.dataset.itemid).img
}
function mouseOver_sweatpant(event){
    event.target.src=women_sweatpant_items.find(obj=>obj.id==event.target.dataset.itemid).img_hover
}


