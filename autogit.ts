class Node<T> {
  key: T;
  value: T;
  left: Node<T> | null;
  right: Node<T> | null;
  height: number;

  constructor(key: T, value: T) {
    this.key = key;
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}

class AVLTree<T> {
  root: Node<T> | null;

  constructor() {
    this.root = null;
  }

  insert(key: T, value: T): void {
    this.root = this.insertNode(this.root, key, value);
  }

  private insertNode(node: Node<T> | null, key: T, value: T): Node<T> {
    if (node === null) {
      return new Node(key, value);
    }

    if (key < node.key) {
      node.left = this.insertNode(node.left, key, value);
    } else if (key > node.key) {
      node.right = this.insertNode(node.right, key, value);
    } else {
      // key already exists, update value
      node.value = value;
    }

    node.height = this.getHeight(node.left) + this.getHeight(node.right) + 1;

    const balanceFactor = this.getBalanceFactor(node);

    if (balanceFactor > 1) {
      if (key < node.left!.key) {
        return this.rightRotate(node);
      } else {
        node.left = this.leftRotate(node.left!);
        return this.rightRotate(node);
      }
    }

    if (balanceFactor < -1) {
      if (key > node.right!.key) {
        return this.leftRotate(node);
      } else {
        node.right = this.rightRotate(node.right!);
        return this.leftRotate(node);
      }
    }

    return node;
  }

  private leftRotate(node: Node<T>): Node<T> {
    const temp = node.right!;
    node.right = temp.left;
    temp.left = node;
    node.height = this.getHeight(node.left) + this.getHeight(node.right) + 1;
    temp.height = this.getHeight(temp.left) + this.getHeight(temp.right) + 1;
    return temp;
  }

  private rightRotate(node: Node<T>): Node<T> {
    const temp = node.left!;
    node.left = temp.right;
    temp.right = node;
    node.height = this.getHeight(node.left) + this.getHeight(node.right) + 1;
    temp.height = this.getHeight(temp.left) + this.getHeight(temp.right) + 1;
    return temp;
  }

  private getHeight(node: Node<T> | null): number {
    return node === null ? 0 : node.height;
  }

  private getBalanceFactor(node: Node<T>): number {
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  search(key: T): T | null {
    return this.searchNode(this.root, key);
  }

  private searchNode(node: Node<T> | null, key: T): T | null {
    if (node === null) {
      return null;
    }

    if (key < node.key) {
      return this.searchNode(node.left, key);
    } else if (key > node.key) {
      return this.searchNode(node.right, key);
    } else {
      return node.value;
    }
  }
}

// Example usage:
const avlTree = new AVLTree<number>();
avlTree.insert(5, 5);
avlTree.insert(2, 2);
avlTree.insert(8, 8);
avlTree.insert(3, 3);
avlTree.insert(9, 9);

console.log(avlTree.search(2)); // 2
console.log(avlTree.search(6)); // null
