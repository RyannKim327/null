class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function countLeafNodes(node) {
  if (node === null) {
    return 0;
  }

  if (node.left === null && node.right === null) {
    return 1; // node is a leaf node
  }

  // Recursively count leaf nodes in the left and right subtrees
  return countLeafNodes(node.left) + 
         countLeafNodes(node.right);
}

// Example binary tree
//        1
//       / \
//      2   3
//     / \
//    4   5
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

const leafNodeCount = countLeafNodes(root);
console.log(`Number of leaf nodes in the binary tree: ${leafNodeCount}`);
