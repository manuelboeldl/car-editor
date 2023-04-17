import { Component } from '@angular/core';
import { Car } from '../car';
import { CarService } from '../car.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  cars: Car[] = [];

  constructor(private carService: CarService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getCars();
  }

  getCars(): void {
    this.carService.getCars().subscribe(cars => this.cars = cars);
  }

  add(brand: string, model:string, power?:string): void {
    brand = brand.trim();
    model = model.trim();

    if (!brand || !model) { return; }
    this.carService.addCar({ brand, model, power } as Car)
      .subscribe(car => {
        this.cars.push(car);
      });
  }

  delete(car: Car): void {
    this.cars = this.cars.filter(c => c !== car);
    this.carService.deleteCar(car.id).subscribe();
  }
}
