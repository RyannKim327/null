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

  // Right rotation
  private rightRotate(y: AVLNode<T>): AVLNode<T> {
    const x = y.left!;
    const T2 = x.right;

    // Rotation
    x.right = y;
    y.left = T2;

    // Update heights
    y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;
    x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;

    return x; // new root
  }

  // Left rotation
  private leftRotate(x: AVLNode<T>): AVLNode<T> {
    const y = x.right!;
    const T2 = y.left;

    // Rotation
    y.left = x;
    x.right = T2;

    // Update heights
    x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;
    y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;

    return y; // new root
  }

  // Insert function
  insert(value: T): void {
    this.root = this._insert(this.root, value);
  }

  private _insert(node: AVLNode<T> | null, value: T): AVLNode<T> {
    // Normal BST insert
    if (!node) return new AVLNode(value);

    if (value < node.value) {
      node.left = this._insert(node.left, value);
    } else if (value > node.value) {
      node.right = this._insert(node.right, value);
    } else {
      // No duplicates
      return node;
    }

    // Update height
    node.height = 1 + Math.max(this.height(node.left), this.height(node.right));

    // Get balance factor to check for unbalance
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

  // Method for in-order traversal (for testing/verification)
  inorder(): T[] {
    const result: T[] = [];
    this._inorder(this.root, result);
    return result;
  }

  private _inorder(node: AVLNode<T> | null, output: T[]) {
    if (node) {
      this._inorder(node.left, output);
      output.push(node.value);
      this._inorder(node.right, output);
    }
  }
}
const tree = new AVLTree<number>();
tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(40);
tree.insert(50);
tree.insert(25);

console.log(tree.inorder()); // Should print a sorted array
