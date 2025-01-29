let array = [1, 2, 3, 4, 5];
let index: number = array.indexOf(3);
if(index !== -1) {
    array.splice(index, 1);
}
console.log(array); // [1, 2, 4, 5]
interface Person {
  name: string;
  age: number;
}

let array = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
  { name: 'Bill', age: 35 }
];

let personToRemove: Person = array.find((p) => p.name === 'Jane');
if (personToRemove) {
  array.splice(array.indexOf(personToRemove), 1);
}
console.log(array);
// [{ name: 'John', age: 25 }, { name: 'Bill', age: 35 }]
