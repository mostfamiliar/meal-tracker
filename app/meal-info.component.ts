import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-info',
  inputs: ['meal'],
  template: `
  <div *ngIf="meal.isShown">
    <h3>{{meal.details}}</h3>
    <h3>{{meal.calories}}</h3>
  </div>
  `
})

export class MealDisplayComponent{
  public meal: Meal;
}
