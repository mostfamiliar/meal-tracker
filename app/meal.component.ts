import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';


@Component({
  selector: 'meal-display',
  inputs: ['meal', 'mealList'],
  template: `
  <br>
  <div>
  <h4 (click)="mealInfoTrigger(meal)" >Meal: {{ meal.name }}</h4>
  <h4 *ngIf="selectedMeal">Details: {{ details }}</h4>
  <h4 *ngIf="selectedMeal">Calories: {{ calories }}</h4>
  </div>
  `
})
export class MealComponent {
  public meal: Meal;
  public mealList: Meal[];
  calories: number;
  details: string;
  public selectedMeal;
  mealInfoTrigger(clickedMeal: Meal, details, calories){
        this.selectedMeal = clickedMeal;
        this.details = clickedMeal.details;
        console.log(this.details);
        this.calories = clickedMeal.calories;
    }
}
