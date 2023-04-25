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