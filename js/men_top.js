

//dataset for men shirts
let men_shirt_items=[
    {
        name:'FitRat Edition I',
        id:1, 
        price:20, 
        img:'/images/Men/Tops/Men_Shirt/Shirt 1/White.jpg', 
        img_hover:'/images/Men/Tops/Men_Shirt/Shirt 1/Light_Blue.jpg'
    },
    {
        name:'FitRat Edition WTF',
        id:2, 
        price:20, 
        img:'/images/Men/Tops/Men_Shirt/Shirt 2/White.jpg', 
        img_hover:'/images/Men/Tops/Men_Shirt/Shirt 2/Military_Green.jpg'
    },
    {
        name:'FitRat Edition II',
        id:3, 
        price:20, 
        img:'/images/Men/Tops/Men_Shirt/Shirt 3/White.jpg', 
        img_hover:'/images/Men/Tops/Men_Shirt/Shirt 3/Military_Green.jpg'
    },
    {
        name:'FitRat Motto',
        id:4, 
        price:20, 
        img:'/images/Men/Tops/Men_Shirt/Shirt 4/White.jpg', 
        img_hover:'/images/Men/Tops/Men_Shirt/Shirt 4/Light_Pink.jpg'
    },
    {
        name:'FitRat SE Limited',
        id:5, 
        price:20, 
        img:'/images/Men/Tops/Men_Shirt/Shirt 5/White.png', 
        img_hover:'/images/Men/Tops/Men_Shirt/Shirt 5/Sand.png'
    },
    {
        name:'FitRat Blank',
        id:6, 
        price:15, 
        img:'/images/Men/Tops/Men_Shirt/Shirt 6/White.jpg', 
        img_hover:'/images/Men/Tops/Men_Shirt/Shirt 6/Grey.jpg'
    }
]

/** Function for shirt*/
let men_shirt_items_container= document.querySelector('.men_shirt_items');

function mouseOut_shirt(event){
    event.target.src=men_shirt_items.find(obj=>obj.id==event.target.dataset.itemid).img
}
function mouseOver_shirt(event){
    event.target.src=men_shirt_items.find(obj=>obj.id==event.target.dataset.itemid).img_hover
}
for (let item of men_shirt_items){
    men_shirt_items_container.innerHTML+=`<td><img onmouseout="mouseOut_shirt(event)" onmouseover="mouseOver_shirt(event)" data-itemid="${item.id}" src="${item.img}"  width="150px" height="190px"/><br>
    <label>${item.name}</label><br><label>$${item.price}</label>
    <button>Add To Cart</button>
    </td>`
}

//dataset for hoodie
let men_hoodie_items=[
    {
        name:'FitRat Chest Logo',
        id:1, 
        price:40, 
        img:'/images/Men/Tops/Men_Hoodie/Hoodie 1/White.jpg', 
        img_hover:'/images/Men/Tops/Men_Hoodie/Hoodie 1/Military_Green.jpg'
    },
    {
        name:'Blank Hoodie',
        id:2, 
        price:35, 
        img:'/images/Men/Tops/Men_Hoodie/Hoodie 2/White.jpg', 
        img_hover:'/images/Men/Tops/Men_Hoodie/Hoodie 2/Black.jpg'
    },
    {
        name:'Powerlifting Rat',
        id:3, 
        price:40, 
        img:'/images/Men/Tops/Men_Hoodie/Hoodie 3/White.jpg', 
        img_hover:'/images/Men/Tops/Men_Hoodie/Hoodie 3/Sand.jpg'
    },
    {
        name:'Believe in yourself',
        id:4, 
        price:40, 
        img:'/images/Men/Tops/Men_Hoodie/Hoodie 4/White.jpg', 
        img_hover:'/images/Men/Tops/Men_Hoodie/Hoodie 4/Purple.jpg'
    },
    {
        name:'FitRat Record',
        id:5, 
        price:40, 
        img:'/images/Men//Tops/Men_Hoodie/Hoodie 5/White.jpg', 
        img_hover:'/images/Men/Tops/Men_Hoodie/Hoodie 5/Carolina_Blue.jpg'
    },
]

/** function for hoodie */
let men_hoodie_items_container=document.querySelector('.men_hoodie_items'); 

function mouseOut_hoodie(event){
    event.target.src=men_hoodie_items.find(obj=>obj.id==event.target.dataset.itemid).img
}
function mouseOver_hoodie(event){
    event.target.src=men_hoodie_items.find(obj=>obj.id==event.target.dataset.itemid).img_hover
}
for (let item of men_hoodie_items){
    men_hoodie_items_container.innerHTML+=`<td><img onmouseout="mouseOut_hoodie(event)" onmouseover="mouseOver_hoodie(event)" data-itemid="${item.id}" src="${item.img}"  width="150px" height="190px"/><br>
    <label>${item.name}</label><br><label>$${item.price}</label>
    <button>Add To Cart</button>
    </td>`
}


