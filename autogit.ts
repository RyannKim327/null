class Node<T> {
  key: T;
  value: T;
  left: Node<T> | null;
  right: Node<T> | null;
  color: 'red' | 'black';

  constructor(key: T, value: T, color: 'red' | 'black' = 'red') {
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

  private isRed(node: Node<T> | null): boolean {
    if (node === null) return false;
    return node.color === 'red';
  }

  private makeBlack(node: Node<T> | null): void {
    if (node !== null) node.color = 'black';
  }

  private makeRed(node: Node<T> | null): void {
    if (node !== null) node.color = 'red';
  }

  private leftRotate(x: Node<T>): Node<T> {
    const y = x.right;
    x.right = y.left;
    y.left = x;
    y.color = x.color;
    x.color = 'red';
    return y;
  }

  private rightRotate(x: Node<T>): Node<T> {
    const y = x.left;
    x.left = y.right;
    y.right = x;
    y.color = x.color;
    x.color = 'red';
    return y;
  }

  private fixInsert(node: Node<T>): void {
    while (this.isRed(node.parent)) {
      if (node.parent === node.parent.parent.left) {
        const y = node.parent.parent.right;
        if (this.isRed(y)) {
          this.makeBlack(node.parent);
          this.makeBlack(y);
          this.makeRed(node.parent.parent);
          node = node.parent.parent;
        } else {
          if (node === node.parent.right) {
            node = node.parent;
            node = this.leftRotate(node);
          }
          this.makeBlack(node.parent);
          this.makeRed(node.parent.parent);
          node = this.rightRotate(node.parent.parent);
        }
      } else {
        const y = node.parent.parent.left;
        if (this.isRed(y)) {
          this.makeBlack(node.parent);
          this.makeBlack(y);
          this.makeRed(node.parent.parent);
          node = node.parent.parent;
        } else {
          if (node === node.parent.left) {
            node = node.parent;
            node = this.rightRotate(node);
          }
          this.makeBlack(node.parent);
          this.makeRed(node.parent.parent);
          node = this.leftRotate(node.parent.parent);
        }
      }
    }
    this.makeBlack(this.root);
  }

  insert(key: T, value: T): void {
    this.root = this.insertNode(this.root, key, value);
    this.makeBlack(this.root);
  }

  private insertNode(node: Node<T> | null, key: T, value: T): Node<T> {
    if (node === null) return new Node(key, value);

    if (key < node.key) {
      node.left = this.insertNode(node.left, key, value);
    } else if (key > node.key) {
      node.right = this.insertNode(node.right, key, value);
    } else {
      node.value = value;
    }

    if (this.isRed(node.right) && !this.isRed(node.left)) node = this.leftRotate(node);
    if (this.isRed(node.left) && this.isRed(node.left.left)) node = this.rightRotate(node);
    if (this.isRed(node.left) && this.isRed(node.right)) {
      this.makeRed(node);
      this.makeBlack(node.left);
      this.makeBlack(node.right);
    }

    return node;
  }

  search(key: T): T | null {
    return this.searchNode(this.root, key);
  }

  private searchNode(node: Node<T> | null, key: T): T | null {
    if (node === null) return null;

    if (key < node.key) return this.searchNode(node.left, key);
    else if (key > node.key) return this.searchNode(node.right, key);
    else return node.value;
  }
}

// Example usage:
const tree = new RedBlackTree<number>();
tree.insert(5, 5);
tree.insert(2, 2);
tree.insert(8, 8);
tree.insert(3, 3);
tree.insert(9, 9);

console
