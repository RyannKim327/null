const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = Array.from(new Set(array));
console.log(uniqueArray); // [1, 2, 3, 4, 5]
const uniqueArray = [...new Set(array)];
const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = array.filter((item, index) => array.indexOf(item) === index);
console.log(uniqueArray); // [1, 2, 3, 4, 5]
interface Person {
  id: number;
  name: string;
}

const people: Person[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 1, name: "Alice" },
];

const uniquePeople = people.filter(
  (person, index, self) =>
    index === self.findIndex((p) => p.id === person.id)
);

console.log(uniquePeople);
