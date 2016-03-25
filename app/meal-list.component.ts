import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import { EditMealComponent } from './edit-meal.component';
import { AddMealComponent } from './add-meal.component';
import { CaloriePipe } from './calorie-pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  pipes: [CaloriePipe],
  directives: [MealComponent, EditMealComponent, AddMealComponent],
  template: `
  <select (change)="onChange($event.target.value)" class="filter form-control">
    <option value="all">Show All</option>
    <option value="unhealthy">Unhealthy</option>
    <option value="healthy">Healthy</option>
  </select>
  <meal-display *ngFor="#meal of mealList | calorie:filterCalorie" (click)="mealClicked(meal)" [class.selected]="meal === selectedMeal" [meal]="meal">
   </meal-display>
   <edit-meal *ngIf="selectedMeal" [meal]="selectedMeal"></edit-meal>
   <add-meal (onSubmitAddMeal)="addMeal($event)"></add-meal>
  `
})

export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public filterCalorie: string = "all";
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  addMeal(eventArr):void {
    console.log(eventArr);
    this.mealList.push(
      new Meal(eventArr[0], eventArr[1], eventArr[2])
    );
  }
  onChange(filterOption){
    this.filterCalorie = filterOption;
  }
}
