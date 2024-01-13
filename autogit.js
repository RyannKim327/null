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
    }

    if (value < node.value) {
      return this.searchNode(node.left, value);
    } else if (value > node.value) {
      return this.searchNode(node.right, value);
    } else {
      return true;
    }
  }

  remove(value) {
    this.root = this.removeNode(this.root, value);
  }

  removeNode(node, value) {
    if (node === null) {
      return null;
    }

    if (value < node.value) {
      node.left = this.removeNode(node.left, value);
      return node;
    } else if (value > node.value) {
      node.right = this.removeNode(node.right, value);
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

      const aux = this.findMinNode(node.right);
      node.value = aux.value;
      node.right = this.removeNode(node.right, aux.value);
      return node;
    }
  }

  findMinNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }

  getRootNode() {
    return this.root;
  }

  inorder(node) {
    if (node === null) {
      return [];
    }

    return [...this.inorder(node.left), node.value, ...this.inorder(node.right)];
  }

  preorder(node) {
    if (node === null) {
      return [];
    }

    return [node.value, ...this.preorder(node.left), ...this.preorder(node.right)];
  }

  postorder(node) {
    if (node === null) {
      return [];
    }

    return [...this.postorder(node.left), ...this.postorder(node.right), node.value];
  }
}
const bst = new BinarySearchTree();

// Insert nodes
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(7);
bst.insert(13);
bst.insert(20);

// Get the root node
const root = bst.getRootNode();
console.log('Root:', root); // Node { value: 10, left: Node {...}, right: Node {...} }

// Search for a value
console.log('Search 13:', bst.search(13)); // true
console.log('Search 11:', bst.search(11)); // false

// In-order traversal
console.log('In-order:', bst.inorder(root)); // [ 5, 7, 10, 13, 15, 20 ]

// Pre-order traversal
console.log('Pre-order:', bst.preorder(root)); // [ 10, 5, 7, 15, 13, 20 ]

// Post-order traversal
console.log('Post-order:', bst.postorder(root)); // [ 7, 5, 13, 20, 15, 10 ]

// Remove a node
bst.remove(15);
console.log('New In-order:', bst.inorder(root)); // [ 5, 7, 10, 13, 20 ]
