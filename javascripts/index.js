//Global variables
const drinkList = () =>document.getElementById("drinks-list");
const mainDiv=()=>document.getElementById("main");

const attachDrinksListEvent=()=>{
    console.log(drinkList())
    //.addEventListener('click',renderDrinksPage)
}


document.addEventListener('DOMContentLoaded',()=>{
    attachDrinksListEvent();

    
})


