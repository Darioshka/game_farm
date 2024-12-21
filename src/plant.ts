/* Интерфейс в TypeScript — это способ описания структуры объекта, определяющий, 
какие свойства и методы должны быть у объекта, но не содержащий их реализации. */

export enum StatePlant {
  Germination, // семеена
  Seedling, // ростки
  Vegetative, // активная фаза
  Fruiting, // готово для сбора
}

export interface Plant {
  name: string;
  price: number;
  priceSell: number;
  growTime: number; // уточнить есть ли в ts время
  waterValueIncrease: number;
  feedValueIncrease: number;
  statePlant: StatePlant;
}

export class PlantManager {
  private plant: Plant;

  constructor(plant: Plant) {
    this.plant = plant; // экземляр класса равен параметру plant\\
  }

  buy(): void {}
}
