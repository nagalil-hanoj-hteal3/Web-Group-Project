/* function for toggling the menu button */

const menuToggle= document.querySelector('.toggle')
const showcase= document.querySelector('.showcase')

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active')
    showcase.classList.toggle('active')
})
/***************/



/* Get the ID of the element */
let element_id; //the id of the element 

function getID(obj){
    element_id= obj.id; 
    console.log(element_id);
}


// const shirt_1= document.getElementById("men_shirt_1"); 


// /* function for hovering over item to see different colors*/
// shirt_1.addEventListener("mouseover", mouseOver);
// shirt_1.addEventListener("mouseout", mouseOut); 

// function mouseOver(){
//     shirt_1.src="https://cdn.discordapp.com/attachments/1090035359133474856/1092276369314037850/White.jpg"; 
// }

// function mouseOut(){
//     shirt_1.src="https://cdn.discordapp.com/attachments/1081329569258287296/1090769648364040402/White.jpg"; 
// }

/**********************/

//put all the data into the array 
// let items=[
//     {name:'FitRat Motto',
//     id:1,
//     price:20,
//     img:'https://cdn.discordapp.com/attachments/1090035359133474856/1092276369314037850/White.jpg',
//     img_hover:'https://cdn.discordapp.com/attachments/1081329569258287296/1090769648364040402/White.jpg'}
// ]

// let container=document.querySelector('#test-container')
// for (let item of items){
//     container.innerHTML+=`<td>
//     <a href="men_shirt_1.html">
//     <img onmouseout="mouseOut(event)" onmouseover="mouseOver(event)" data-itemid="${item.id}" src="https://cdn.discordapp.com/attachments/1081329569258287296/1090769648364040402/White.jpg" width="210px" height="250px"></a>
//     </td>`
// }
function displayShirt(){

}
function displayHoodie(){

}


//better to have different js file for different html that corresponding to the js 
//these function will be called for different html that corresponding to the function
//in this function, we can have multiple dataset 
function displayWomenTop(){
    let women_shirt_items=[
        {
            name:'women_shirt1',
            id:1, 
            price:20, 
            img:'/images/Women/Tops/Women_Shirt/Shirt 1/White.jpg', 
            img_hover:'/images/Women/Tops/Women_Shirt/Shirt 1/Black.jpg'
        }
    ]
    let women_shirt_item_container=document.querySelector('.women_shirt_items')

    //this function will generate all the items
    //instead if having all the items hard coded, we can list all the items in the data set
    for (let item of women_shirt_items){
        women_shirt_item_container.innerHTML+=`<span><img onmouseout="mouseOut(event)" onmouseover="mouseOver(event)" data-itemid="${item.id}" src="${item.img}"  width="210px" height="250px"/></span>`
    }
}

//these two functions are reuseable 
//just need to find a way to replace the name of the dataset
function mouseOut(event){
    event.target.src=women_shirt_items.find(obj=>obj.id==event.target.dataset.itemid).img
}
function mouseOver(event){
    event.target.src=women_shirt_items.find(obj=>obj.id==event.target.dataset.itemid).img_hover
}

