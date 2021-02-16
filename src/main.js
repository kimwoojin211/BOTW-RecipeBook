import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';


$(document).ready(function () {
  let ingredientArray = [];
  document.getElementById("ingredient1").addEventListener("click", function () {
    let searchName = new RegExp(`${document.getElementById(this.id).textContent}`);
   // console.log((`${document.getElementById(this.id).textContent}`));
    const found = ingredientArray.find(value => searchName.test(value));
    if (found === undefined) {
      ingredientArray.push(document.getElementById(this.id).textContent);
      document.getElementById("output").textContent = ingredientArray;
      return;
    }

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
    document.getElementById("output").textContent = ingredientArray;
    console.log(ingredientArray);

    // return (searchName.test(document.getElementById("name1").textContent) === true ? console.log("Correct") 
    //  : console.log("False"))
  });
});
