import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';


@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
  <br>
  <div>
  <h4 (click)="mealInfoTrigger(meal)">Meal name: {{ meal.name }}</h4>
  <h4>{{ details }}</h4>
  <h4>{{ calories }}</h4>
  </div>
  `
})
export class MealComponent {
  public meal: Meal;

  mealInfoTrigger(meal: Meal) {
    console.log("clicked");
      this.details = meal.details;
      this.calories = meal.calories;
  }
}


// <h4>Details: {{ meal.details }}</h4>
// <h4>Calories: {{ meal.calories}}</h4>
