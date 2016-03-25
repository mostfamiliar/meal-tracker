import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import { EditMealComponent } from './edit-meal.component';
import { CaloriePipe } from './calorie-pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  pipes: [CaloriePipe],
  directives: [MealComponent, EditMealComponent],
  template: `
  <select (change)="onChange($event.target.value)" class="filter form-control">
    <option value="all">Show All</option>
    <option value="unhealthy">Unhealthy</option>
    <option value="healthy">Healthy</option>
  </select>
  <meal-display *ngFor="#meal of mealList | calorie:filterCalorie" (click)="mealClicked(meal)" [class.selected]="meal === selectedMeal" [meal]="meal" [mealList]="mealList">
   </meal-display>
   <edit-meal *ngIf="selectedMeal" [meal]="selectedMeal"></edit-meal>
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
  onChange(filterOption){
    this.filterCalorie = filterOption;
  }
}
