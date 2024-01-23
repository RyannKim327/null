class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function sumBinaryTree(root) {
  if (!root) {
    return 0;
  }
  
  // Perform DFS traversal
  const stack = [root];
  let sum = 0;
  
  while (stack.length > 0) {
    const node = stack.pop();
    
    // Add the value of the current node to the sum
    sum += node.value;
    
    // Traverse the left and right subtrees
    if (node.left) {
      stack.push(node.left);
    }
    if (node.right) {
      stack.push(node.right);
    }
  }
  
  return sum;
}

// Usage example:
// Create a binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

// Find the sum of all nodes
const sum = sumBinaryTree(root);
console.log(sum); // Output: 28
