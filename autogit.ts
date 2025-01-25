interface Node<T> {
  key: T;
  value: T;
  left: Node<T> | null;
  right: Node<T> | null;
  parent: Node<T> | null;
  color: 'red' | 'black';
}
class RedBlackTree<T> {
  private root: Node<T> | null;

  constructor() {
    this.root = null;
  }

  // ...
}
private insertNode:key: T, value: T): Node<T> {
  const newNode = { key, value, left: null, right: null, parent: null, color: 'red' };
  if (!this.root) {
    this.root = newNode;
  } else {
    let currentNode = this.root;
    while (currentNode) {
      if (key < currentNode.key) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          newNode.parent = currentNode;
          break;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          newNode.parent = currentNode;
          break;
        }
        currentNode = currentNode.right;
      }
    }
  }
  this.balanceTree(newNode);
  return newNode;
}
private balanceTree(node: Node<T>): void {
  if (!node.parent) {
    node.color = 'black';
    return;
  }

  if (node.parent.color === 'black') {
    return;
  }

  const grandParent = node.parent.parent;

  if (!grandParent) {
    node.parent.color = 'black';
    return;
  }

  if (node.parent === grandParent.left) {
    const uncle = grandParent.right;
    if (uncle && uncle.color === 'red') {
      node.parent.color = 'black';
      uncle.color = 'black';
      grandParent.color = 'red';
      this.balanceTree(grandParent);
    } else {
      if (node === node.parent.right) {
        this.rotateLeft(node.parent);
        node = node.left;
      }
      node.parent.color = 'black';
      grandParent.color = 'red';
      this.rotateRight(grandParent);
    }
  } else {
    const uncle = grandParent.left;
    if (uncle && uncle.color === 'red') {
      node.parent.color = 'black';
      uncle.color = 'black';
      grandParent.color = 'red';
      this.balanceTree(grandParent);
    } else {
      if (node === node.parent.left) {
        this.rotateRight(node.parent);
        node = node.right;
      }
      node.parent.color = 'black';
      grandParent.color = 'red';
      this.rotateLeft(grandParent);
    }
  }
}
private rotateLeft(node: Node<T>): void {
  const pivot = node.right;
  node.right = pivot.left;
  if (pivot.left) {
    pivot.left.parent = node;
  }
  pivot.parent = node.parent;
  if (!node.parent) {
    this.root = pivot;
  } else if (node === node.parent.left) {
    node.parent.left = pivot;
  } else {
    node.parent.right = pivot;
  }
  pivot.left = node;
  node.parent = pivot;
}

private rotateRight
