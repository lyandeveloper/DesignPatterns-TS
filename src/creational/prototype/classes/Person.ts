import { Prototype } from '../interfaces/prototype';

export class Person implements Prototype {
  public name: string;
  public birthday: string;
  public age: number; 

  constructor(name: string, birthday: string, age: number) {
    this.name = name;
    this.birthday = birthday;
    this.age = age;
  }
  
  clone(): this {
    const clone = Object.create(this);
    return clone;
  }
}