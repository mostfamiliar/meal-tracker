import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  inputs: ['meal'],
  template: `
  <br>
  <h4>EDIT MEAL</h4>
  <h5>Name:</h5>
  <input [(ngModel)]="meal.name" class="edit-form" />
  <h5>Details:</h5>
  <input [(ngModel)]="meal.details" class="edit-form" />
  <h5>Calories:</h5>
  <input [(ngModel)]="meal.calories" class="edit-form" />
  `
})

export class EditMealComponent {
  public meal: Meal;
}
