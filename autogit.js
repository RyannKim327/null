class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findSum(root) {
  // Base case: if the root is null, return 0
  if (root === null) {
    return 0;
  }
  
  // Recursively calculate the sum of left and right subtrees
  const leftSum = findSum(root.left);
  const rightSum = findSum(root.right);
  
  // Add the value of the current node to the sums of subtrees
  const sum = leftSum + rightSum + root.value;
  
  return sum;
}

// Test the function
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log(findSum(root)); // Output: 15
