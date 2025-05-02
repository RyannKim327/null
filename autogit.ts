class AVLNode<T> {
  value: T;
  height: number;
  left: AVLNode<T> | null;
  right: AVLNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.height = 1; // height of leaf node = 1
    this.left = null;
    this.right = null;
  }
}

export class AVLTree<T> {
  root: AVLNode<T> | null = null;

  // Utility: get height of a node
  private height(node: AVLNode<T> | null): number {
    return node ? node.height : 0;
  }

  // Utility: get balance factor (left height - right height)
  private getBalance(node: AVLNode<T> | null): number {
    if (!node) return 0;
    return this.height(node.left) - this.height(node.right);
  }

  // Right rotation
  private rotateRight(y: AVLNode<T>): AVLNode<T> {
    const x = y.left!;
    const T2 = x.right;

    // Perform rotation
    x.right = y;
    y.left = T2;

    // Update heights
    y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;
    x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;

    return x; // new root
  }

  // Left rotation
  private rotateLeft(x: AVLNode<T>): AVLNode<T> {
    const y = x.right!;
    const T2 = y.left;

    // Perform rotation
    y.left = x;
    x.right = T2;

    // Update heights
    x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;
    y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;

    return y; // new root
  }

  // Insert a value and keep the tree balanced
  insert(value: T): void {
    this.root = this._insert(this.root, value);
  }

  private _insert(node: AVLNode<T> | null, value: T): AVLNode<T> {
    // 1. Perform normal BST insert
    if (!node) return new AVLNode(value);

    if (value < node.value) {
      node.left = this._insert(node.left, value);
    } else if (value > node.value) {
      node.right = this._insert(node.right, value);
    } else {
      // duplicate values not allowed
      return node;
    }

    // 2. Update height of this ancestor node
    node.height = 1 + Math.max(this.height(node.left), this.height(node.right));

    // 3. Get balance factor to check whether this node became unbalanced
    const balance = this.getBalance(node);

    // 4. If unbalanced, there are 4 cases:

    // Left Left Case
    if (balance > 1 && value < node.left!.value) {
      return this.rotateRight(node);
    }

    // Right Right Case
    if (balance < -1 && value > node.right!.value) {
      return this.rotateLeft(node);
    }

    // Left Right Case
    if (balance > 1 && value > node.left!.value) {
      node.left = this.rotateLeft(node.left!);
      return this.rotateRight(node);
    }

    // Right Left Case
    if (balance < -1 && value < node.right!.value) {
      node.right = this.rotateRight(node.right!);
      return this.rotateLeft(node);
    }

    // Return unchanged node pointer
    return node;
  }

  // Optional: implement more methods like search, delete, traversal etc.
}
const tree = new AVLTree<number>();
tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(40);
tree.insert(50);
tree.insert(25);

// The AVL tree will rebalance itself after each insertion.
