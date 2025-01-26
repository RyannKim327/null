const originalString = 'hello';
const reversedString = originalString.split('').reverse().join('');
console.log(reversedString); // outputs: "olleh"
const originalString = 'hello';
const reversedString = [...originalString].reverse().join('');
console.log(reversedString); // outputs: "olleh"
const originalString = 'hello';
let reversedString = '';
for (let i = originalString.length - 1; i >= 0; i--) {
  reversedString += originalString[i];
}
console.log(reversedString); // outputs: "olleh"
