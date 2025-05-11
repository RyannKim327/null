const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = Array.from(new Set(numbers));
console.log(uniqueNumbers); // [1, 2, 3, 4, 5]
const uniqueNumbers = [...new Set(numbers)];
const uniqueNumbers = numbers.filter((item, index) => numbers.indexOf(item) === index);
interface User {
  id: number;
  name: string;
}

const users: User[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 1, name: "Alice" }
];

const uniqueUsers = Array.from(new Map(users.map(user => [user.id, user])).values());
console.log(uniqueUsers);
