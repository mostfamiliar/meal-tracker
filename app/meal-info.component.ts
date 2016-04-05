import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-info',
  inputs: ['meal'],
  template: `
  <h3>{{meal.details}}{{meal.calories}}</h3>
  `
})

export class MealDisplayComponent{
  public meal: Meal;
}
