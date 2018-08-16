import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe("A Test Recipe", "This is my test recipe", "https://pinchofyum.com/wp-content/uploads/Gumbo-1-2-600x900.jpg"),
        new Recipe("Another Test Recipe", "This is my other test recipe", "https://pinchofyum.com/wp-content/uploads/Gumbo-1-2-600x900.jpg")
      ];

    getRecipes() {
        return this.recipes.slice();
    }
}