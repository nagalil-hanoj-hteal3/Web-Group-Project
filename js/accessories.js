let apron=[
    {
        name:'Cheese',
        id:1 ,
        price: 20, 
        img:'/images/Accessories/Apron/Apron 1/White.jpg' 
    }, 
    {
        name:'Half-Body',
        id:2,
        price: 14, 
        img:'/images/Accessories/Apron/Apron 2/White.jpg' 
    }
]

let apron_container= document.querySelector('.apron'); 

for (let item of apron){
    apron_container.innerHTML+=`<td><img data-itemid="${item.id}" src="${item.img}"  width="150px" height="190px"/><br>
    <label>${item.name}</label><br><label>$${item.price}</label>
    <button>Add to Cart</button>
    </td>`
}


let beanie=[
    {
        name:'FitRat',
        id:1 ,
        price: 15, 
        img:"/images/Accessories/Beanie/Beanie 1/White.jpg" 
    },
    {
        name:'FitRat Name',
        id:2,
        price: 15, 
        img:"/images/Accessories/Beanie/Beanie 2/White.jpg" 
    },
    {
        name:'FitRat 2023',
        id:3,
        price: 15, 
        img:"/images/Accessories/Beanie/Beanie 3/White.jpg" 
    }
]

let beanie_container= document.querySelector('.beanie'); 

for (let item of beanie){
    beanie_container.innerHTML+=`<td><img data-itemid="${item.id}" src="${item.img}"  width="150px" height="190px"/><br>
    <label>${item.name}</label><br><label>$${item.price}</label>
    <button>Add to Cart</button>
    </td>`
}

let hat=[
    {
        name:'FitRat Logo',
        id:1,
        price: 15, 
        img:"/images/Accessories/Hat/Hat 1/Black+Char.jpg" 
    }
]
let hat_container= document.querySelector('.hat'); 

for (let item of hat){
    hat_container.innerHTML+=`<td><img data-itemid="${item.id}" src="${item.img}"  width="150px" height="190px"/><br>
    <label>${item.name}</label><br><label>$${item.price}</label>
    <button>Add to Cart</button>
    </td>`
}

let mug=[
    {
        name:'FitRat Logo',
        id:1,
        price: 5, 
        img:"/images/Accessories/Mugs/Mug 1/Black.jpg" 
    }, 
    {
        name:'FitRat Name',
        id:2,
        price: 5, 
        img:"/images/Accessories/Mugs/Mug 2/Black.jpg" 
    },
    {
        name:'Motivational',
        id:3,
        price: 5, 
        img:"/images/Accessories/Mugs/Mug 3/Black.jpg" 
    }, 
    {
        name:'Legendary',
        id:4,
        price: 5, 
        img:"/images/Accessories/Mugs/Mug 4/Black.jpg" 
    },
    {
        name:'Motivation Logo',
        id:5,
        price: 5, 
        img:"/images/Accessories/Mugs/Mug 5/Black.jpg" 
    }
]

let mug_container= document.querySelector('.mug'); 

for (let item of mug){
    mug_container.innerHTML+=`<td><img data-itemid="${item.id}" src="${item.img}"  width="150px" height="190px"/><br>
    <label>${item.name}</label><br><label>$${item.price}</label>
    <button>Add to Cart</button>
    </td>`
}

let stickers=[
    {
        name:'Year',
        id:1,
        price: 3, 
        img:"/images/Accessories/Stickers/Sticker 1/White.jpg" 
    },
    {
        name:'FitRat Logo',
        id:2,
        price: 3, 
        img:"/images/Accessories/Stickers/Sticker 2/White.jpg" 
    }
]

let sticker_container= document.querySelector('.stickers'); 
for (let item of stickers){
    sticker_container.innerHTML+=`<td><img data-itemid="${item.id}" src="${item.img}"  width="150px" height="190px"/><br>
    <label>${item.name}</label><br><label>$${item.price}</label>
    <button>Add to Cart</button>
    </td>`
}

//function to add to cart
const buttons=document.querySelectorAll("button"); 
for(let i=0; i<buttons.length; i++){
    console.log("accessories buttons testing"); 
    buttons[i].addEventListener('click', function(event){
        let temp_arr= JSON.parse(localStorage.getItem('shopping_cart_items')); 
        if(!temp_arr){
            temp_arr=[];
        }
        console.log("Button " +i); 
        if(i===0 || i===1){
            temp_arr.push(apron[i]); 
            localStorage.setItem('shopping_cart_items', JSON.stringify(temp_arr)); 
        }
        else if(i === 2|| i===3|| i===4){
            temp_arr.push(beanie[i]);
            localStorage.setItem('shopping_cart_items', JSON.stringify(temp_arr)); 
        }
        else if(i===5){
            temp_arr.push(hat[i]);
            localStorage.setItem('shopping_cart_items', JSON.stringify(temp_arr));
        }
        else if(i=== 11 || i===12){
            temp_arr.push(stickers[i]);
            localStorage.setItem('shopping_cart_items', JSON.stringify(temp_arr));
        }
        else{
            temp_arr.push(mug[i]);
            localStorage.setItem('shopping_cart_items', JSON.stringify(temp_arr));
        }
        event.preventDefault();
    })

}