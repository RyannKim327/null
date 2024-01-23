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
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

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

  search(value) {
    return this.searchNode(this.root, value);
  }

  searchNode(node, value) {
    if (node === null) {
      return false;
    } else if (value < node.value) {
      return this.searchNode(node.left, value);
    } else if (value > node.value) {
      return this.searchNode(node.right, value);
    } else {
      return true; // Node found
    }
  }

  remove(value) {
    this.root = this.removeNode(this.root, value);
  }

  removeNode(node, value) {
    if (node === null) {
      return null;
    } else if (value < node.value) {
      node.left = this.removeNode(node.left, value);
      return node;
    } else if (value > node.value) {
      node.right = this.removeNode(node.right, value);
      return node;
    } else {
      // Node found, perform removal
      if (node.left === null && node.right === null) {
        // Case 1: No child
        node = null;
        return node;
      } else if (node.left === null) {
        // Case 2: One child (right)
        node = node.right;
        return node;
      } else if (node.right === null) {
        // Case 2: One child (left)
        node = node.left;
        return node;
      } else {
        // Case 3: Two children
        const minRight = this.findMinValue(node.right);
        node.value = minRight;
        node.right = this.removeNode(node.right, minRight);
        return node;
      }
    }
  }

  findMinValue(node) {
    if (node.left === null) {
      return node.value;
    } else {
      return this.findMinValue(node.left);
    }
  }
}
// Creating an instance of the binary tree
const tree = new BinaryTree();

// Inserting nodes
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

// Searching for a value
console.log(tree.search(8)); // Output: true
console.log(tree.search(14)); // Output: false

// Removing a node
tree.remove(8);
console.log(tree.search(8)); // Output: false
