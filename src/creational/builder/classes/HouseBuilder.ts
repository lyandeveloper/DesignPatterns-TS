import { HouseBuilderProtocol } from '../interfaces/HouseBuilderProtocol';
import { House } from './House';

export class HouseBuilder implements HouseBuilderProtocol {
  private house: House;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.house = new House();
  }

  buildWalls(): void {
    this.house.parts.push('Walls');
  }
  buildRoof(): void {
    this.house.parts.push('Roof');
  }
  buildFloor(): void {
    this.house.parts.push('Floor');
  }
  buildGarage(): void {
    this.house.parts.push('Garage');
  }
  buildGarden(): void {
    this.house.parts.push('Garden');
  }

  public getHouse(): House {
    const result = this.house;
    this.reset();
    return result;
  }
}
