//Global variables
const drinkList = () =>document.getElementById("drinks-list");
const mainDiv=()=>document.getElementById("main");

//Event Handler
const renderDrinksPage=(e)=>{
    e.preventDefault();
    alert('hi');
}


//Event Listener
const attachDrinksListEvent=()=>{
    drinkList().addEventListener('click',renderDrinksPage)
}

document.addEventListener('DOMContentLoaded',()=>{
    attachDrinksListEvent();

    
})


