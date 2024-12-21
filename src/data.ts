import { StatePlant } from "./plant";

export const plantsData = [
  {
    name: "Cucumber",
    price: 12,
    priceSell: 17,
    growTime: 1000, // уточнить есть ли в ts время
    waterValueIncrease: 2,
    feedValueIncrease: 4,
    statePlant: StatePlant.Germination,
  },
];
