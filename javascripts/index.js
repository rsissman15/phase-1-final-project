//Global variables
const drinkList = () =>document.getElementById("drinks-list");
const mainDiv=()=>document.getElementById("main");

//Event Handler
const renderDrinksPage=(e)=>{
    e.preventDefault();
    resetMain();

     //create header and style it
     const h3=document.createElement('h3');
     h3.innerHTML="Drinks List";
     h3.className="center-align";
     h3.style.marginTop="10px";
     h3.style.paddingTop="10px";

     mainDiv().appendChild(h3);
     
   
}

//Event Listener
const attachDrinksListEvent=()=>{
    drinkList().addEventListener('click',renderDrinksPage)
}

//Resets the page
const resetMain=()=>{
    mainDiv().innerHTML="";
}


document.addEventListener('DOMContentLoaded',()=>{
    attachDrinksListEvent();

    
})


