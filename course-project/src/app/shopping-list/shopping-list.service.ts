import { Ingredient } from "../shared/ingredient.model";
import { Subject } from 'rxjs';

export class ShoppingListService {
  ingedientsChanged = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient("Test Ingredient", 50),
    new Ingredient("Test Ingredient2", 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngedient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingedientsChanged.next(this.ingredients.slice());
  }

  addIngedients(ingredients: Ingredient[]){
      this.ingredients.push(...ingredients);
      this.ingedientsChanged.next(this.ingredients.slice());
  }
}
