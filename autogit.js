class TreeNode {
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
    const newNode = new TreeNode(value);

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
    }

    if (node.value === value) {
      return true;
    }

    if (value < node.value) {
      return this.searchNode(node.left, value);
    } else {
      return this.searchNode(node.right, value);
    }
  }

  remove(value) {
    this.root = this.removeNode(this.root, value);
  }

  removeNode(node, key) {
    if (node === null) {
      return null;
    }

    if (key < node.value) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.value) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      const minValue = this.findMinValue(node.right);
      node.value = minValue;
      node.right = this.removeNode(node.right, minValue);
      return node;
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

// Example usage:
const tree = new BinaryTree();
tree.insert(8);
tree.insert(3);
tree.insert(10);
tree.insert(1);
tree.insert(6);

console.log(tree.search(6)); // Output: true
console.log(tree.search(11)); // Output: false

tree.remove(3);
console.log(tree.search(3)); // Output: false
