import { Director } from './classes/Director';
import { HouseBuilder } from './classes/HouseBuilder';

const builder = new HouseBuilder();
const director = new Director();
director.setBuilder(builder);

console.log('House with garage');
director.buildHouseWithGarage();
builder.getHouse().listParts();

console.log('House with garden');
director.buildHouseWithGarden();
builder.getHouse().listParts();

console.log('Custom Parts');
builder.buildWalls();
builder.buildFloor();
builder.buildRoof();
builder.getHouse().listParts();
