import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
        "New Orleans Gumbo",
        "Best gumbo you have ever tasted!",
        "https://pinchofyum.com/wp-content/uploads/Gumbo-1-2-600x900.jpg",
        [
            new Ingredient('Meat', 1),
            new Ingredient('French Fires', 20)
        ]),
    new Recipe(
        "Burger Time",
        "A burger like no other!",
        "https://www.gnom-gnom.com/wp-content/uploads/2018/08/Gluten-Free-Paleo-Keto-Burger-Buns-by-Gnom-Gnom-2.jpg",
        [
           new Ingredient('Buns', 2),
           new Ingredient('Meat', 1) 
        ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
