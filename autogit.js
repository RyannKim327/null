class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Function to calculate the height of a node
function height(node) {
  if (node === null)
    return 0;
  else
    return Math.max(height(node.left), height(node.right)) + 1;
}

// Function to calculate the diameter of a binary tree
function diameter(node) {
  if (node === null)
    return 0;

  // Calculate the height of the left and right subtrees
  const leftHeight = height(node.left);
  const rightHeight = height(node.right);

  // Calculate the diameter of the left and right subtrees recursively
  const leftDiameter = diameter(node.left);
  const rightDiameter = diameter(node.right);

  // Return the maximum of the following three values:
  //   - Diameter of the left subtree
  //   - Diameter of the right subtree
  //   - Length of the longest path between two nodes that passes through the root
  return Math.max(leftHeight + rightHeight + 1, Math.max(leftDiameter, rightDiameter));
}

// Example usage:

/*
       1
      / \
     2   3
    / \
   4   5
*/

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log("Diameter of the binary tree:", diameter(root));
