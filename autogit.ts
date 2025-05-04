class AVLNode<T> {
  value: T;
  left: AVLNode<T> | null = null;
  right: AVLNode<T> | null = null;
  height: number = 1;

  constructor(value: T) {
    this.value = value;
  }
}

class AVLTree<T> {
  root: AVLNode<T> | null = null;

  // Utility to get height of a node
  private height(node: AVLNode<T> | null): number {
    return node ? node.height : 0;
  }

  // Calculate balance factor of node
  private getBalance(node: AVLNode<T>): number {
    return this.height(node.left) - this.height(node.right);
  }

  // Right rotate subtree rooted with y
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

  // Left rotate subtree rooted with x
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

  // Insert a value in the AVL tree
  insert(value: T): void {
    this.root = this._insert(this.root, value);
  }

  private _insert(node: AVLNode<T> | null, value: T): AVLNode<T> {
    if (!node) return new AVLNode(value);

    // Assuming T supports comparison with <
    if (value < node.value) {
      node.left = this._insert(node.left, value);
    } else if (value > node.value) {
      node.right = this._insert(node.right, value);
    } else {
      // Duplicate values not allowed, return node
      return node;
    }

    // Update height of this ancestor node
    node.height = 1 + Math.max(this.height(node.left), this.height(node.right));

    // Get balance factor to check if node became unbalanced
    const balance = this.getBalance(node);

    // Left Left Case
    if (balance > 1 && value < node.left!.value) {
      return this.rightRotate(node);
    }

    // Right Right Case
    if (balance < -1 && value > node.right!.value) {
      return this.leftRotate(node);
    }

    // Left Right Case
    if (balance > 1 && value > node.left!.value) {
      node.left = this.leftRotate(node.left!);
      return this.rightRotate(node);
    }

    // Right Left Case
    if (balance < -1 && value < node.right!.value) {
      node.right = this.rightRotate(node.right!);
      return this.leftRotate(node);
    }

    return node;
  }

  // In-order traversal (for testing)
  inorderTraversal(): T[] {
    const result: T[] = [];
    this._inorder(this.root, result);
    return result;
  }

  private _inorder(node: AVLNode<T> | null, result: T[]): void {
    if (node) {
      this._inorder(node.left, result);
      result.push(node.value);
      this._inorder(node.right, result);
    }
  }
}

// Usage example:
const avl = new AVLTree<number>();
avl.insert(10);
avl.insert(20);
avl.insert(30);
avl.insert(40);
avl.insert(50);
avl.insert(25);

console.log(avl.inorderTraversal()); // Output should be sorted array: [10, 20, 25, 30, 40, 50]
