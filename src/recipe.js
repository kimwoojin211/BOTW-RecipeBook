export default class Recipe {
  constructor(recipes, ingredientsInput) {
    this.recipes = recipes;
    this.ingredientsList = this.formatIngredients(ingredientsInput);
    this.bannedwords = ["Chilly", "Enduring", "Hasty", "Energizing", "Hearty", "Mighty", "Spicy", "Tough", "Electro", "Sneaky"];
    this.bannedRecipes = ["Campfire Egg", "Baked Palm Fruit", "Blueshell Escargot", "Hard Boiled Egg", "Baked Apple", "Roasted Acorn", "Roasted Bass", "Roasted Bird Drumstick", "Roasted Radish", "Seared Gourmet Steak", "Seared Prime Steak", "Seared Steak", "Toasted Hearty Truffle", "Toasty Hylian Shroom"];
  }

  formatIngredients(list) {
    for (let i = 1; i <= list.length; i++) {
      if (list[i] != null) {
        for (let j = 0; j < i; j++) {
          if (list[j] != null) {
            const currIngredient = list[i];
            const prevIngredients = list[j];
            if (prevIngredients.slice(0, currIngredient.length) === currIngredient) {
              if (prevIngredients.slice(-3, -1) === " x") {
                const multiplier = parseInt(prevIngredients[prevIngredients.length - 1]);
                list[j] = prevIngredients.slice(0, prevIngredients.length - 1) + (multiplier + 1).toString();
              }
              else {
                list[j] += " x2";
              }
              list[i] = null;
              break;
            }
          }
        }
      }
    }
    for (let k = list.length; k < 5; k++) {
      list.push(null);
    }
    return list.sort();
  }

  findMatch() {
    for (const element of this.recipes) {
      if (!this.bannedRecipes.includes(element.name)) {
        let ingredients = [element.ingredient1, element.ingredient2, element.ingredient3, element.ingredient4, element.ingredient5].sort();
        if (ingredients[0] === this.ingredientsList[0] && ingredients[1] === this.ingredientsList[1] && ingredients[2] === this.ingredientsList[2] && ingredients[3] === this.ingredientsList[3] && ingredients[4] === this.ingredientsList[4]) {
          return element;
        }
      }
    }
    return null;
  }

  fixImageURL(recipeName) {
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