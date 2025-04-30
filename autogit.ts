class AVLNode<T> {
  value: T;
  height: number;
  left: AVLNode<T> | null;
  right: AVLNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.height = 1; // New nodes start at height 1
    this.left = null;
    this.right = null;
  }
}

class AVLTree<T> {
  root: AVLNode<T> | null = null;

  private height(node: AVLNode<T> | null): number {
    return node ? node.height : 0;
  }

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

  insert(value: T) {
    this.root = this._insert(this.root, value);
  }

  private _insert(node: AVLNode<T> | null, value: T): AVLNode<T> {
    if (node === null) {
      return new AVLNode(value);
    }

    if (value < node.value) {
      node.left = this._insert(node.left, value);
    } else if (value > node.value) {
      node.right = this._insert(node.right, value);
    } else {
      // Duplicate keys not allowed
      return node;
    }

    // Update height of this ancestor node
    node.height = 1 + Math.max(this.height(node.left), this.height(node.right));

    // Get the balance factor to check whether this node became unbalanced
    const balance = this.getBalance(node);

    // If unbalanced, 4 cases:

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

    // Node is balanced
    return node;
  }

  // Utility to do inorder traversal and collect node values
  inorder(): T[] {
    const res: T[] = [];
    this._inorder(this.root, res);
    return res;
  }

  private _inorder(node: AVLNode<T> | null, res: T[]) {
    if (!node) return;
    this._inorder(node.left, res);
    res.push(node.value);
    this._inorder(node.right, res);
  }
}

// Example usage:
const avl = new AVLTree<number>();
avl.insert(10);
avl.insert(20);
avl.insert(30);
avl.insert(40);
avl.insert(50);
avl.insert(25);

console.log(avl.inorder());  // Output will be a sorted array: [10, 20, 25, 30, 40, 50]
