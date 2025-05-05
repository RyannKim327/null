class AVLNode<T> {
  value: T;
  height: number;
  left: AVLNode<T> | null = null;
  right: AVLNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
    this.height = 1; // New node initially added at leaf
  }
}
class AVLTree<T> {
  private root: AVLNode<T> | null = null;

  // Utility to get height of node
  private height(node: AVLNode<T> | null): number {
    return node ? node.height : 0;
  }

  // Balance factor of node
  private getBalance(node: AVLNode<T> | null): number {
    if (!node) return 0;
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

    return y;
  }

  // Insert a value
  public insert(value: T): void {
    this.root = this._insert(this.root, value);
  }

  private _insert(node: AVLNode<T> | null, value: T): AVLNode<T> {
    if (!node) return new AVLNode(value);

    if (value < node.value) {
      node.left = this._insert(node.left, value);
    } else if (value > node.value) {
      node.right = this._insert(node.right, value);
    } else {
      // Duplicate values not allowed
      return node;
    }

    // Update height
    node.height = 1 + Math.max(this.height(node.left), this.height(node.right));

    // Get balance factor
    const balance = this.getBalance(node);

    // Balancing the node
    // Left Left Case
    if (balance > 1 && value < (node.left?.value ?? value)) {
      return this.rightRotate(node);
    }
    // Right Right Case
    if (balance < -1 && value > (node.right?.value ?? value)) {
      return this.leftRotate(node);
    }
    // Left Right Case
    if (balance > 1 && value > (node.left?.value ?? value)) {
      node.left = this.leftRotate(node.left!);
      return this.rightRotate(node);
    }
    // Right Left Case
    if (balance < -1 && value < (node.right?.value ?? value)) {
      node.right = this.rightRotate(node.right!);
      return this.leftRotate(node);
    }

    return node;
  }

  // Optional: In-order traversal to print tree nodes
  public inOrder(): T[] {
    const result: T[] = [];
    this._inOrder(this.root, result);
    return result;
  }

  private _inOrder(node: AVLNode<T> | null, result: T[]) {
    if (!node) return;
    this._inOrder(node.left, result);
    result.push(node.value);
    this._inOrder(node.right, result);
  }
}
const tree = new AVLTree<number>();

tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(40);
tree.insert(50);
tree.insert(25);

console.log(tree.inOrder()); // Should print sorted values: [10, 20, 25, 30, 40, 50]
