function findKthSmallestElement(arr, k) {
  arr.sort((a, b) => a - b);
  return arr[k - 1];
}

const array = [4, 2, 8, 1, 5];
const k = 2;
const kthSmallest = findKthSmallestElement(array, k); // Returns 2
console.log(kthSmallest);
const PriorityQueue = require('js-priority-queue');

function findKthSmallestElement(arr, k) {
  const priorityQueue = new PriorityQueue({ comparator: (a, b) => a - b });

  for (const num of arr) {
    priorityQueue.queue(num);
  }

  for (let i = 1; i < k; i++) {
    priorityQueue.dequeue();
  }

  return priorityQueue.dequeue();
}

const array = [4, 2, 8, 1, 5];
const k = 2;
const kthSmallest = findKthSmallestElement(array, k); // Returns 2
console.log(kthSmallest);
