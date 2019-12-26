import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
  ingedientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient("Test Ingredient", 50),
    new Ingredient("Test Ingredient2", 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngedient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingedientsChanged.emit(this.ingredients.slice());
  }

  addIngedients(ingredients: Ingredient[]){
      this.ingredients.push(...ingredients);
      this.ingedientsChanged.emit(this.ingredients.slice());
  }
}
