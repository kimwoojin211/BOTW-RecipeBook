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
