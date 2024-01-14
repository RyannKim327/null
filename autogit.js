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
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  contains(value) {
    return this.containsNode(this.root, value);
  }

  containsNode(node, value) {
    if (!node) {
      return false;
    }

    if (value === node.value) {
      return true;
    } else if (value < node.value) {
      return this.containsNode(node.left, value);
    } else {
      return this.containsNode(node.right, value);
    }
  }

  remove(value) {
    this.root = this.removeNode(this.root, value);
  }

  removeNode(node, value) {
    if (!node) {
      return null;
    }

    if (value === node.value) {
      if (!node.left && !node.right) {
        return null;
      } else if (!node.left) {
        return node.right;
      } else if (!node.right) {
        return node.left;
      } else {
        const temp = this.findMinNode(node.right);
        node.value = temp.value;
        node.right = this.removeNode(node.right, temp.value);
        return node;
      }
    } else if (value < node.value) {
      node.left = this.removeNode(node.left, value);
      return node;
    } else {
      node.right = this.removeNode(node.right, value);
      return node;
    }
  }

  findMinNode(node) {
    if (!node.left) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }
}
const tree = new BinaryTree();

tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(2);
tree.insert(7);

console.log(tree.contains(7)); // Output: true
console.log(tree.contains(20)); // Output: false

tree.remove(5);
console.log(tree.contains(5)); // Output: false
