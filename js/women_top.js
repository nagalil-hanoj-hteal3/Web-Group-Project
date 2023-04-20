/* function for toggling the menu button */

const menuToggle= document.querySelector('.toggle')
const showcase= document.querySelector('.showcase')

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active')
    showcase.classList.toggle('active')
})
/***************/


//data set that contain all the women shirt 
let women_shirt_items=[
    {
        name:'FitRat Basic',
        id:1, 
        price:20, 
        img:'/images/Women/Tops/Women_Shirt/Shirt 1/White.jpg', 
        img_hover:'/images/Women/Tops/Women_Shirt/Shirt 1/Black.jpg'
    },
    {
        name:'FitRat Edition I',
        id:2, 
        price:20, 
        img:'/images/Women/Tops/Women_Shirt/Shirt 2/White.jpg', 
        img_hover:'/images/Women/Tops/Women_Shirt/Shirt 2/Dark_Heather.jpg'
    },
    {
        name:'FitRat I May Be',
        id:3, 
        price:20, 
        img:'/images/Women/Tops/Women_Shirt/Shirt 3/White.jpg', 
        img_hover:'/images/Women/Tops/Women_Shirt/Shirt 3/Azalea.jpg'
    }, 
    {
        name:'FitRat Edition II',
        id:4, 
        price:20, 
        img:'/images/Women/Tops/Women_Shirt/Shirt 4/White.jpg', 
        img_hover:'/images/Women/Tops/Women_Shirt/Shirt 4/Royal.jpg'
    }, 
    {
        name:'FitRat Exclusive',
        id:5, 
        price:20, 
        img:'/images/Women/Tops/Women_Shirt/Shirt 5/White.jpg', 
        img_hover:'/images/Women/Tops/Women_Shirt/Shirt 5/Cherry_Red.jpg'
    }
]

//use .women_shirt_items because its a class, use # if its id
let women_shirt_item_container=document.querySelector('.women_shirt_items')

//this function will generate all the items
//instead if having all the items hard coded, we can list all the items in the data set
for (let item of women_shirt_items){
    women_shirt_item_container.innerHTML+=`<td><img onmouseout="mouseOut_shirt(event)" onmouseover="mouseOver_shirt(event)" data-itemid="${item.id}" src="${item.img}"  width="150px" height="190px"/><br>
    <label>${item.name}</label><br><label>$${item.price}</label>
    <button>Add to Cart</button>
    </td>`
}
//these two functions are reuseable 
//just need to find a way to replace the name of the dataset
function mouseOut_shirt(event){
    event.target.src=women_shirt_items.find(obj=>obj.id==event.target.dataset.itemid).img
}
function mouseOver_shirt(event){
    event.target.src=women_shirt_items.find(obj=>obj.id==event.target.dataset.itemid).img_hover
}


//dataset for hoodie
//data set that contain all the women shirt 
let women_hoodie_items=[
    {
        name:'FitRat Ride or Die',
        id:1, 
        price:35, 
        img:'/images/Women/Tops/Women_Hoodie/Hoodie 1/Grey.jpg', 
        img_hover:'/images/Women/Tops/Women_Hoodie/Hoodie 1/Maroon.jpg'
    },
    {
        name:'Power over Pain',
        id:2, 
        price:35, 
        img:'/images/Women/Tops/Women_Hoodie/Hoodie 2/Grey.jpg', 
        img_hover:'/images/Women/Tops/Women_Hoodie/Hoodie 2/Light_Pink.jpg'
    },
    {
        name:'Like a Boss',
        id:3, 
        price:35, 
        img:'/images/Women/Tops/Women_Hoodie/Hoodie 3/Grey.jpg', 
        img_hover:'/images/Women/Tops/Women_Hoodie/Hoodie 3/Black.jpg'
    },   
]

let women_hoodie_item_container=document.querySelector('.women_hoodie_items')
//this function will generate all the items
//instead if having all the items hard coded, we can list all the items in the data set
for (let item of women_hoodie_items){
    women_hoodie_item_container.innerHTML+=`<td><img onmouseout="mouseOut_hoodie(event)" onmouseover="mouseOver_hoodie(event)" data-itemid="${item.id}" src="${item.img}"  width="150px" height="190px"/><br>
    <label>${item.name}</label><br><label>$${item.price}</label>
    <button>Add to Cart</button>
    </td>`
}

function mouseOut_hoodie(event){
    event.target.src=women_hoodie_items.find(obj=>obj.id==event.target.dataset.itemid).img
}
function mouseOver_hoodie(event){
    event.target.src=women_hoodie_items.find(obj=>obj.id==event.target.dataset.itemid).img_hover
}

//dataset for tanktop
//data set that contain all the women tanktop
let women_tanktop_items=[
    {
        name:'No Rats Allowed',
        id:1, 
        price:20, 
        img:'/images/Women/Tops/Women_Tanktop/Tanktop 1/Heather_Grey.jpg', 
        img_hover:'/images/Women/Tops/Women_Tanktop/Tanktop 1/Heather_Purple.jpg'
    },
    {
        name:'FitR Basic',
        id:2, 
        price:15, 
        img:'/images/Women/Tops/Women_Tanktop/Tanktop 2/Heather_Grey.jpg', 
        img_hover:'/images/Women/Tops/Women_Tanktop/Tanktop 2/Black.jpg'
    },
    {
        name:'FitRat Edition II',
        id:3, 
        price:20, 
        img:'/images/Women/Tops/Women_Tanktop/Tanktop 3/Heather_Grey.jpg', 
        img_hover:'/images/Women/Tops/Women_Tanktop/Tanktop 3/Heather_Charcoal.jpg'
    },
    {
        name:'Run',
        id:4, 
        price:20, 
        img:'/images/Women/Tops/Women_Tanktop/Tanktop 4/Heather_Grey.jpg', 
        img_hover:'/images/Women/Tops/Women_Tanktop/Tanktop 4/Heather_Fuchsia.jpg'
    },
    {
        name:'FitRat Exclusive',
        id:5, 
        price:20, 
        img:'/images/Women/Tops/Women_Tanktop/Tanktop 5/Heather_Grey.jpg', 
        img_hover:'/images/Women/Tops/Women_Tanktop/Tanktop 5/Heather_Red.jpg'
    },
]

let women_tanktop_item_container=document.querySelector('.women_tanktop_items')
//this function will generate all the items
//instead if having all the items hard coded, we can list all the items in the data set
for (let item of women_tanktop_items){
    women_tanktop_item_container.innerHTML+=`<td><img onmouseout="mouseOut_tanktop(event)" onmouseover="mouseOver_tanktop(event)" data-itemid="${item.id}" src="${item.img}"  width="150px" height="210px"/><br>
    <label>${item.name}</label><br><label>$${item.price}</label>
    <button>Add to Cart</button>
    </td>`
}

function mouseOut_tanktop(event){
    event.target.src=women_tanktop_items.find(obj=>obj.id==event.target.dataset.itemid).img
}
function mouseOver_tanktop(event){
    event.target.src=women_tanktop_items.find(obj=>obj.id==event.target.dataset.itemid).img_hover
}
