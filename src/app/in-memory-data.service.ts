import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Car } from './car';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const cars = [
      { id: 12, brand: 'Mercedes', model: 'C63' },
      { id: 13, brand: 'Audi', model: 'A4' },
      { id: 14, brand: 'BMW', model: 'E32' },
      { id: 15, brand: 'Ferrari', model: 'F40' },
      { id: 16, brand: 'Lamborghini', model: 'Aventador' },
      { id: 17, brand: 'VW', model: 'Polo' },
      { id: 18, brand: 'Skoda', model: 'Octavia' },
      { id: 19, brand: 'Bugatti', model: 'Chiron' },
      { id: 20, brand: 'Nissan', model: 'Skyline' }
    ];
    return {cars};
  }

  // Overrides the genId method to ensure that a car always has an id.
  // If the cars array is empty,
  // the method below returns the initial number (11).
  // if the cars array is not empty, the method below returns the highest
  // car id + 1.
  genId(cars: Car[]): number {
    return cars.length > 0 ? Math.max(...cars.map(car => car.id)) + 1 : 11;
  }
}