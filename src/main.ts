import { plantsData } from "./data";
import { GardenCell } from "./garden";
import { PlantManager, Plant, StatePlant } from "./plant";

console.log(plantsData);

function render() {}

function main() {
  const PlantCucumber: Plant = {
    name: "Cucumber",
    price: 12,
    priceSell: 17,
    growTime: 1000, // уточнить есть ли в ts время
    waterValueIncrease: 2,
    feedValueIncrease: 4,
    statePlant: StatePlant.Germination,
  };

  const garden = new GardenCell();
  const plantManager = new PlantManager(PlantCucumber);

  console.log("Состояние грядки:", garden.stateToString());
}

main();
