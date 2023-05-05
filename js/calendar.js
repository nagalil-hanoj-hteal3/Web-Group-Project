const current_date = document.querySelector(".current-date"),
day = document.querySelector(".dates"),
prevMonth = document.querySelectorAll(".icons span");

//getting the new date, current year and month
let date = new Date(),
current_year = date.getFullYear(),
current_month = date.getMonth();
// current_day = date.getDay() + 26;

//this outputs the current time in the console via inspect
console.log(date);

//to display the month
const month=["January", "February", "March", "April", "May", "June,",
            "July", "August", "September", "October", "November", "December"];

/* use for header of calendar purposes */
const renderCalendar = () => {
    let firstDayOfMonth = new Date(current_year, current_month, 1).getDay(), //to get the month's first day
    lastDateOfMonth = new Date(current_year, current_month + 1, 0).getDate(), //to get the month's last day
    lastDayOfMonth = new Date(current_year, current_month, lastDateOfMonth).getDay(), //to get the last day of month
    lastDate_PreviousMonth = new Date(current_year, current_month, 0).getDate(); //to get the last days of the previous month
    
    let listTag = "";//empty string initialization
    
    //loop for lastDate_PreviousMonth
    for(let i = firstDayOfMonth; i > 0; i--){
        listTag += "<li class='inactive'>" + (lastDate_PreviousMonth - i + 1) + "</li>";
    }


    //console.log(lastDateOfMonth); <-- test output to see on console
    //list the content of all the days in the month
    for(let i = 1; i <= lastDateOfMonth; i++){
        let today = i === date.getDate() && current_month === new Date().getMonth()
                    && current_year === new Date().getFullYear() ? "active" : "";
        //listTag += `<li class="${today}">${i}</li>`;
        listTag += "<li class= " + today + ">" + i + "</li>";

    }

    //output the days that are after the current month to fill in the spaces
    for(let i = lastDayOfMonth; i < 6; i++){
        listTag += "<li class='inactive'>" + (i - lastDayOfMonth + 1) + "</li>";
    }

    current_date.innerText = `${month[current_month]} ${current_year}`;
    day.innerHTML = listTag; 
}
renderCalendar();

prevMonth.forEach(chevron => {
    chevron.addEventListener("click", () =>{
        //console.log(chevron);

        //tenerary operator, similar to if/else
        //note: when clicked, indicate when previous -> true = decrement the month, else = increment the month 
        current_month = chevron.id == "previous" ? current_month - 1: current_month + 1;
        
        //to take care of undefined months that is passed before/after the year
        if(current_month < 0 || current_month > 11){
            date2 = new Date(current_year, current_month);
            current_year = date2.getFullYear();
            current_month = date2.getMonth();
        }else{
            date3 = new Date();
        }
        renderCalendar();
    })
});

//function for popup window 
    const dates= document.getElementsByClassName('dates_not_today'); 
    //console.log(dates);
    for (let i=0; i<dates.length; i++){
        document.addEventListener('click', function(){
        console.log(i);  
    })
}

