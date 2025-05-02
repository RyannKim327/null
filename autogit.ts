class AVLNode<T> {
  value: T;
  height: number;
  left: AVLNode<T> | null = null;
  right: AVLNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
    this.height = 1;
  }
}

class AVLTree<T> {
  root: AVLNode<T> | null = null;

  private height(node: AVLNode<T> | null): number {
    return node ? node.height : 0;
  }

  private updateHeight(node: AVLNode<T>): void {
    node.height = 1 + Math.max(this.height(node.left), this.height(node.right));
  }

  private getBalance(node: AVLNode<T>): number {
    return this.height(node.left) - this.height(node.right);
  }

  private rightRotate(y: AVLNode<T>): AVLNode<T> {
    const x = y.left!;
    const T2 = x.right;

    // rotation
    x.right = y;
    y.left = T2;

    // update heights
    this.updateHeight(y);
    this.updateHeight(x);

    return x;
  }

  private leftRotate(x: AVLNode<T>): AVLNode<T> {
    const y = x.right!;
    const T2 = y.left;

    // rotation
    y.left = x;
    x.right = T2;

    // update heights
    this.updateHeight(x);
    this.updateHeight(y);

    return y;
  }

  insert(value: T): void {
    this.root = this._insert(this.root, value);
  }

  private _insert(node: AVLNode<T> | null, value: T): AVLNode<T> {
    if (node === null) return new AVLNode(value);

    if (value < node.value) node.left = this._insert(node.left, value);
    else if (value > node.value) node.right = this._insert(node.right, value);
    else return node; // duplicates not allowed

    this.updateHeight(node);

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

  // Optional: for testing purposes, an in-order traversal:
  inorder(): T[] {
    const result: T[] = [];
    this._inorder(this.root, result);
    return result;
  }

  private _inorder(node: AVLNode<T> | null, result: T[]) {
    if (node !== null) {
      this._inorder(node.left, result);
      result.push(node.value);
      this._inorder(node.right, result);
    }
  }
}
const avl = new AVLTree<number>();
avl.insert(10);
avl.insert(20);
avl.insert(30);
avl.insert(40);
avl.insert(50);
avl.insert(25);

console.log(avl.inorder());  // Should print sorted values
