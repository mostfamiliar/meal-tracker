import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app',
  template: `
  <div class="container">
  <h1>Test</h1>
  </div>
  `
})

export class AppComponent {
  public meals: Meal[];
  constructor() {
    this.meals = [
      new Meal("Veggie Burger", "No mayo", 250),
      new Meal("Pizza", "ate 3 slices", 350),
      new Meal("Kale Smoothie", "with chia", 160),
      new Meal("Vegan Pho", "Full of vegetables", 190)
    ];
  }
}
