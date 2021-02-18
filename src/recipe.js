export default class Recipe{
  constructor(recipes,ingredientsInput){
    this.recipes = recipes;
    this.ingredientsList = this.formatIngredients(ingredientsInput);
    this.bannedwords = ["Chilly", "Enduring", "Hasty", "Energizing", "Hearty", "Mighty", "Spicy", "Tough", "Electro", "Sneaky"];
    this.bannedRecipes = ["Campfire Egg", "Baked Palm Fruit", "Blueshell Escargot", "Hard Boiled Egg", "Baked Apple", "Roasted Acorn", "Roasted Bass", "Roasted Bird Drumstick", "Roasted Radish", "Seared Gourmet Steak", "Seared Prime Steak", "Seared Steak", "Toasted Hearty Truffle", "Toasty Hylian Shroom"];
  }

  formatIngredients(list)
  {
    //check if current ingredient has an x2-x4 and slice/add modifier to string
    // if list is empty or < 1, then loops don't run.
    for (let i = 1; i <= list.length; i++) { // starts at position 1
      if(list[i]!=null) //skips index if value is null
      {
        for(let j = 0; j < i; j++) // checks all previous entries for each ingredient in array
        {
          if (list[j] != null) { //skips index if value is null
            const currIngredient = list[i];
            const prevIngredients = list[j];
            if (prevIngredients.slice(0,currIngredient.length) === currIngredient) //duplicate item found
            {
              if (prevIngredients.slice(-3, -1) === " x") { //existing multiplier found
                const multiplier = parseInt(prevIngredients[prevIngredients.length-1]); //reads last character for number
                list[j] = prevIngredients.slice(0,prevIngredients.length-1) + (multiplier+1).toString(); // +1 to multiplier as string
              }
              else { // x1 duplicate found
                list[j] += " x2";
              }
              list[i]=null; //removes current duplicate item and sets value to null
              break; //don't need to check any more previous items. move on to next item.
            }
          }
        }
      }
    }
    for (let k = list.length; k < 5; k++) { // if ingredient Array length < 5, push nulls until length = 5
      list.push(null);
    }
    return list.sort();
  }

  findMatch() // returns object with recipe and matching ingredient list.
  {
    // searches through all recipes 
    for (const element of this.recipes) { // (changed forEach loop to for..of because can't break out early from forEach loops)
      if (!this.bannedRecipes.includes(element.name)) { //excludes banned recipes (all baked items)
        //formatIngredients unnecessary. just put ingredient properties into array and sort.
        let ingredients = [element.ingredient1, element.ingredient2, element.ingredient3, element.ingredient4, element.ingredient5].sort();
        if (ingredients[0] === this.ingredientsList[0] && ingredients[1] === this.ingredientsList[1] && ingredients[2] === this.ingredientsList[2] && ingredients[3] === this.ingredientsList[3] && ingredients[4] === this.ingredientsList[4]) {
          return element;
        }
      }
    }
    return null;
  }

  fixImageURL(recipeName){ // same as how it was in main.js (besides changed variable names)
    recipeName = recipeName.replaceAll(" ", "-");
    recipeName = recipeName.replaceAll("~", "");
    recipeName = recipeName.replaceAll("è", "e");
    this.bannedwords.forEach(word => {
      if (recipeName.slice(0, word.length) === word && !recipeName.includes("Elixir")) {
        recipeName = recipeName.slice(word.length + 1);
      }
    });
    if (recipeName === "Milk") {
      recipeName = "Warm-Milk";
    }
    if (recipeName === "Mushroom-risotto") {
      recipeName = "Mushroom-Risotto";
    }
    if (recipeName === "Fruit-cake") {
      recipeName === "Fruitcake";
    }
    return recipeName;
  }

}