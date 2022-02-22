let drinks=[{
    name:"Margarita",
    image:"https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
    ingredients:"Tequila, Triple Sec, Lime juice, Salt",
    instructions:"https://www.delish.com/cooking/recipe-ideas/a20139300/best-classic-margarita-recipe/",
    button:"<3"

}]

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
    col.className = "col s12 m4 l4"
  
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
    const divCard=document.createElement('div');
    const divCardImage=document.createElement('div');
    const image=document.createElement('img');
    const span =document.createElement('span')
    const button=document.createElement('a');
    const divCardContent=document.createElement('div')
    const p=document.createElement('p');

    divCard.className='card';
    divCard.className='card-image'
    span.className='card-title'
    button.className="btn-floating halfway-fab waves-effect waves-light red";
    divCardContent.className='Card Content'

    image.setAttribute('src',"https://www.thecocktaildb.com/images/media/drink/71t8581504353095.jpg")

    span.innerText="Card Title";
    p.innerText="placeholder"

    divCardImage.appendChild(image);
    divCardImage.appendChild(span);
    divCardContent.appendChild(p);
 
    divCard.appendChild(divCardImage);
    divCard.appendChild(divCardContent);
    
    return divCard;
}
//Resets the page
const resetMain=()=>{
    mainDiv().innerHTML="";
}


document.addEventListener('DOMContentLoaded',()=>{
    attachDrinksListEvent();

    
})


