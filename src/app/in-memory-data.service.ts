import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Car } from './car';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const cars = [
      { id: 12, name: 'Mercedes' },
      { id: 13, name: 'Audi' },
      { id: 14, name: 'BMQ' },
      { id: 15, name: 'Ferrari' },
      { id: 16, name: 'Lamborghini' },
      { id: 17, name: 'VW' },
      { id: 18, name: 'Skoda' },
      { id: 19, name: 'Bugatti' },
      { id: 20, name: 'Nissan' }
    ];
    return {cars};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(cars: Car[]): number {
    return cars.length > 0 ? Math.max(...cars.map(car => car.id)) + 1 : 11;
  }
}