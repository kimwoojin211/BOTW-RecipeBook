import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { data } from './ingredients.js';
import './imports.js';

$(document).ready(function () {
  let html = "";
  for (let i = 0; i <= 30; i++) {
    if (i === 0) {
      html += `<div class="row ingredient">`;
    }
    if (i === 5 || i === 10 || i === 15 || i === 20 || i === 25 || i === 30) {
      html += `</div>`;
      document.getElementById("output").innerHTML += html;
      html = "";
      html += `<div class="row ingredient">`;
    }
    html +=
      `
      <div id="ingredient${i}" class="ingredient__item grow col-md-2">
        <div class="ingredient__item_image"><img src="./assets/images/${i + 1}.png">
        </div>
        <div class="ingredient__item_name ingredient__item_name--white text-center">
          <p>${(data[i].name).charAt(0).toUpperCase() + (data[i].name).slice(1, data[i].name.length)}</p>
        </div>
      <div class="triforce">
        <div class="triangle">
        </div>
      </div>
      </div>
      `;
    if (i === 30) {
      html += `</div>`;
      document.getElementById("output").innerHTML += html;
      initializeArray();
    }
      
      
  }
  function initializeArray() {
    
    //declare empty array
    let ingredientArray = [];
    let numInArray = 0;
    document.getElementById("output2__header").classList.add("ingredient__item_name--hidden");
      
    //reset button
    document.getElementById(`output2__reset`).addEventListener("click", function () {
      
      ingredientArray = [];
      document.getElementById("output2__cards").innerHTML = "";
      document.getElementById("output2__header").classList.add("ingredient__item_name--hidden");
      numInArray = 0;
    });
      
    document.getElementById(`mix`).addEventListener("click", function () {
      let promise = new Promise(function (resolve, reject) {
        let request = new XMLHttpRequest();
        const url = "https://zelda-cookbook-backend.herokuapp.com/api/v1/recipes";
        request.onload = function () {
          if (this.status === 200) {
            resolve(request.response);
          } else {
            reject(request.response);
          }
        };
        request.open("GET", url, true);
        request.send();
      });

      promise.then(function (response) {
        let recipes = JSON.parse(response);
        let ingredients = ingredientArray;
        for (let i = ingredients.length; i < 5; i++) {
          ingredients.push(null);
        }
        ingredients = ingredients.sort();
        console.log(ingredients);
        let recipematch = null;
        const bannedRecipes = ["Campfire Egg", "Baked Palm Fruit", "Blueshell Escargot", "Hard Boiled Egg", "Baked Apple", "Roasted Acorn", "Roasted Bass", "Roasted Bird Drumstick", "Roasted Radish",  "Seared Gourmet Steak", "Seared Prime Steak", "Seared Steak", "Toasted Hearty Truffle", "Toasty Hylian Shroom"];
        recipes.forEach(element => {
          if(!bannedRecipes.includes(element.name))
          {
            let ingredientsList = [element.ingredient1, element.ingredient2, element.ingredient3, element.ingredient4, element.ingredient5];
            ingredientsList.sort();
            if (ingredients[0] === ingredientsList[0] && ingredients[1] === ingredientsList[1] && ingredients[2] === ingredientsList[2] && ingredients[3] === ingredientsList[3] && ingredients[4] === ingredientsList[4]) {
              // recipematch = element;
              return;
            }
          }
        });

        if(recipematch!=null)
        {
          console.log("hi");
          let recipeName = recipematch.name.replaceAll(" ","-");
          recipeName = recipeName.replaceAll("~","");
          let urlName = recipeName;
          const bannedwords = ["Chilly", "Enduring", "Hasty", "Enduring", "Energizing", "Hearty", "Mighty", "Spicy", "Tough", "Electro", "Sneaky"];
          console.log(recipeName);
          bannedwords.forEach(element2 =>{
            if(urlName.slice(0,element2.length)===element2 && !urlName.includes("Elixir"))
            {
              urlName= recipeName.slice(element2.length+1);
            }
          });
          urlName = urlName.replaceAll("è","e");
          if(urlName === "Milk")
          {
            urlName = "Warm-Milk";
          }
          if(urlName === "Mushroom-risotto")
          {
            urlName = "Mushroom-Risotto";
          }
          if(urlName === "Fruit-cake")
          {
            urlName === "Fruitcake"
          }
          console.log(urlName);
          const imageURL = `https://www.guideofthewild.com/assets/images/cookingPot/meals/${urlName}.png`;
          document.getElementById("output2").innerHTML = `
          <div id="recipe" class="recipe col-md-2">
            <div class="recipe_image"><img src="${imageURL}"
            class="picture">
            </div>
            <div class="recipe_name">
              <p>${recipematch.name}</p>
            </div>`;
        }
        else
        {
          document.getElementById("output2").innerHTML = `<p class="error">Error! Recipe not found. Please try again.</p>`;
        }
      });
    });
    //loop over ingredient names to add eventlistener
    for (let i = 0; i <= 149; i++) {

      document.getElementById(`ingredient${i}`).addEventListener("click", function () {
        //mqy need to move this check
        if (numInArray === 4) {
          document.getElementById("output2__header").classList.remove("ingredient__item_name--hidden");
        }
        if (numInArray < 5) {

          setTimeout(() => {
            //    document.getElementById(this.id).classList.add("shrink");
            document.getElementById(this.id).classList.add("flip--y");
          }, 0);

          setTimeout(() => {
            document.getElementById("output2__cards").innerHTML +=
              `<div class="grow col-md-2">
              <div class="grow--big"><img src="./assets/images/${i + 1}.png">
                <div class="ingredient__item_name ingredient__item_name--grey text-center">
                  <div class="ingredient__item_name--hidden"> <p>${(data[i].name).charAt(0).toUpperCase() + (data[i].name).slice(1, data[i].name.length)}</p></div> 
                  </div>
                </div>
              </div>
            </div>`
          }, 500);
          setTimeout(() => {
            document.getElementById(this.id).classList.remove("flip--y");
          }, 3000);

          numInArray++;
          let searchName = new RegExp(`${document.getElementById(this.id).textContent.trim()}`);
          const found = ingredientArray.find(value => searchName.test(value));
          //Check if item is in array otherwise add the first entry
          if (found === undefined) {
            ingredientArray.push((document.getElementById(this.id).textContent).trim());
            return;
          }

          //check if current ingredient has an x2-x4 and slice/add modifier to string
          for (let i = 0; i <= ingredientArray.length; i++) {
            if (ingredientArray[i] === (document.getElementById(this.id).textContent.trim() + " x4")) {
              ingredientArray[i] = ingredientArray[i].slice(0, (ingredientArray[i].trim().length - 3)) + " x5";
            }
            else if (ingredientArray[i] === (document.getElementById(this.id).textContent.trim() + " x3")) {
              ingredientArray[i] = ingredientArray[i].slice(0, (ingredientArray[i].trim().length - 3)) + " x4";
            }
            else if (ingredientArray[i] === (document.getElementById(this.id).textContent.trim() + " x2")) {
              ingredientArray[i] = ingredientArray[i].slice(0, (ingredientArray[i].trim().length - 3)) + " x3";
            }
            else if (ingredientArray[i] === document.getElementById(this.id).textContent.trim()) {
              ingredientArray[i] += " x2";
            }
            else {
              console.log("not a match");
            }
          }
        }
      });
    }
  }
});
