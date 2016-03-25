import { Pipe, PipeTransform } from 'angular2/core';
import { Meal } from './meal.model';

@Pipe({
  name: 'calorie'
})

export class CaloriePipe implements PipeTransform {
  transform(input: Meal[], args) {
    var calorieFilter = args[0];
    console.log(calorieFilter);
    if(calorieFilter === 'unhealthy') {
      console.log(input);
      return input.filter((meal) => {
        return meal.calories > 300;
      })
    } else if (calorieFilter === 'healthy') {
      return input.filter((meal) => {
        return meal.calories < 300;
      })
    } else {
      return input;
    }
  }
}