//dataset for longsleeve 
let men_longsleeve_items=[
    {
        name:'Blank Longsleeve',
        id:1, 
        price:30, 
        img:'/images/Men/Tops/Men_Longsleeve/Longsleeve 1/White.jpg', 
        img_hover:'/images/Men/Tops/Men_Longsleeve/Longsleeve 1/Black.jpg'
    },
    {
        name:'FitRat Longsleeve',
        id:2, 
        price:30, 
        img:'/images/Men/Tops/Men_Longsleeve/Longsleeve 2/White.jpg', 
        img_hover:'/images/Men/Tops/Men_Longsleeve/Longsleeve 2/Navy.jpg'
    },
    {
        name:'FitRat Chest Logo',
        id:3, 
        price:30, 
        img:'/images/Men/Tops/Men_Longsleeve/Longsleeve 3/White.jpg', 
        img_hover:'/images/Men/Tops/Men_Longsleeve/Longsleeve 3/Maroon.jpg'
    }
]

/** function for longsleeve */
let men_longsleeve_items_container=document.querySelector('.men_longsleeve_items'); 

function mouseOut_longsleeve(event){
    event.target.src=men_longsleeve_items.find(obj=>obj.id==event.target.dataset.itemid).img
}
function mouseOver_longsleeve(event){
    event.target.src=men_longsleeve_items.find(obj=>obj.id==event.target.dataset.itemid).img_hover
}
for (let item of men_longsleeve_items){
    men_longsleeve_items_container.innerHTML+=`<td><img onmouseout="mouseOut_longsleeve(event)" onmouseover="mouseOver_longsleeve(event)" data-itemid="${item.id}" src="${item.img}"  width="150px" height="190px"/><br>
    <label>${item.name}</label><br><label>$${item.price}</label>
    <button>Add To Cart</button>
    </td>`
}

//dataset for tanktop 
let men_tanktop_items=[
    {
        name:'Blank Tanktop',
        id:1, 
        price:15, 
        img:'/images/Men/Tops/Men_Tanktop/Tanktop 1/White.jpg', 
        img_hover:'/images/Men/Tops/Men_Tanktop/Tanktop 1/Black.jpg'
    },
    {
        name:'Logo Tanktop',
        id:2, 
        price:20, 
        img:'/images/Men/Tops/Men_Tanktop/Tanktop 2/White.jpg', 
        img_hover:'/images/Men/Tops/Men_Tanktop/Tanktop 2/Navy.jpg'
    },
]

/** function for longsleeve */
let men_tanktop_items_container=document.querySelector('.men_tanktop_items'); 

function mouseOut_tanktop(event){
    event.target.src=men_tanktop_items.find(obj=>obj.id==event.target.dataset.itemid).img
}
function mouseOver_tanktop(event){
    event.target.src=men_tanktop_items.find(obj=>obj.id==event.target.dataset.itemid).img_hover
}
for (let item of men_tanktop_items){
    men_tanktop_items_container.innerHTML+=`<td><img onmouseout="mouseOut_tanktop(event)" onmouseover="mouseOver_tanktop(event)" data-itemid="${item.id}" src="${item.img}"  width="130px" height="190px"/><br>
    <label>${item.name}</label><br><label>$${item.price}</label>
    <button>Add To Cart</button>
    </td>`
}

//local storage
const cart_buttons= document.querySelectorAll("button"); 

for(let i=0; i< cart_buttons.length; i++){
    console.log("men testing"); 
    cart_buttons[i].addEventListener("click", function (event){
        console.log(i); 
        let temp_arr= JSON.parse(localStorage.getItem('shopping_cart_items')); 
        if(!temp_arr){
            temp_arr=[]; 
        }
        if(i>= 0 && i<=5 ){
            console.log("shirt");
            temp_arr.push(men_shirt_items[i]); 
            localStorage.setItem('shopping_cart_items',JSON.stringify(temp_arr));
        }
        else if(i>=6 && i<=8){
            console.log("sweat");
            temp_arr.push(men_longsleeve_items[i-6]); 
            localStorage.setItem('shopping_cart_items',JSON.stringify(temp_arr));
        }
        else if(i>=9 && i<= 13){
            console.log("hoodie");
            temp_arr.push(men_hoodie_items[i-9]); 
            localStorage.setItem('shopping_cart_items',JSON.stringify(temp_arr));
        }
        else{
            console.log("tanktops");
            temp_arr.push(men_tanktop_items[i-14]); 
            localStorage.setItem('shopping_cart_items',JSON.stringify(temp_arr));
        }
        event.preventDefault(); 

    })
}