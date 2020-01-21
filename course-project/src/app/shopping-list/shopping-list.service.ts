import { Ingredient } from "../shared/ingredient.model";
import { Subject } from 'rxjs';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject();
  private ingredients: Ingredient[] = [
    new Ingredient("Test Ingredient", 50),
    new Ingredient("Test Ingredient2", 10)
  ];

  getIngredient(index: number){
    return this.ingredients[index];
  }
  getIngredients() {
    return this.ingredients.slice();
  }

  addIngedient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngedients(ingredients: Ingredient[]){
      this.ingredients.push(...ingredients);
      this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient){
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number){
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
