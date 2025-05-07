class AVLNode<T> {
  public height: number;
  public left: AVLNode<T> | null = null;
  public right: AVLNode<T> | null = null;

  constructor(public key: T) {
    this.height = 1;
  }
}

class AVLTree<T> {
  private root: AVLNode<T> | null = null;

  // Utility: get height of a node
  private height(node: AVLNode<T> | null): number {
    return node ? node.height : 0;
  }

  // Utility: get balance factor of a node
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

  public insert(key: T) {
    this.root = this._insert(this.root, key);
  }

  private _insert(node: AVLNode<T> | null, key: T): AVLNode<T> {
    if (!node) {
      return new AVLNode(key);
    }

    if (key < node.key) {
      node.left = this._insert(node.left, key);
    } else if (key > node.key) {
      node.right = this._insert(node.right, key);
    } else {
      // Duplicate keys not allowed
      return node;
    }

    // Update height of this node
    node.height = 1 + Math.max(this.height(node.left), this.height(node.right));

    // Get the balance factor
    const balance = this.getBalance(node);

    // Left Left Case
    if (balance > 1 && key < node.left!.key) {
      return this.rightRotate(node);
    }

    // Right Right Case
    if (balance < -1 && key > node.right!.key) {
      return this.leftRotate(node);
    }

    // Left Right Case
    if (balance > 1 && key > node.left!.key) {
      node.left = this.leftRotate(node.left!);
      return this.rightRotate(node);
    }

    // Right Left Case
    if (balance < -1 && key < node.right!.key) {
      node.right = this.rightRotate(node.right!);
      return this.leftRotate(node);
    }

    return node;
  }

  // Optional: in-order traversal to check tree contents
  public inOrder(): T[] {
    const result: T[] = [];
    this._inOrder(this.root, result);
    return result;
  }

  private _inOrder(node: AVLNode<T> | null, arr: T[]) {
    if (!node) return;
    this._inOrder(node.left, arr);
    arr.push(node.key);
    this._inOrder(node.right, arr);
  }
}

// Example usage:
const tree = new AVLTree<number>();
tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(40);
tree.insert(50);
tree.insert(25);

console.log(tree.inOrder()); // Should print the sorted keys
