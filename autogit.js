class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}
class AVLTree {
  constructor() {
    this.root = null;
  }
}
getHeight(node) {
  if (node === null) {
    return 0;
  }
  return node.height;
}
updateHeight(node) {
  node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
}
getBalanceFactor(node) {
  return this.getHeight(node.left) - this.getHeight(node.right);
}
leftRotate(node) {
  const newRoot = node.right;
  node.right = newRoot.left;
  newRoot.left = node;

  this.updateHeight(node);
  this.updateHeight(newRoot);

  return newRoot;
}

rightRotate(node) {
  const newRoot = node.left;
  node.left = newRoot.right;
  newRoot.right = node;

  this.updateHeight(node);
  this.updateHeight(newRoot);

  return newRoot;
}

leftRightRotate(node) {
  node.left = this.leftRotate(node.left);
  return this.rightRotate(node);
}

rightLeftRotate(node) {
  node.right = this.rightRotate(node.right);
  return this.leftRotate(node);
}
insert(value) {
  this.root = this.insertNode(this.root, value);
}

insertNode(node, value) {
  if (node === null) {
    return new Node(value);
  }

  if (value < node.value) {
    node.left = this.insertNode(node.left, value);
  } else {
    node.right = this.insertNode(node.right, value);
  }

  this.updateHeight(node);
  const balanceFactor = this.getBalanceFactor(node);

  if (balanceFactor > 1) {
    if (value < node.left.value) {
      return this.rightRotate(node);
    } else {
      return this.leftRightRotate(node);
    }
  }

  if (balanceFactor < -1) {
    if (value > node.right.value) {
      return this.leftRotate(node);
    } else {
      return this.rightLeftRotate(node);
    }
  }

  return node;
}
delete(value) {
  this.root = this.deleteNode(this.root, value);
}

deleteNode(node, value) {
  if (node === null) {
    return null;
  }

  if (value < node.value) {
    node.left = this.deleteNode(node.left, value);
  } else if (value > node.value) {
    node.right = this.deleteNode(node.right, value);
  } else {
    if (node.left === null || node.right === null) {
      return node.left || node.right;
    } else {
      const minValue = this.findMinValue(node.right);
      node.value = minValue;
      node.right = this.deleteNode(node.right, minValue);
    }
  }

  this.updateHeight(node);
  const balanceFactor = this.getBalanceFactor(node);

  if (balanceFactor > 1) {
    if (this.getBalanceFactor(node.left) >= 0) {
      return this.rightRotate(node);
    } else {
      return this.leftRightRotate(node);
    }
  }

  if (balanceFactor < -1) {
    if (this.getBalanceFactor(node.right) <= 0) {
      return this.leftRotate(node);
    } else {
      return this.rightLeftRotate(node);
    }
  }

  return node;
}

findMinValue(node) {
  let current = node;
  while (current.left !== null) {
    current = current.left;
  }
  return current.value;
}
