
//DOM Loads
document.addEventListener('DOMContentLoaded',()=>{
    fetchDrinks();
    renderDrinksListPageEvent();
    renderHomePageEvent();
    renderCreateDrinkPageEvent();
    
})




//Global variables
const drinkList = () =>document.getElementById("drinks-list");
const mainDiv=()=>document.getElementById("main");
const homePageLink=()=>document.getElementById('home_page');
const createDrinkLink=()=>document.getElementById("create-drinks")
let drinks=[];

//Functions
const fetchDrinks=()=>{
    fetch("http://localhost:3000/drinks")
        .then(res=>res.json())
        .then(data=>{
            drinks=data;
            debugger;
    })
}

const buttonClick=(event)=>{
    if(event.target.style.color==="red"){
        event.target.style.color="white";
    }
    else{
        event.target.style.color='red';

    }
}



const resetMain=()=>{
    mainDiv().innerHTML="";
}


//Render 

const renderDrinksPage=(e)=>{
    resetMain();

     const h3=document.createElement('h3');
     h3.innerHTML="Drink List";
     h3.className="center-align";
     h3.style.marginTop="10px";
     h3.style.paddingTop="10px";
     mainDiv().appendChild(h3);

     renderDrinks();
}

const renderHomePage=e=>{
    resetMain();
   
    const h1 = document.createElement('h1');
    h1.classList.add('center-align');
    h1.innerText = 'Welcome to My Cocktail Site'
    mainDiv().appendChild(h1);


}

const renderCreateDrinkPage=e=>{
    e.preventDefault();
    resetMain();
    renderCreateDrinkForm();


}

const renderDrink = drink => {
    const col = document.createElement('div');
    col.className = "col s10 m3"
  
    col.appendChild(createCard(drink))
  
    return col;
  }


  //Create Card and Form
  const createCard=(drink)=>{


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


    

    divCard.className = "card medium";
    divImage.className = "card-image";
    divCardContent.className = "card-content";
    divCardAction.className = "card-action";
    span.className = 'card-title';
    button.className="waves-effect waves-lighten-1 purple btn";
    button.id='like-button';
    buttonI.className="material-icons center"
    buttonI.id='heart-button';
    instructionsLink.setAttribute("href", drink.instructions);
    instructionsLink.style='color:purple'
    



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
   


    return divCard;
}

const renderDrinks = () => {
    const row = document.createElement('row');
    row.className = "row";
  
    drinks.map(drink=> {
      const col = renderDrink(drink)
  
      row.appendChild(col);
    });
  
    mainDiv().appendChild(row);
  }




  
const renderCreateDrinkForm=()=>{
    const h1 = document.createElement('h1');
    const form=document.createElement('form');
    const nameDiv=document.createElement('div');
    const nameInput=document.createElement('input');
    const nameLabel=document.createElement('label');
    const imageDiv=document.createElement('div');
    const imageInput=document.createElement('input');
    const imageLabel=document.createElement('label');
    const ingredientsDiv=document.createElement('div');
    const ingredientsInput=document.createElement('input');
    const ingredientsLabel=document.createElement('label');
    const instructionsDiv=document.createElement('div');
    const instructionsInput=document.createElement('input');
    const instructionsLabel=document.createElement('label');
    const submitButton=document.createElement('input');

    h1.classList.add('center-align');
    nameDiv.className='input-field';
    imageDiv.className='input-field';
    ingredientsDiv.className='input-field';
    instructionsDiv.className='input-field';
    submitButton.className='btn deep-purple lighten-1'

    nameInput.setAttribute('id','name');
    nameInput.setAttribute('type','text');
    nameLabel.setAttribute('for', 'name');
    imageInput.setAttribute('id','image');
    imageInput.setAttribute('type','text');
    imageLabel.setAttribute('for', 'image');
    ingredientsInput.setAttribute('id','ingredients');
    ingredientsInput.setAttribute('type','text');
    ingredientsLabel.setAttribute('for', 'ingredients');
    instructionsInput.setAttribute('id','instructions');
    instructionsInput.setAttribute('type','url');
    instructionsLabel.setAttribute('for', 'instructions');
    submitButton.setAttribute('type','submit');
    submitButton.setAttribute('value','Create Drink')





    nameLabel.innerText='Name';
    imageLabel.innerText='Image';
    ingredientsLabel.innerText='Ingredients'
    instructionsLabel.innerText='Instructions'
    h1.innerText = 'Create a Drink';

    nameDiv.appendChild(nameInput);
    nameDiv.appendChild(nameLabel);
    form.appendChild(nameDiv);
    imageDiv.appendChild(imageInput);
    imageDiv.appendChild(imageLabel);
    form.appendChild(imageDiv);
    ingredientsDiv.appendChild(ingredientsInput);
    ingredientsDiv.appendChild(ingredientsLabel);
    form.appendChild(ingredientsDiv);
    instructionsDiv.appendChild(instructionsInput);
    instructionsDiv.appendChild(instructionsLabel);
    form.appendChild(instructionsDiv);
    form.appendChild(submitButton);


    form.addEventListener("submit",submitFormEvent)

    mainDiv().appendChild(h1);
    mainDiv().appendChild(form);



}



//Events
const submitFormEvent=e=>{
    e.preventDefault();
    alert("Added to Drink List")

    fetch('http://localhost:3000/drinks',{
        method: 'POST',
        headers:{
            "Accept":"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name:e.target.name.value,
            image:e.target.image.value,
            ingredients:e.target.ingredients.value,
            instructions:e.target.instructions.value,

        })
    })
    .then(res=>res.json())
    .then(drink=>drinks.push(drink))
    .catch(error=>{
        alert('Did not post')
        console.log(error.message)
    })
}



//Event Listener
const renderDrinksListPageEvent=()=>{
    drinkList().addEventListener('click',renderDrinksPage)

}

const renderHomePageEvent=()=>{
    homePageLink().addEventListener('click',renderHomePage);
}

const renderCreateDrinkPageEvent=()=>{
    createDrinkLink().addEventListener('click',renderCreateDrinkPage)
}











