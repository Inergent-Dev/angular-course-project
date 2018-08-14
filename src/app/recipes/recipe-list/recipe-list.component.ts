import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("A Test Recipe", "This is my test recipe", "https://pinchofyum.com/wp-content/uploads/Gumbo-1-2-600x900.jpg"),
    new Recipe("A Test Recipe", "This is my test recipe", "https://pinchofyum.com/wp-content/uploads/Gumbo-1-2-600x900.jpg")
  ];

  constructor() { }

  ngOnInit() {
  }

}
