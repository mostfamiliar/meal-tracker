import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealDisplayComponent } from './meal-info.component';


@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  directives: [MealDisplayComponent],
  template: `
  <br>
  <div>
  <h4 (click)="showDetails(meal)">Meal: {{ meal.name }}</h4>
  </div>
  <meal-info (click)="hideDetails(meal)" [meal]="meal"></meal-info>
  `
})
export class MealComponent {
  public meal: Meal;
  showDetails(meal: Meal){
    meal.isShown = true;
  }
  hideDetails(meal: Meal){
    meal.isShown = false;
  }
}
