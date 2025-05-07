class AVLNode<T> {
  value: T;
  height: number;
  left: AVLNode<T> | null;
  right: AVLNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.height = 1; // height of node starts at 1 (node itself)
    this.left = null;
    this.right = null;
  }
}

class AVLTree<T> {
  private root: AVLNode<T> | null = null;

  // Utility to get height of node
  private height(node: AVLNode<T> | null): number {
    return node ? node.height : 0;
  }

  // Utility to get balance factor of node
  private getBalance(node: AVLNode<T> | null): number {
    if (!node) return 0;
    return this.height(node.left) - this.height(node.right);
  }

  private rightRotate(y: AVLNode<T>): AVLNode<T> {
    const x = y.left!;
    const T2 = x.right;

    // Perform rotation
    x.right = y;
    y.left = T2;

    // Update heights
    y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;
    x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;

    // Return new root
    return x;
  }

  private leftRotate(x: AVLNode<T>): AVLNode<T> {
    const y = x.right!;
    const T2 = y.left;

    // Perform rotation
    y.left = x;
    x.right = T2;

    // Update heights
    x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;
    y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;

    // Return new root
    return y;
  }

  private insertNode(node: AVLNode<T> | null, value: T, compare: (a: T, b: T) => number): AVLNode<T> {
    // Normal BST insert
    if (!node) return new AVLNode(value);

    if (compare(value, node.value) < 0) {
      node.left = this.insertNode(node.left, value, compare);
    } else if (compare(value, node.value) > 0) {
      node.right = this.insertNode(node.right, value, compare);
    } else {
      // Duplicate values not allowed in this implementation
      return node;
    }

    // Update height
    node.height = 1 + Math.max(this.height(node.left), this.height(node.right));

    // Get balance factor to check if node became unbalanced
    const balance = this.getBalance(node);

    // Left Left Case
    if (balance > 1 && compare(value, node.left!.value) < 0) {
      return this.rightRotate(node);
    }

    // Right Right Case
    if (balance < -1 && compare(value, node.right!.value) > 0) {
      return this.leftRotate(node);
    }

    // Left Right Case
    if (balance > 1 && compare(value, node.left!.value) > 0) {
      node.left = this.leftRotate(node.left!);
      return this.rightRotate(node);
    }

    // Right Left Case
    if (balance < -1 && compare(value, node.right!.value) < 0) {
      node.right = this.rightRotate(node.right!);
      return this.leftRotate(node);
    }

    return node;
  }

  insert(value: T, compare: (a: T, b: T) => number) {
    this.root = this.insertNode(this.root, value, compare);
  }

  // Inorder traversal (returns sorted array)
  inorder(): T[] {
    const result: T[] = [];
    function traverse(node: AVLNode<T> | null) {
      if (!node) return;
      traverse(node.left);
      result.push(node.value);
      traverse(node.right);
    }
    traverse(this.root);
    return result;
  }
}
// A simple comparator for numbers
const numCompare = (a: number, b: number) => a - b;

const avl = new AVLTree<number>();
avl.insert(10, numCompare);
avl.insert(20, numCompare);
avl.insert(30, numCompare);
avl.insert(40, numCompare);
avl.insert(50, numCompare);
avl.insert(25, numCompare);

console.log(avl.inorder()); // Sorted array: [10, 20, 25, 30, 40, 50]
