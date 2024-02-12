class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Insert a value into the binary search tree
  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  // Helper method to insert a node into the tree
  insertNode(node, newNode) {
    if (newNode.value < node.value) {
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

  // Perform an in-order traversal of the tree and return the result as an array
  inOrderTraversal() {
    const result = [];

    const traverse = node => {
      if (node !== null) {
        traverse(node.left);
        result.push(node.value);
        traverse(node.right);
      }
    };

    traverse(this.root);

    return result;
  }
}

// Usage
const bst = new BinarySearchTree();
bst.insert(8); //      8
bst.insert(3); //    /   \
bst.insert(10); //   3     10
bst.insert(1); //   / \      \
bst.insert(6); //  1   6     14
bst.insert(14); //
console.log(bst.inOrderTraversal()); // Output: [1, 3, 6, 8, 10, 14]
