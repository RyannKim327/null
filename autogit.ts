class AVLNode<T> {
  key: T;
  height: number;
  left: AVLNode<T> | null = null;
  right: AVLNode<T> | null = null;

  constructor(key: T) {
    this.key = key;
    this.height = 1; // New node is initially added at leaf
  }
}

class AVLTree<T> {
  root: AVLNode<T> | null = null;

  // Utility: Get height of node
  private getHeight(node: AVLNode<T> | null): number {
    return node ? node.height : 0;
  }

  // Utility: Calculate balance factor
  private getBalance(node: AVLNode<T> | null): number {
    if (!node) return 0;
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  // Rotate right
  private rotateRight(y: AVLNode<T>): AVLNode<T> {
    const x = y.left!;
    const T2 = x.right;

    // Rotation
    x.right = y;
    y.left = T2;

    // Update heights
    y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
    x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;

    return x;
  }

  // Rotate left
  private rotateLeft(x: AVLNode<T>): AVLNode<T> {
    const y = x.right!;
    const T2 = y.left;

    // Rotation
    y.left = x;
    x.right = T2;

    // Update heights
    x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
    y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;

    return y;
  }

  // Insert a key
  insert(key: T): void {
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
      // Duplicate keys are NOT allowed; ignore or handle accordingly
      return node;
    }

    // Update height
    node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;

    // Check balance factor
    const balance = this.getBalance(node);

    // Left Left Case
    if (balance > 1 && key < node.left!.key) {
      return this.rotateRight(node);
    }

    // Right Right Case
    if (balance < -1 && key > node.right!.key) {
      return this.rotateLeft(node);
    }

    // Left Right Case
    if (balance > 1 && key > node.left!.key) {
      node.left = this.rotateLeft(node.left!);
      return this.rotateRight(node);
    }

    // Right Left Case
    if (balance < -1 && key < node.right!.key) {
      node.right = this.rotateRight(node.right!);
      return this.rotateLeft(node);
    }

    return node;
  }

  // Utility: In-order traversal (for testing)
  inOrder(node: AVLNode<T> | null = this.root, result: T[] = []): T[] {
    if (node) {
      this.inOrder(node.left, result);
      result.push(node.key);
      this.inOrder(node.right, result);
    }
    return result;
  }

  // ... (Implement delete if needed, following similar logic with balancing)
}
