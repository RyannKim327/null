class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
function diameterOfBinaryTree(root) {
  // base case: an empty tree has a diameter of 0
  if (root === null) {
    return 0;
  }

  // calculate the diameter recursively for the left and right subtrees
  const leftHeight = heightOfBinaryTree(root.left);
  const rightHeight = heightOfBinaryTree(root.right);

  // calculate the diameter passing through the root node
  const throughRoot = leftHeight + rightHeight;

  // calculate the diameters of the left and right subtrees
  const leftDiameter = diameterOfBinaryTree(root.left);
  const rightDiameter = diameterOfBinaryTree(root.right);

  // return the maximum of the three diameters
  return Math.max(throughRoot, leftDiameter, rightDiameter);
}
function heightOfBinaryTree(node) {
  // base case: an empty tree has a height of 0
  if (node === null) {
    return 0;
  }

  // recursively calculate the heights of the left and right subtrees
  const leftHeight = heightOfBinaryTree(node.left);
  const rightHeight = heightOfBinaryTree(node.right);

  // the height of the tree is the maximum height of its subtrees plus 1
  return Math.max(leftHeight, rightHeight) + 1;
}
// Create the binary tree
const rootNode = new Node(1);
rootNode.left = new Node(2);
rootNode.right = new Node(3);
rootNode.left.left = new Node(4);
rootNode.left.right = new Node(5);

// Calculate the diameter
const diameter = diameterOfBinaryTree(rootNode);
console.log("Diameter of binary tree:", diameter);
