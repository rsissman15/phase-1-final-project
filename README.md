# Drink List

### Overview

Over the past year, one of my favorite weekend activities has been cooking a good meal and making a cocktail. I find myself googling (and googling for a couple hours) "Easy Cocktails to Make", so for this project I thought it would be a good idea to make a list of drinks I have previously made and drinks I want to make. I am hoping this will narrow down the decision making process for next time I make a drink in addition to helping out other people that want to make an easy and simple cocktail :)

### Features
- Can search through the API to find drinks, their ingredients and instructions on how to make the drink
- Can like a drink if you want to make it or for any other reason
- Can add a drink to the site if there is one that you want to make 

### How to Use

1. All of the drink data is stored in the `db.json` file. You'll want to access this
data using a JSON server. Run `json-server --watch db.json` to start the server. This will create a server storing all of our drink data at `http://localhost:3000/drinks`. You can access an indvidual drink at `http://localhost:3000/drinks/:id`.

    > **Note:** we are using `:id` here as a variable value that indicates the path
    > to a specific drink. To navigate (or send a request) to that path, the `id`
    > number will be inserted into the URL in place of `:id`, e.g.,
    > `http://localhost:3000/drinks/1`

2. Once you run the server, you will be directed to the home page. If you click on the "Drink List" tab, you will see cards with a drink's image, ingredients, instructions and a heart button. If a drink interests you, you can click the heart button and that way you know later on what you want to make.

3. 