function findLongestIncreasingSubsequence(array) {
  const lengths = new Array(array.length).fill(1); // Array to store lengths of increasing subsequences
  const sequences = new Array(array.length); // Array to store the actual increasing subsequences

  for (let i = 0; i < array.length; i++) {
    sequences[i] = [array[i]]; // Start each sequence with the current element

    for (let j = 0; j < i; j++) {
      if (array[j] < array[i] && lengths[j] + 1 > lengths[i]) {
        // If the element at j is smaller than i, and adding it to the sequence makes a longer subsequence
        lengths[i] = lengths[j] + 1;

        // Copy the subsequence from "sequences[j]" and add current element
        sequences[i] = sequences[j].concat(array[i]);
      }
    }
  }

  // Find the longest subsequence
  let longestLength = 0;
  let longestSequence = [];

  for (const sequence of sequences) {
    if (sequence.length > longestLength) {
      longestLength = sequence.length;
      longestSequence = sequence;
    }
  }

  return longestSequence;
}

// Example usage
const array = [3, 4, -1, 0, 6, 2, 3];
const longestIncreasingSubsequence = findLongestIncreasingSubsequence(array);
console.log(longestIncreasingSubsequence); // Output: [-1, 0, 2, 3]
