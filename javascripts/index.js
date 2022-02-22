let drinks=[{
    name:"Margarita",
    image:"https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
    ingredients:"Tequila, Triple Sec, Lime juice, Salt",
    instructions:"https://www.delish.com/cooking/recipe-ideas/a20139300/best-classic-margarita-recipe/",
    button:"<3"},
    {
    name:"Martini",
    image:"https://www.thecocktaildb.com/images/media/drink/71t8581504353095.jpg",
    ingredients:"Gin, Dry Vermouth, Olive",
    instructions:"https://www.thekitchn.com/how-to-make-a-classic-martini-240334",
    button:"<3"
        
    },
    ]

//Global variables
const drinkList = () =>document.getElementById("drinks-list");
const mainDiv=()=>document.getElementById("main");

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
    col.className = "col s15 m2"
  
    col.appendChild(createCard(drink))
  
    return col;
  }


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

     renderDrinks();  
}
//Event Listener
const attachDrinksListEvent=()=>{
    drinkList().addEventListener('click',renderDrinksPage)
}


const createCard=(drink)=>{
    const divCard = document.createElement('div');
    const divImage = document.createElement('div');
    const divCardContent = document.createElement('div');
    const divCardAction = document.createElement('div');
    const img = document.createElement('img');
    const span = document.createElement('span');
    const p = document.createElement('p')
    const button = document.createElement('a');

    divCard.className = "card";
    divImage.className = "card-image";
    divCardContent.className = "card-content";
    divCardAction.className = "card-action";
    span.className = 'card-title';


    img.setAttribute("src", "https://www.thecocktaildb.com/images/media/drink/71t8581504353095.jpg");
    //link1.setAttribute("href", "#");

    span.innerText = "card title";
    p.innerText = "placeholder";
    button.innerText = "<3";

    divImage.appendChild(img);
    divImage.appendChild(span);
    divCardContent.appendChild(p);
    divCardAction.appendChild(button);

    divCard.appendChild(divImage);
    divCard.appendChild(divCardContent);
    divCard.appendChild(divCardAction);

    return divCard;
}
//Resets the page
const resetMain=()=>{
    mainDiv().innerHTML="";
}


document.addEventListener('DOMContentLoaded',()=>{
    attachDrinksListEvent();

    
})


