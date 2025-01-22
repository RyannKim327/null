class Node<T> {
  key: T;
  value: any;
  left: Node<T> | null;
  right: Node<T> | null;
  color: 'red' | 'black';

  constructor(key: T, value: any, color: 'red' | 'black' = 'black') {
    this.key = key;
    this.value = value;
    this.left = null;
    this.right = null;
    this.color = color;
  }
}

class RedBlackTree<T> {
  private root: Node<T> | null;

  constructor() {
    this.root = null;
  }

  private leftRotate(node: Node<T>) {
    const pivot = node.right;
    node.right = pivot.left;
    pivot.left = node;
    node.color = 'red';
    pivot.color = 'black';
    return pivot;
  }

  private rightRotate(node: Node<T>) {
    const pivot = node.left;
    node.left = pivot.right;
    pivot.right = node;
    node.color = 'red';
    pivot.color = 'black';
    return pivot;
  }

  private rebalance(node: Node<T>) {
    if (node === null) return null;

    if (node.color === 'red' && node.left !== null && node.left.color === 'red') {
      // Left-left case
      node = this.rightRotate(node);
    }

    if (node.color === 'red' && node.right !== null && node.right.color === 'red') {
      // Right-right case
      node = this.leftRotate(node);
    }

    if (node.color === 'red' && node.left !== null && node.left.color === 'red' && node.right !== null && node.right.color === 'red') {
      // Both children are red
      node.color = 'black';
      node.left.color = 'black';
      node.right.color = 'black';
    }

    return node;
  }

  insert(key: T, value: any) {
    this.root = this._insert(this.root, key, value);
  }

  private _insert(node: Node<T> | null, key: T, value: any): Node<T> {
    if (node === null) {
      return new Node(key, value, 'red');
    }

    if (key < node.key) {
      node.left = this._insert(node.left, key, value);
    } else if (key > node.key) {
      node.right = this._insert(node.right, key, value);
    } else {
      node.value = value;
    }

    return this.rebalance(node);
  }

  search(key: T): any | null {
    return this._search(this.root, key);
  }

  private _search(node: Node<T> | null, key: T): any | null {
    if (node === null) return null;

    if (key < node.key) {
      return this._search(node.left, key);
    } else if (key > node.key) {
      return this._search(node.right, key);
    } else {
      return node.value;
    }
  }

  delete(key: T) {
    this.root = this._delete(this.root, key);
  }

  private _delete(node: Node<T> | null, key: T): Node<T> | null {
    if (node === null) return null;

    if (key < node.key) {
      node.left = this._delete(node.left, key);
    } else if (key > node.key) {
      node.right = this._delete(node.right, key);
    } else {
      if (node.left === null && node.right === null) {
        // Node has no children
        return null;
      } else if (node.left === null) {
        // Node has only right child
        return node.right;
      } else if (node.right === null) {
        // Node has only left child
        return node.left;
      } else {
        // Node has both children
        const replacement = this._findMin(node.right);
        node.key = replacement.key;
        node.value = replacement.value;
        node.right = this._delete(node.right, replacement.key);
      }
    }

    return this.rebalance(node);
  }

  private _findMin(node: Node<T>): Node<T> {
    while (
