class Node<T> {
  value: T;
  left: Node<T> | null;
  right: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree<T> {
  root: Node<T> | null;

  constructor() {
    this.root = null;
  }

  insert(value: T): void {
    this.root = this._insert(this.root, value);
  }

  _insert(node: Node<T> | null, value: T): Node<T> {
    if (node === null) {
      return new Node(value);
    }

    if (value < node.value) {
      node.left = this._insert(node.left, value);
    } else if (value > node.value) {
      node.right = this._insert(node.right, value);
    }

    return node;
  }

  search(value: T): boolean {
    return this._search(this.root, value);
  }

  _search(node: Node<T> | null, value: T): boolean {
    if (node === null) {
      return false;
    }

    if (value === node.value) {
      return true;
    }

    if (value < node.value) {
      return this._search(node.left, value);
    } else {
      return this._search(node.right, value);
    }
  }

  inOrderTraversal(): T[] {
    const result: T[] = [];
    this._inOrderTraversal(this.root, result);
    return result;
  }

  _inOrderTraversal(node: Node<T> | null, result: T[]): void {
    if (node === null) {
      return;
    }

    this._inOrderTraversal(node.left, result);
    result.push(node.value);
    this._inOrderTraversal(node.right, result);
  }
}

// Example usage
const bst = new BinarySearchTree<number>();

bst.insert(5);
bst.insert(3);
bst.insert(7);
bst.insert(2);
bst.insert(4);
bst.insert(6);
bst.insert(8);

console.log(bst.inOrderTraversal()); // [2, 3, 4, 5, 6, 7, 8]

console.log(bst.search(4)); // true
console.log(bst.search(9)); // false
