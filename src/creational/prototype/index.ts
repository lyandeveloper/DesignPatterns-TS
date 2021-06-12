import { Person } from './classes/Person';

const p1 = new Person('Elian', '21/12/1998', 22)
const p2 = p1.clone();
const p3 = p1.clone();

console.log(`Nome: ${p2.name}, Nascimento: ${p2.birthday}, Idade: ${p2.age}`)
console.log(`Nome: ${p3.name}, Nascimento: ${p3.birthday}, Idade: ${p3.age}`)