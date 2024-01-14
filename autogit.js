class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}
class AVLTree {
  constructor() {
    this.root = null;
  }

  // Implement various operations such as insert, delete, search, etc.
}
insert(data) {
  this.root = this._insertNode(this.root, data);
}

_height(node) {
  if (node === null) return 0;
  return node.height;
}

_getBalance(node) {
  if (node === null) return 0;
  return this._height(node.left) - this._height(node.right);
}

_rotateRight(node) {
  const newRoot = node.left;
  const temp = newRoot.right;

  newRoot.right = node;
  node.left = temp;

  node.height = Math.max(this._height(node.left), this._height(node.right)) + 1;
  newRoot.height = Math.max(this._height(newRoot.left), this._height(newRoot.right)) + 1;

  return newRoot;
}

_rotateLeft(node) {
  const newRoot = node.right;
  const temp = newRoot.left;

  newRoot.left = node;
  node.right = temp;

  node.height = Math.max(this._height(node.left), this._height(node.right)) + 1;
  newRoot.height = Math.max(this._height(newRoot.left), this._height(newRoot.right)) + 1;

  return newRoot;
}

_insertNode(node, data) {
  if (node === null) return new Node(data);

  if (data < node.data) {
    node.left = this._insertNode(node.left, data);
  } else if (data > node.data) {
    node.right = this._insertNode(node.right, data);
  } else {
    // Duplicate keys are not allowed in AVL Tree
    return node;
  }

  node.height = Math.max(this._height(node.left), this._height(node.right)) + 1;

  const balance = this._getBalance(node);

  // Left Left Case
  if (balance > 1 && data < node.left.data) {
    return this._rotateRight(node);
  }

  // Left Right Case
  if (balance > 1 && data > node.left.data) {
    node.left = this._rotateLeft(node.left);
    return this._rotateRight(node);
  }

  // Right Right Case
  if (balance < -1 && data > node.right.data) {
    return this._rotateLeft(node);
  }

  // Right Left Case
  if (balance < -1 && data < node.right.data) {
    node.right = this._rotateRight(node.right);
    return this._rotateLeft(node);
  }

  return node;
}
search(data) {
  return this._searchNode(this.root, data);
}

_searchNode(node, data) {
  if (node === null) return false;

  if (data < node.data) {
    return this._searchNode(node.left, data);
  } else if (data > node.data) {
    return this._searchNode(node.right, data);
  } else {
    return true;
  }
}
delete(data) {
  this.root = this._deleteNode(this.root, data);
}

_findMinNode(node) {
  if (node.left === null) return node;
  return this._findMinNode(node.left);
}

_deleteNode(node, data) {
  if (node === null) return null;

  if (data < node.data) {
    node.left = this._deleteNode(node.left, data);
  } else if (data > node.data) {
    node.right = this._deleteNode(node.right, data);
  } else {
    if (node.left === null && node.right === null) {
      node = null;
    } else if (node.left === null) {
      node = node.right;
    } else if (node.right === null) {
      node = node.left;
    } else {
      const temp = this._findMinNode(node.right);
      node.data = temp.data;
      node.right = this._deleteNode(node.right, temp.data);
    }
  }

  if (node === null) return node;

  node.height = Math.max(this._height(node.left), this._height(node.right)) + 1;
  const balance = this._getBalance(node);

  // Left Left Case
  if (balance > 1 && this._getBalance(node.left) >= 0) {
    return this._rotateRight(node);
  }

  // Left Right Case
  if (balance > 1 && this._getBalance(node.left) < 0) {
    node.left = this._rotateLeft(node.left);
    return this._rotateRight(node);
  }

  // Right Right Case
  if (balance < -1 && this._getBalance(node.right) <= 0) {
    return this._rotateLeft(node);
  }

  // Right Left Case
  if (balance < -1 && this._getBalance(node.right) > 0) {
    node.right = this._rotateRight(node.right);
    return this._rotateLeft(node);
  }

  return node;
}
const avlTree = new AVLTree();

avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);
avlTree.insert(40);
avlTree.insert(50);

console.log(avlTree.search(30)); // Output: true

avlTree.delete(30);

console.log(avlTree.search(30)); // Output: false
