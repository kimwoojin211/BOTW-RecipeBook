import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';


$(document).ready(function () {
  initializeArray();


  function initializeArray() {
    //declare empty array
    let ingredientArray = [];
    //loop over ingredient names to add eventlistener (currently 5)
    for (let i = 1; i <= 6; i++) {
      document.getElementById(`ingredient${i}`).addEventListener("click", function () {
        let searchName = new RegExp(`${document.getElementById(this.id).textContent}`);
        const found = ingredientArray.find(value => searchName.test(value));
        if (found === undefined) {
          ingredientArray.push(document.getElementById(this.id).textContent);
          document.getElementById("output").textContent = ingredientArray;
          return;
        }

        //check if current ingredient has an x2-x4 and slice/add modifier to string
        for (let i = 0; i <= ingredientArray.length; i++) {
          if (ingredientArray[i] === (document.getElementById(this.id).textContent + "x4")) {
            ingredientArray[i] = ingredientArray[i].slice(0, (ingredientArray[i].length - 2)) + "x5";
          }
          else if (ingredientArray[i] === (document.getElementById(this.id).textContent + "x3")) {
            ingredientArray[i] = ingredientArray[i].slice(0, (ingredientArray[i].length - 2)) + "x4";
          }
          else if (ingredientArray[i] === (document.getElementById(this.id).textContent + "x2")) {
            ingredientArray[i] = ingredientArray[i].slice(0, (ingredientArray[i].length - 2)) + "x3";
          }
          else if (ingredientArray[i] === document.getElementById(this.id).textContent) {
            ingredientArray[i] += "x2";
          }
          else {
            console.log("not a match")

          }
        }
        //Output for testing
        document.getElementById("output").textContent = ingredientArray;
      });
    }
  }
});



//Access ingredients.js and pull name 
// Pull ID # and match to image for src
$("#inputForm").on("submit", function (event) {
  event.preventDefault();
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
    // let stringInput = $("#ingredient1").val() + $("#ingredient2").val() + $("#ingredient3").val() + $("#ingredient4").val() + $("#ingredient5").val();
    let stringinput = [$("#firstIngredient").val(), $("#secondIngredient").val(), $("#thirdIngredient").val(), $("#fourthIngredient").val(), $("#fifthIngredient").val()]

    ingredients = stringinput.filter(string => string !== "");

    //ingredients can be null
    //ingredients can be multiples (X2, X3, etc.)
    //ingredients aren't necessarily in alphabetical
    
    recipes.forEach(element => {
      ingredientsList = [element.ingredients1, element.ingredients2,element.ingredients3,element.ingredients4,element.ingredients5];
        for (const element2 of ingredients) {


        if (ingredientsList.includes(element2)) {
          $("#output").append(`${ element.name }`);
        }
      // if (stringInput === (element.ingredient1 + element.ingredient2 + element.ingredient3 + element.ingredient4 + element.ingredient5))
    });
    //  $("#ingredient1") + $("#ingredient2") + $("#ingredient3") + $("#ingredient4") + $("#ingredient5")
    //  == element.ingredient1 + element.ingredient2 + element.ingredient3 + element.ingredient4 + element.ingredient5

  });
});
