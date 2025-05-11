class AVLNode<T> {
  value: T;
  height: number;
  left: AVLNode<T> | null = null;
  right: AVLNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
    this.height = 1; // height of a new node is 1
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

    // Rotation
    x.right = y;
    y.left = T2;

    // Update heights
    y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;
    x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;

    return x;
  }

  private leftRotate(x: AVLNode<T>): AVLNode<T> {
    const y = x.right!;
    const T2 = y.left;

    // Rotation
    y.left = x;
    x.right = T2;

    // Update heights
    x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;
    y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;

    return y;
  }

  insert(value: T): void {
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

    // Left Left Case
    if (balance > 1 && value < (node.left!.value)) {
      return this.rightRotate(node);
    }

    // Right Right Case
    if (balance < -1 && value > (node.right!.value)) {
      return this.leftRotate(node);
    }

    // Left Right Case
    if (balance > 1 && value > (node.left!.value)) {
      node.left = this.leftRotate(node.left!);
      return this.rightRotate(node);
    }

    // Right Left Case
    if (balance < -1 && value < (node.right!.value)) {
      node.right = this.rightRotate(node.right!);
      return this.leftRotate(node);
    }

    return node;
  }

  // Traversal example: In-order
  inorderTraversal(): T[] {
    const result: T[] = [];
    function inorder(node: AVLNode<T> | null) {
      if (!node) return;
      inorder(node.left);
      result.push(node.value);
      inorder(node.right);
    }
    inorder(this.root);
    return result;
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

console.log(avl.inorderTraversal()); // Should print the sorted values
