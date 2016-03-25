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
  <meal-display *ngFor="#meal of mealList | calorie:filterCalorie" (click)="mealClicked(meal)" [class.selected]="meal === selectedMeal" [meal]="meal" [mealList]="mealList">
   </meal-display>
   <edit-meal *ngIf="selectedMeal" [meal]="selectedMeal"></edit-meal>
   <add-meal (onSubmitAddMeal)="addMeal($event)"></add-meal>
   <button (click)="totalCalories(mealList)" class="btn btn-danger">Show Total Calories</button>
   <h3 *ngIf="totalCals > 0">Total calories: {{ totalCals }} </h3>
   <button (click)="averageCalories(mealList)" class="btn btn-danger">Show Average Calories</button>
   <h3 *ngIf="avgCals > 0">Average calories: {{ avgCals }}<h3>
  `
})

export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public filterCalorie: string = "all";
  public calorieTotal: number = null;
  totalCals: number;
  avgCals: number;
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  addMeal(eventArr):void {
    this.mealList.push(
      new Meal(eventArr[0], eventArr[1], eventArr[2])
    );
  }
  onChange(filterOption){
    this.filterCalorie = filterOption;
  }
  totalCalories(mealList: Meal[], calorieTotal){
    this.calorieTotal = 0;
    for (var meal of mealList) {
      this.calorieTotal = this.calorieTotal + meal.calories;
    }
      this.totalCals = this.calorieTotal;
  }
  averageCalories(mealList: Meal[]){
    this.calorieTotal = 0;
    for (var meal of mealList) {
      this.calorieTotal = this.calorieTotal + meal.calories;
    }
      this.avgCals = this.calorieTotal / mealList.length;
  }
}
