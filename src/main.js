import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { data } from './ingredients.js';
import './imports.js';
$(document).ready(function () {


  console.log(document.getElementById("output__natural-materials").innerHTML)
  let html = ""
  for (let i = 0; i < 149; i++) {
    if (i === 0) {
      html += `<div class="row ingredient">`;
    }
    else if (i === 5 || i === 10 || i === 15 || i === 20 || i === 25 || i === 30 || i === 35 || i === 40 || i === 45 || i === 50 || i === 52) {
      html += `</div>`;
      document.getElementById("output__natural-materials").innerHTML += html
      html = ""
      html += `<div class="row ingredient">`;
    }
    else if (i === 57 || i === 62 || i === 67 || i === 72 || i === 77 || i === 82 || i === 87 || i === 88) {
      html += `</div>`;
      document.getElementById("output__creatures").innerHTML += html
      html = ""
      html += `<div class="row ingredient">`;
    }
    else if (i === 93 || i === 98 || i === 103 || i === 108 || i === 113 || i === 118 || i === 123 || i === 128 || i === 133 || i === 138 || i === 138) {
      html += `</div>`;
      document.getElementById("output__monster-parts").innerHTML += html
      html = ""
      html += `<div class="row ingredient">`;
    }
    else if (i === 143 || i === 148) {
      html += `</div>`;
      document.getElementById("output__miscellaneous").innerHTML += html
      html = ""
      html += `<div class="row ingredient">`;
    }
    html +=
      `
      <div id="ingredient${i}" class="ingredient__item grow col-md-2">
        <div class="ingredient__item_image"><img src="./assets/images/${i+1}.png">
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
      
    if (i === 148) {
      console.log("148th ingredient")
      document.getElementById("output__miscellaneous").innerHTML += html
      initializeArray();
    }
      
  }
  // initializeArray();

  function initializeArray() {
    console.log("Carousel navigation buttonz")
    //declare empty array
    let ingredientArray = [];
    let numInArray = 0;
    document.getElementById("output2__header").classList.add("ingredient__item_name--hidden")

    //reset button
    document.getElementById(`output2__reset`).addEventListener("click", function () {
      ingredientArray = [];
      console.log("clicked reset")
      document.getElementById("output2__cards").innerHTML = "";
      document.getElementById("output2__header").classList.add("ingredient__item_name--hidden")
      numInArray = 0;
    });

    //loop over ingredient names to add eventlistener
    for (let i = 0; i < 149; i++) {

      document.getElementById(`ingredient${i}`).addEventListener("click", function () {
        //mqy need to move this check
        console.log(ingredientArray)
        if (numInArray === 4) {
          document.getElementById("output2__header").classList.remove("ingredient__item_name--hidden");
          console.log("hello")
        }
        if (numInArray < 5) {

          setTimeout(() => {
               document.getElementById(this.id).classList.add("shrink");
            // document.getElementById(this.id).classList.add("flip--y")
          }, 0);

          setTimeout(() => {
            document.getElementById("output2__cards").innerHTML +=
              `<div class="grow col-md-2">
              <div class="grow--big"><img src="./assets/images/${i+1}.png">
                <div class="ingredient__item_name ingredient__item_name--grey text-center">
                  <div class="ingredient__item_name--hidden"> <p>${(data[i].name).charAt(0).toUpperCase() + (data[i].name).slice(1, data[i].name.length)}</p></div> 
                  </div>
                </div>
              </div>
            </div>`
          }, 500);
          setTimeout(() => {
            document.getElementById(this.id).classList.remove("shrink");
          }, 1000);

          console.log(document.getElementById(this.id).textContent.trim())
          numInArray++;
          console.log(numInArray)
          let searchName = new RegExp(`${document.getElementById(this.id).textContent.trim()}`);
          const found = ingredientArray.find(value => searchName.test(value));
          console.log(numInArray);
          //Check if item is in array otherwise add the first entry
          if (found === undefined) {
            ingredientArray.push((document.getElementById(this.id).textContent).trim());
            return;
          }
          console.log(ingredientArray)
          //check if current ingredient has an x2-x4 and slice/add modifier to string
          for (let i = 0; i <= ingredientArray.length; i++) {
            if (ingredientArray[i] === (document.getElementById(this.id).textContent.trim() + "x4")) {
              ingredientArray[i] = ingredientArray[i].slice(0, (ingredientArray[i].trim().length - 2)) + "x5";
            }
            else if (ingredientArray[i] === (document.getElementById(this.id).textContent.trim() + "x3")) {
              ingredientArray[i] = ingredientArray[i].slice(0, (ingredientArray[i].trim().length - 2)) + "x4";
            }
            else if (ingredientArray[i] === (document.getElementById(this.id).textContent.trim() + "x2")) {
              ingredientArray[i] = ingredientArray[i].slice(0, (ingredientArray[i].trim().length - 2)) + "x3";
            }
            else if (ingredientArray[i] === document.getElementById(this.id).textContent.trim()) {
              ingredientArray[i] += "x2";
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





