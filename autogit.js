const numbers = [1, 6, 3, 9, 2, 7];
const max = Math.max(...numbers);
console.log(max); // Output: 9
const students = [
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 92 },
  { name: 'Charlie', score: 78 },
];

const maxScore = students.reduce((max, student) => {
  return student.score > max ? student.score : max;
}, -Infinity);

console.log(maxScore); // Output: 92
