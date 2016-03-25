import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'add-meal',
  outputs: ['onSubmitAddMeal'],
  template: `
    <div class="add-meal-form">
    <br>
      <h4>ADD MEAL</h4>
      <div class="input-field">
        <input placeholder="Name" #newName>
        <input placeholder="Details" #newDetails>
        <input placeholder="Calories" #newCalories>
        <button (click)="addMeal(newName, newDetails, newCalories)" class="btn btn-info">Add Meal</button>
      </div>
    </div>
  `
})

export class AddMealComponent {
  public meal: Meal;
  public onSubmitAddMeal: EventEmitter<any[]>;
  constructor(){
    this.onSubmitAddMeal = new EventEmitter();
  }
  addMeal(newName: HTMLInputElement, newDetails: HTMLInputElement, newCalories: HTMLInputElement) {
    var eventArr = [newName.value, newDetails.value, parseInt(newCalories.value)];
    this.onSubmitAddMeal.emit(eventArr);
    newName.value = "";
    newDetails.value = "";
    newCalories.value = "";
  }
}
