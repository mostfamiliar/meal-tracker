import { Component, EventEmitter } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';
import { EditMealComponent } from './edit-meal.component';

@Component({
  selector: 'app',
  directives: [MealListComponent],
  template: `
  <div class="container">
  <h1>Meal Tracker</h1>
  <meal-list [mealList]="meals" (onMealSelect)="mealWasSelected($event)"></meal-list>
    <h5>{{ details }}</h5>
    <h5>{{ calories }}</h5>

  </div>
  `
})

export class AppComponent {
  public meals: Meal[];
  constructor() {
    this.meals = [
      new Meal("Veggie Burger", "No mayo", 250),
      new Meal("Pizza", "ate 3 slices", 350),
      new Meal("Kale Smoothie", "with chia", 160),
      new Meal("Vegan Pho", "Full of vegetables", 190)
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {
    console.log("clicked");
      this.details = clickedMeal.details;
      this.calories = clickedMeal.calories;
  }
}
