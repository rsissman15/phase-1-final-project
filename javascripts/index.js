//Global variables
const drinkList = () =>document.getElementById("drinks-list");
const mainDiv=()=>document.getElementById("main");
const homePageLink=()=>document.getElementById('home_page');
console.log(homePageLink());
let drinks=[];

//Functions
const fetchDrinks=()=>{
    //Function to fetch drinks from db.json
    fetch("http://localhost:3000/drinks")
        .then(res=>res.json())
        .then(data=>{
        drinks=data;
    })
}

const buttonClick=(event)=>{
    //Function to handle button click
    if(event.target.style.color==="red"){
        event.target.style.color="white";
    }
    else{
        event.target.style.color='red';

    }
}

const resetMain=()=>{
    //Resets the page
    mainDiv().innerHTML="";
}





//Render 

const renderDrinksPage=(e)=>{
    //Event Handler for when you switch to the drink tabs
    e.preventDefault();
    resetMain();

     //create header and style it
     const h3=document.createElement('h3');
     h3.innerHTML="Drinks List";
     h3.className="center-align";
     h3.style.marginTop="10px";
     h3.style.paddingTop="10px";
     mainDiv().appendChild(h3);

     renderDrinks();  
}

const renderHomePage=e=>{
    //Event handler for when you switch back to the home page
    e.preventDefault();
    resetMain();
   
    const h1 = document.createElement('h1');
    h1.classList.add('center-align');
    h1.innerText = 'Welcome to My Drink Page'
    mainDiv().appendChild(h1);

}

const renderDrinks = () => {
    // iterate over meals and display them as cards
    const row = document.createElement('row');
    row.className = "row";
  
    drinks.map(drink=> {
      const col = renderDrink(drink)
  
      row.appendChild(col);
    });
  
    mainDiv().appendChild(row);
  }
  
  const renderDrink = drink => {
    // render the drink to the page
    const col = document.createElement('div');
    col.className = "col s10 m3"
  
    col.appendChild(createCard(drink))
  
    return col;
  }



//Event Listener
const attachDrinksListEvent=()=>{
    //Event Listener for switching to drinks tab
    drinkList().addEventListener('click',renderDrinksPage)
}

const renderHomePageEventListener=()=>{
    //Event Listener for switching to home tab
    homePageLink().addEventListener('click',renderHomePage);
}



//Creates card
const createCard=(drink)=>{

    //Creates card elements
    const divCard = document.createElement('div');
    const divImage = document.createElement('div');
    const divCardContent = document.createElement('div');
    const divCardAction = document.createElement('div');
    const img = document.createElement('img');
    const span = document.createElement('span');
    const pIngredients = document.createElement('p')
    const instructionsLink= document.createElement('a')
    const button = document.createElement('a');
    const buttonI=document.createElement('i');

    divCard.className = "card";
    divImage.className = "card-image";
    divCardContent.className = "card-content";
    divCardAction.className = "card-action";
    span.className = 'card-title';
    button.className="waves-effect waves-light purple btn";
    button.id='like-button';
    buttonI.className="material-icons right"
    buttonI.id='heart-button';
    instructionsLink.setAttribute("href", drink.instructions);
    instructionsLink.color='purple'



    img.setAttribute("src", drink.image);
    buttonI.outline="red"


    span.innerText = drink.name;
    pIngredients.innerText = drink.ingredients;
    instructionsLink.innerText="Instructions";
    buttonI.innerText = "favorite";
    




    divImage.appendChild(img);
    divImage.appendChild(span);
    button.appendChild(buttonI);
    divCardContent.appendChild(pIngredients);
    divCardAction.appendChild(instructionsLink);
    divCardAction.appendChild(button);
   


    divCard.appendChild(divImage);
    divCard.appendChild(divCardContent);
    divCard.appendChild(divCardAction);


    //Button event listener
    button.addEventListener('click',buttonClick);

    // form.addEventListener('submit',e=>{
    //     e.preventDefault();
    //     console.log(e);
    // });

    return divCard;
}


//DOM Loads

document.addEventListener('DOMContentLoaded',()=>{
    fetchDrinks();
    attachDrinksListEvent();
    renderHomePageEventListener();

    
})


