import { HouseBuilderProtocol } from '../interfaces/HouseBuilderProtocol';
import { HouseBuilder } from './HouseBuilder';

export class Director {
  private builder: HouseBuilderProtocol;

  public setBuilder(builder: HouseBuilderProtocol): void {
    this.builder = builder;
  }

  public buildHouseWithGarage(): void {
    this.builder.buildWalls();
    this.builder.buildFloor();
    this.builder.buildRoof();
    this.builder.buildGarage();
  }

  public buildHouseWithGarden(): void {
    this.builder.buildWalls();
    this.builder.buildFloor();
    this.builder.buildRoof();
    this.builder.buildGarden();
  }
}
