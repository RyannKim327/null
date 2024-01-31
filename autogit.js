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

    if (!this.root) {
      // If tree is empty, make new node as root
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      // If the new value is less than the current node, go left
      if (node.left === null) {
        // If no left child, insert new node as left child
        node.left = newNode;
      } else {
        // Recursively insert on the left subtree
        this.insertNode(node.left, newNode);
      }
    } else {
      // If the new value is greater than or equal to the current node, go right
      if (node.right === null) {
        // If no right child, insert new node as right child
        node.right = newNode;
      } else {
        // Recursively insert on the right subtree
        this.insertNode(node.right, newNode);
      }
    }
  }

  search(value) {
    return this.searchNode(this.root, value);
  }

  searchNode(node, value) {
    if (node === null) {
      // Value not found in the tree
      return false;
    }

    if (value < node.value) {
      // If the value is less than the current node, search in the left subtree
      return this.searchNode(node.left, value);
    } else if (value > node.value) {
      // If the value is greater than the current node, search in the right subtree
      return this.searchNode(node.right, value);
    } else {
      // Value found
      return true;
    }
  }
}
const tree = new BinaryTree();
tree.insert(5);
tree.insert(3);
tree.insert(8);
tree.insert(1);
tree.insert(4);

console.log(tree.search(4)); // Output: true
console.log(tree.search(6)); // Output: false
