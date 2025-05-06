function secondLargest(arr: number[]): number | null {
    if (arr.length < 2) {
        return null; // Not enough elements
    }

    let first = Number.MIN_SAFE_INTEGER;
    let second = Number.MIN_SAFE_INTEGER;

    for (const num of arr) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num != first) {
            second = num;
        }
    }

    return (second === Number.MIN_SAFE_INTEGER) ? null : second;
}

// Example usage:
const array = [12, 35, 1, 10, 34, 1];
console.log(secondLargest(array)); // Output: 34
function secondLargest(arr: number[]): number | null {
    const uniqueArr = Array.from(new Set(arr)); // Remove duplicates
    uniqueArr.sort((a, b) => b - a); // Sort in descending order

    return uniqueArr.length < 2 ? null : uniqueArr[1];
}

// Example usage:
const array = [12, 35, 1, 10, 34, 1];
console.log(secondLargest(array)); // Output: 34
function secondLargest(arr: number[]): number | null {
    const { first, second } = arr.reduce((acc, curr) => {
        if (curr > acc.first) {
            acc.second = acc.first; // Previous first becomes second
            acc.first = curr; // Update first
        } else if (curr > acc.second && curr !== acc.first) {
            acc.second = curr; // Update second if current is not equal to first
        }
        return acc;
    }, { first: Number.MIN_SAFE_INTEGER, second: Number.MIN_SAFE_INTEGER });

    return (second === Number.MIN_SAFE_INTEGER) ? null : second;
}

// Example usage:
const array = [12, 35, 1, 10, 34, 1];
console.log(secondLargest(array)); // Output: 34
