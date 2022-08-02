import { Pipe, PipeTransform } from '@angular/core';
import { Car } from 'src/app/models/car';

@Pipe({
  name: 'carPipe',
})
export class CarPipePipe implements PipeTransform {
  transform(value: Car[], carFilter: string): Car[] {
    carFilter = carFilter ? carFilter.toLowerCase() : '';

    return carFilter
      ? value.filter(
          (car: Car) =>
            car.description.toLowerCase().indexOf(carFilter) !== -1 ||
            car.brandName.toLowerCase().indexOf(carFilter) !== -1
        )
      : value;
  }
}
