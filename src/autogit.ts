function mergeSort<T>(array: T[]): T[] {
  // Base case: arrays with fewer than 2 elements are sorted
  if (array.length <= 1) {
    return array;
  }

  // Split array into two halves
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  // Recursively sort both halves and merge them
  return merge(mergeSort(left), mergeSort(right));
}

function merge<T>(left: T[], right: T[]): T[] {
  const result: T[] = [];
  let i = 0, j = 0;

  // Merge elements from left and right in order
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Append remaining elements (if any)
  return result.concat(left.slice(i)).concat(right.slice(j));
}

// Example usage:
const unsorted = [38, 27, 43, 3, 9, 82, 10];
const sorted = mergeSort(unsorted);
console.log(sorted); // [3, 9, 10, 27, 38, 43, 82]
function mergeSort<T>(array: T[], compare: (a: T, b: T) => boolean): T[] {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left, compare), mergeSort(right, compare), compare);
}

function merge<T>(left: T[], right: T[], compare: (a: T, b: T) => boolean): T[] {
  const result: T[] = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (compare(left[i], right[j])) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}

// Example for sorting objects by a property
interface Person {
  name: string;
  age: number;
}

const people: Person[] = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 20 },
  { name: "Eve", age: 30 }
];

const sortedPeople = mergeSort(people, (a, b) => a.age <= b.age);
console.log(sortedPeople);
