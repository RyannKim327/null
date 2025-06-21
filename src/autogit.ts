// Original array
const fruits: string[] = ['Apple', 'Banana', 'Cherry', 'Date'];

// Method 1: Using reverse() - modifies original array
const reversedFruits1 = fruits.slice().reverse();
console.log('Original:', fruits); // ['Apple', 'Banana', 'Cherry', 'Date']
console.log('Reversed (Method 1):', reversedFruits1); // ['Date', 'Cherry', 'Banana', 'Apple']

// Method 2: Using for loop
function reverseWithLoop<T>(arr: T[]): T[] {
    const reversed: T[] = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}
const reversedFruits2 = reverseWithLoop(fruits);
console.log('Reversed (Method 2):', reversedFruits2); // ['Date', 'Cherry', 'Banana', 'Apple']

// Method 3: Using reduce()
const reversedFruits3 = fruits.reduce((acc, fruit) => {
    acc.unshift(fruit);
    return acc;
}, [] as string[]);
console.log('Reversed (Method 3):', reversedFruits3); // ['Date', 'Cherry', 'Banana', 'Apple']

// Method 4: Using spread operator
const reversedFruits4 = [...fruits].reverse();
console.log('Reversed (Method 4):', reversedFruits4); // ['Date', 'Cherry', 'Banana', 'Apple']
Original: ['Apple', 'Banana', 'Cherry', 'Date']
Reversed (Method 1): ['Date', 'Cherry', 'Banana', 'Apple']
Reversed (Method 2): ['Date', 'Cherry', 'Banana', 'Apple']
Reversed (Method 3): ['Date', 'Cherry', 'Banana', 'Apple']
Reversed (Method 4): ['Date', 'Cherry', 'Banana', 'Apple']
