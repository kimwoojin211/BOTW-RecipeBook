import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { data } from './ingredients.js';
import './assets/images/1.png';
import './assets/images/2.png';
import './assets/images/3.png';
import './assets/images/4.png';
import './assets/images/5.png';
import './assets/images/6.png';
import './assets/images/7.png';
import './assets/images/8.png';
import './assets/images/9.png';
import './assets/images/10.png';
import './assets/images/11.png';
import './assets/images/12.png';
import './assets/images/13.png';
import './assets/images/14.png';
import './assets/images/15.png';
import './assets/images/16.png';
import './assets/images/17.png';
import './assets/images/18.png';
import './assets/images/19.png';
import './assets/images/20.png';
import './assets/images/21.png';
import './assets/images/22.png';
import './assets/images/23.png';
import './assets/images/24.png';
import './assets/images/25.png';
import './assets/images/26.png';
import './assets/images/27.png';
import './assets/images/28.png';
import './assets/images/29.png';
import './assets/images/30.png';
import './assets/images/31.png';
import './assets/images/32.png';
import './assets/images/33.png';
import './assets/images/34.png';
import './assets/images/35.png';
import './assets/images/36.png';
import './assets/images/37.png';
import './assets/images/38.png';
import './assets/images/39.png';
import './assets/images/40.png';
import './assets/images/41.png';
import './assets/images/42.png';
import './assets/images/43.png';
import './assets/images/44.png';
import './assets/images/45.png';
import './assets/images/46.png';
import './assets/images/47.png';
import './assets/images/48.png';
import './assets/images/49.png';
import './assets/images/50.png';
import './assets/images/51.png';
import './assets/images/52.png';
import './assets/images/53.png';
import './assets/images/54.png';
import './assets/images/55.png';
import './assets/images/56.png';
import './assets/images/57.png';
import './assets/images/58.png';
import './assets/images/59.png';
import './assets/images/60.png';
import './assets/images/61.png';
import './assets/images/62.png';
import './assets/images/63.png';
import './assets/images/64.png';
import './assets/images/65.png';
import './assets/images/66.png';
import './assets/images/67.png';
import './assets/images/68.png';
import './assets/images/69.png';
import './assets/images/70.png';
import './assets/images/71.png';
import './assets/images/72.png';
import './assets/images/73.png';
import './assets/images/74.png';
import './assets/images/75.png';
import './assets/images/76.png';
import './assets/images/77.png';
import './assets/images/78.png';
import './assets/images/79.png';
import './assets/images/80.png';
import './assets/images/81.png';
import './assets/images/82.png';
import './assets/images/83.png';
import './assets/images/84.png';
import './assets/images/85.png';
import './assets/images/86.png';
import './assets/images/87.png';
import './assets/images/88.png';
import './assets/images/89.png';
import './assets/images/90.png';
import './assets/images/91.png';
import './assets/images/92.png';
import './assets/images/93.png';
import './assets/images/94.png';
import './assets/images/95.png';
import './assets/images/96.png';
import './assets/images/97.png';
import './assets/images/98.png';
import './assets/images/99.png';
import './assets/images/100.png';
import './assets/images/101.png';
import './assets/images/102.png';
import './assets/images/103.png';
import './assets/images/104.png';
import './assets/images/105.png';
import './assets/images/106.png';
import './assets/images/107.png';
import './assets/images/108.png';
import './assets/images/109.png';
import './assets/images/110.png';
import './assets/images/111.png';
import './assets/images/112.png';
import './assets/images/113.png';
import './assets/images/114.png';
import './assets/images/115.png';
import './assets/images/116.png';
import './assets/images/117.png';
import './assets/images/118.png';
import './assets/images/119.png';
import './assets/images/120.png';
import './assets/images/121.png';
import './assets/images/122.png';
import './assets/images/123.png';
import './assets/images/124.png';
import './assets/images/125.png';
import './assets/images/126.png';
import './assets/images/127.png';
import './assets/images/128.png';
import './assets/images/129.png';
import './assets/images/130.png';
import './assets/images/131.png';
import './assets/images/132.png';
import './assets/images/133.png';
import './assets/images/134.png';
import './assets/images/135.png';
import './assets/images/136.png';
import './assets/images/137.png';
import './assets/images/138.png';
import './assets/images/139.png';
import './assets/images/140.png';
import './assets/images/141.png';
import './assets/images/142.png';
import './assets/images/143.png';
import './assets/images/144.png';
import './assets/images/145.png';
import './assets/images/146.png';
import './assets/images/147.png';
import './assets/images/148.png';
import './assets/images/149.png';

$(document).ready(function () {
  console.log(document.getElementById("output").innerHTML)
  for (let i = 0; i <= 10; i++) {
    if (i === 0) {
    document.getElementById("output").innerHTML += `<div class="row ingredient">`;
    }
    if (i % 5 === 0) {
      console.log("divisible by 5");
      document.getElementById("output").innerHTML += `<div class="row ingredient">`;
    }
    document.getElementById("output").innerHTML +=
      `
      <div id="ingredient${i}" class="ingredient__item col-md-2">
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
      `
      // document.getElementById(`ingredient${i}`).setAttribute('style', 'display: block;');

      // document.getElementById(`ingredient${i}`).setAttribute('style', 'width: 12vw;');


    if (i % 5 === 0) {
      document.getElementById("output").innerHTML += `</div>`;
      console.log("divisible by 5");
    }
    if (i === 149) {
      initializeArray();
    }


  }

  function initializeArray() {
    //declare empty array
    let ingredientArray = [];
    //loop over ingredient names to add eventlistener (currently 5)
    for (let i = 1; i <= 5; i++) {
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
            console.log("not a match");
          }
        }
        //Output for testing
        document.getElementById("output").textContent = ingredientArray;
      });
    }
  }
});





// $("#inputForm").on("submit", function (event) {
//   event.preventDefault();
//   let promise = new Promise(function (resolve, reject) {
//     let request = new XMLHttpRequest();
//     const url = "https://zelda-cookbook-backend.herokuapp.com/api/v1/recipes";
//       request.onload = function () {
//         if (this.status === 200) {
//           resolve(request.response);
//         } else {
//           reject(request.response);
//         }
//       };
//     request.open("GET", url, true);
//     request.send();
//   });

//   promise.then(function (response) {
//     let recipes = JSON.parse(response);
//     // let stringInput = $("#ingredient1").val() + $("#ingredient2").val() + $("#ingredient3").val() + $("#ingredient4").val() + $("#ingredient5").val();
//     let stringinput = [$("#firstIngredient").val(), $("#secondIngredient").val(), $("#thirdIngredient").val(), $("#fourthIngredient").val(), $("#fifthIngredient").val()]

//     ingredients = stringinput.filter(string => string !== "");

//     //ingredients can be null
//     //ingredients can be multiples (X2, X3, etc.)
//     //ingredients aren't necessarily in alphabetical

//     recipes.forEach(element => {
//       ingredientsList = [element.ingredients1, element.ingredients2,element.ingredients3,element.ingredients4,element.ingredients5];
//         for (const element2 of ingredients) {


//         if (ingredientsList.includes(element2)) {
//           $("#output").append(`${ element.name }`);
//         }
//       // if (stringInput === (element.ingredient1 + element.ingredient2 + element.ingredient3 + element.ingredient4 + element.ingredient5))
//     });
//     //  $("#ingredient1") + $("#ingredient2") + $("#ingredient3") + $("#ingredient4") + $("#ingredient5")
//     //  == element.ingredient1 + element.ingredient2 + element.ingredient3 + element.ingredient4 + element.ingredient5

//   });
// });
