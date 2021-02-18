import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { data } from './ingredients.js';
import './imports.js';
import RecipeService from './recipe-service.js';
import Recipe from './recipe.js';

$(document).ready(function () {
  let html = `<div class="row ingredient">`;

  for (let i = 0; i < 149; i++) { // OLD CODE AT BOTTOM
    html +=
      `
    <div id="ingredient${i}" class="ingredient__item grow col-md-2">
      <div class="ingredient__item_image"><img src="./assets/images/${i + 1}.png">
      </div>
      <div class="ingredient__item_name ingredient__item_name--white text-center">
        <p>${data[i].name}</p>
      </div>
      <div class="triforce">
        <div class="triangle">
        </div>
      </div>
    </div>
    `

    if (((i <= 49 && i % 5 === 4) || i === 51) || ((i >= 52 && i <= 87 && i % 5 === 1) || i === 87) || (i >= 92 && i % 5 === 2)) {
      html += `</div>`;
      if (i <= 51)
        document.getElementById("output__natural-materials").innerHTML += html;
      else if (i <= 87)
        document.getElementById("output__creatures").innerHTML += html;
      else if (i <= 137)
        document.getElementById("output__monster-parts").innerHTML += html;
      else
        document.getElementById("output__miscellaneous").innerHTML += html;
      html = "";
      html += `<div class="row ingredient">`;
    }
    if (i === 148) {
      document.getElementById("output__miscellaneous").innerHTML += html;
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
      document.getElementById("output2").innerHTML = "";
      document.getElementById("output2__header").classList.add("ingredient__item_name--hidden");
      numInArray = 0;
    });

    document.getElementById(`mix`).addEventListener("click", function () {
      let promise = RecipeService.getRecipe();
      promise.then(function (response) {
        let recipe = new Recipe(JSON.parse(response), ingredientArray);
        let recipematch = recipe.findMatch();
        if (recipematch != null) {
          let urlName = recipe.fixImageURL(recipematch.name);
          const imageURL = `https://www.guideofthewild.com/assets/images/cookingPot/meals/${urlName}.png`;
          document.getElementById("output2").innerHTML = `
          <div id="recipe" class="recipe">
            <div class="recipe_image"><img src="${imageURL}"
            class="picture">
            </div>
            <div class="hearts"><img src="./assets/images/heart.png" class="picture" id="heart"> x${recipematch.hearts}
            </div>
            <div class="recipe_name">
              <p>${recipematch.name}</p>
            </div>`;
        }
        else {
          document.getElementById("output2").innerHTML = `<p class="error">Error! Recipe not found. Please try again.</p>`;
        }
      });
    });
    //loop over ingredient names to add eventlistener
    for (let i = 0; i < 149; i++) {

      document.getElementById(`ingredient${i}`).addEventListener("click", function () {
        //mqy need to move this check
        if (numInArray === 4) {
          document.getElementById("output2__header").classList.remove("ingredient__item_name--hidden");
        }
        if (numInArray < 5) {

          setTimeout(() => {
            document.getElementById(this.id).classList.add("shrink");
            // document.getElementById(this.id).classList.add("flip--y")
          }, 0);

          setTimeout(() => {
            document.getElementById("output2__cards").innerHTML +=
              `<div class="grow col-md-2">
              <div class="grow--big"><img src="./assets/images/${i + 1}.png">
                <div class="ingredient__item_name ingredient__item_name--grey text-center">
                  <div class="ingredient__item_name--hidden"> <p>${data[i].name}</p></div> 
                  </div>
                </div>
              </div>
            </div>`
          }, 500);
          setTimeout(() => {
            document.getElementById(this.id).classList.remove("shrink");
          }, 500);

          numInArray++;
          ingredientArray.push((document.getElementById(this.id).textContent).trim());
        }
      });
    }
  }
});
