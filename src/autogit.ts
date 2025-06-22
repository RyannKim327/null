let numbers: number[] = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // Output: [5, 4, 3, 2, 1]
let original: string[] = ['a', 'b', 'c', 'd'];
let reversed: string[] = [...original].reverse(); // Using spread operator to copy
console.log(original); // Output: ['a', 'b', 'c', 'd']
console.log(reversed); // Output: ['d', 'c', 'b', 'a']
const fruits: string[] = ['apple', 'banana', 'cherry'];
const reversedFruits: string[] = [...fruits].reverse();

console.log(fruits);         // Output: ['apple', 'banana', 'cherry']
console.log(reversedFruits); // Output: ['cherry', 'banana', 'apple']
function reverseArray<T>(arr: T[]): T[] {
    const reversed: T[] = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

const letters: string[] = ['x', 'y', 'z'];
const reversedLetters = reverseArray(letters);
console.log(letters);          // Output: ['x', 'y', 'z']
console.log(reversedLetters);  // Output: ['z', 'y', 'x']
const nums: number[] = [10, 20, 30, 40];
const reversedNums = nums.reduce((acc: number[], current: number) => {
    acc.unshift(current);
    return acc;
}, []);

console.log(nums);         // Output: [10, 20, 30, 40]
console.log(reversedNums); // Output: [40, 30, 20, 10]
function reverseRecursively<T>(arr: T[]): T[] {
    if (arr.length <= 1) {
        return arr;
    }
    return [arr[arr.length - 1], ...reverseRecursively(arr.slice(0, -1))];
}

const colors: string[] = ['red', 'green', 'blue'];
const reversedColors = reverseRecursively(colors);

console.log(colors);         // Output: ['red', 'green', 'blue']
console.log(reversedColors); // Output: ['blue', 'green', 'red']
// Original array
const vehicles: string[] = ['car', 'bike', 'bus', 'train'];

// Method 1: Using reverse() – mutates the original array
const reversedVehicles1 = [...vehicles].reverse();
console.log('Method 1:', reversedVehicles1); // ['train', 'bus', 'bike', 'car']

// Method 2: Using a for loop
function reverseWithLoop<T>(arr: T[]): T[] {
    const reversed: T[] = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}
const reversedVehicles2 = reverseWithLoop(vehicles);
console.log('Method 2:', reversedVehicles2); // ['train', 'bus', 'bike', 'car']

// Method 3: Using reduce
const reversedVehicles3 = vehicles.reduce((acc: string[], current: string) => {
    acc.unshift(current);
    return acc;
}, []);
console.log('Method 3:', reversedVehicles3); // ['train', 'bus', 'bike', 'car']

// Method 4: Using recursion
function reverseRecursively<T>(arr: T[]): T[] {
    if (arr.length <= 1) return arr;
    return [arr[arr.length - 1], ...reverseRecursively(arr.slice(0, -1))];
}
const reversedVehicles4 = reverseRecursively(vehicles);
console.log('Method 4:', reversedVehicles4); // ['train', 'bus', 'bike', 'car']

// Original array remains unchanged
console.log('Original:', vehicles); // ['car', 'bike', 'bus', 'train']
Method 1: [ 'train', 'bus', 'bike', 'car' ]
Method 2: [ 'train', 'bus', 'bike', 'car' ]
Method 3: [ 'train', 'bus', 'bike', 'car' ]
Method 4: [ 'train', 'bus', 'bike', 'car' ]
Original: [ 'car', 'bike', 'bus', 'train' ]
