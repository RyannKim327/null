// Define the node of the binary search tree
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// Define the binary search tree
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Insert a new node into the tree
  insert(data) {
    const newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  // Helper function to recursively insert a node
  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // Perform an inorder traversal of the tree and return the resulting array
  inorderTraversal() {
    const result = [];

    const inorder = (node) => {
      if (node !== null) {
        inorder(node.left);
        result.push(node.data);
        inorder(node.right);
      }
    };

    inorder(this.root);

    return result;
  }
}

// Usage example
const bst = new BinarySearchTree();
bst.insert(5);
bst.insert(3);
bst.insert(8);
bst.insert(1);
bst.insert(4);
bst.insert(7);
bst.insert(9);

console.log(bst.inorderTraversal()); // Output: [1, 3, 4, 5, 7, 8, 9]
