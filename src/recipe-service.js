export default class RecipeService {  
  static getRecipe() {
    return new Promise(function (resolve, reject) {
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
  }
}