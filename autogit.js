class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function sumBinaryTree(root) {
  if (root === null) {
    return 0; // Base case: Empty tree has sum 0
  }

  const leftSum = sumBinaryTree(root.left); // Recursively calculate sum of left subtree
  const rightSum = sumBinaryTree(root.right); // Recursively calculate sum of right subtree

  return root.value + leftSum + rightSum; // Sum root value with sums of left and right subtrees
}

// Example usage:

//      4
//     / \
//    2   6
//   / \
//  1   3

const root = new Node(4);
root.left = new Node(2);
root.right = new Node(6);
root.left.left = new Node(1);
root.left.right = new Node(3);

const sum = sumBinaryTree(root);
console.log(sum); // Output: 16 (4 + 2 + 6 + 1 + 3 = 16)
