const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = Array.from(new Set(numbers));
console.log(uniqueNumbers); // [1, 2, 3, 4, 5]
const uniqueNumbers = [...new Set(numbers)];
interface Person {
  id: number;
  name: string;
}

const people: Person[] = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 1, name: 'Alice' },
];

const uniquePeople = Array.from(
  new Map(people.map(p => [p.id, p])).values()
);

console.log(uniquePeople);
// [
//   { id: 1, name: 'Alice' },
//   { id: 2, name: 'Bob' }
// ]
const uniqueNumbers = numbers.filter((item, index) => numbers.indexOf(item) === index);
