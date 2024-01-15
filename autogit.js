class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function sumOfNodes(root) {
  if (!root) {
    return 0; // Base case: null node, sum is 0
  }

  const sumLeft = sumOfNodes(root.left);   // Recursively calculate sum of nodes in the left subtree
  const sumRight = sumOfNodes(root.right); // Recursively calculate sum of nodes in the right subtree

  return root.value + sumLeft + sumRight;  // Return the sum of current node value and the sums of subtrees
}
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);

const sum = sumOfNodes(root);
console.log(sum); // Output: 21
        1
       / \
      2   3
     / \ 
    4   5
   /
  6
