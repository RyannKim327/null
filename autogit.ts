const originalArray = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = Array.from(new Set(originalArray));
console.log(uniqueArray); // [1, 2, 3, 4, 5]
const originalArray = ['a', 'b', 'a', 'c', 'b'];
const uniqueArray = originalArray.filter((item, index) => 
  originalArray.indexOf(item) === index
);
console.log(uniqueArray); // ['a', 'b', 'c']
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
  new Map(people.map(person => [person.id, person])).values()
);
console.log(uniquePeople);
