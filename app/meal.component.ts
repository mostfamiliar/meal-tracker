import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';


@Component({
  selector: 'meal-display',
  inputs: ['meal', 'mealList'],
  template: `
  <br>
  <div>
  <h4 (click)="mealInfoTrigger(meal)">Meal: {{ meal.name }}</h4>
  <h4>{{ details }}</h4>
  <h4>{{ calories }}</h4>
  </div>
  `
})
export class MealComponent {
  public meal: Meal;
  public mealList: Meal[];
  calories: number;
  details: string;

  mealInfoTrigger(meal: Meal, details, calories) {
      this.details = meal.details;
      this.calories = meal.calories;
  }
}
