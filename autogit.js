class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      // If the tree is empty, set the new node as the root
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      // If the new node value is less than the current node value, go to the left subtree
      if (node.left === null) {
        // If left child is null, insert the new node
        node.left = newNode;
      } else {
        // Recursively insert into the left subtree
        this.insertNode(node.left, newNode);
      }
    } else {
      // If the new node value is greater than or equal to the current node value, go to the right subtree
      if (node.right === null) {
        // If right child is null, insert the new node
        node.right = newNode;
      } else {
        // Recursively insert into the right subtree
        this.insertNode(node.right, newNode);
      }
    }
  }

  // Additional methods like search, delete, traverse can be implemented here
}

// Usage example
const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(7);
tree.insert(12);

console.log(tree);
