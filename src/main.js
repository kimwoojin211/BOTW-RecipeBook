import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

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