import { EventEmitter } from "@angular/core";

import { Recipe } from "./recipe.model";
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      "A Test Recipe",
      "Test Description",
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Froasted-red-pepper-deviled-eggs-ay.jpg%3Fitok%3DomK6dKy7&w=450&c=sc&poi=face&q=85",
      [new Ingredient('asd', 12), new Ingredient('asd2', 20)]
    ),
    new Recipe(
      "A Test Recipe2",
      "Test Description",
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Froasted-red-pepper-deviled-eggs-ay.jpg%3Fitok%3DomK6dKy7&w=450&c=sc&poi=face&q=85",
      [new Ingredient('qwe', 12), new Ingredient('qwe2', 20)]
    )
  ];

  constructor(private shoppingListService: ShoppingListService){}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes.slice()[id];
  }

  AddIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngedients(ingredients);
  }
}
