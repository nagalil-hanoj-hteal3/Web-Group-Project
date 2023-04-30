
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

// //find indexedDB 
// const indexedDB= window.indexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB; 

// //request to open the database 
// const request= indexedDB.open("cartDB", 1); 

// //check for error
// request.onerror= function(event){
//     console.error("An error occured"); 
//     console.error(event); 
// }

// //this function will run when new db is created or upgrade the version 
// request.onupgradeneeded = function (){
//     const db = request.result; 
//     const store = db.createObjectStore("items", {keyPath: "id"}); 
//     store.createIndex("item_name", ["name"], {unique: false});  //key that unique 
//     store.createIndex("id_and_name", ["id", "name"], { 
//         unique: false, 
//     });  //compound key 
//     store.createIndex("img", ["img"], {unique :false}); 
// }; 

//the operation will occurr in this function 
// request.onsuccess = function (){
//     const db = request.result; 
//     const transaction = db.transaction(["items"], "readwrite"); 

//     const store = transaction.objectStore("items"); 
//     const nameIndex= store.index("item_name"); 
//     const IDnameIndex= store.index("id_and_name"); 
//     const imgIndex= store.index("img"); 

//     //put data into the database 
//     const cart_buttons= document.querySelectorAll("button"); 
//     for(let i=0; i<cart_buttons.length; i++){
//         cart_buttons[i].addEventListener("click", function(event){
//             store.put({id: i , name: women_sweatpant_items[i].name, img: women_sweatpant_items[i].img}); 
//             event.preventDefault(); 
//         })
//     }
//     const idQuery = store.getAll(); //get method is used to query 
//     const imgQuery= store.getAll(); 
//     idQuery.onsuccess = function (){
//         console.log('idQuery', idQuery.result); 
//     };
//     imgQuery.onsuccess = function(){
//         console.log('imgQuery', imgQuery.result); 
//     };

//     transaction.oncomplete = function(){
//         db.close(); 
//     };
// }
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
        console.log(cart_items[i].img); 
        event.preventDefault(); 
    })
}




