class AVLNode<T> {
  key: T;
  height: number;
  left: AVLNode<T> | null;
  right: AVLNode<T> | null;

  constructor(key: T) {
    this.key = key;
    this.height = 1; // new nodes are initially added as leaf
    this.left = null;
    this.right = null;
  }
}
function getHeight<T>(node: AVLNode<T> | null): number {
  return node ? node.height : 0;
}
function updateHeight<T>(node: AVLNode<T>) {
  node.height = Math.max(getHeight(node.left), getHeight(node.right)) + 1;
}
function getBalance<T>(node: AVLNode<T> | null): number {
  if (!node) return 0;
  return getHeight(node.left) - getHeight(node.right);
}
function rotateLeft<T>(z: AVLNode<T>): AVLNode<T> {
  const y = z.right!;
  z.right = y.left;
  y.left = z;
  updateHeight(z);
  updateHeight(y);
  return y;
}
function rotateRight<T>(z: AVLNode<T>): AVLNode<T> {
  const y = z.left!;
  z.left = y.right;
  y.right = z;
  updateHeight(z);
  updateHeight(y);
  return y;
}
function insert<T>(root: AVLNode<T> | null, key: T): AVLNode<T> {
  if (!root) {
    return new AVLNode(key);
  }

  // Compare the new key with current node
  if (key < root.key) {
    root.left = insert(root.left, key);
  } else if (key > root.key) {
    root.right = insert(root.right, key);
  } else {
    // duplicates not allowed; ignore or handle as needed
    return root;
  }

  // Update height
  updateHeight(root);

  // Balance the node
  const balance = getBalance(root);

  // Left Left Case
  if (balance > 1 && key < root.left!.key) {
    return rotateRight(root);
  }

  // Right Right Case
  if (balance < -1 && key > root.right!.key) {
    return rotateLeft(root);
  }

  // Left Right Case
  if (balance > 1 && key > root.left!.key) {
    root.left = rotateLeft(root.left!);
    return rotateRight(root);
  }

  // Right Left Case
  if (balance < -1 && key < root.right!.key) {
    root.right = rotateRight(root.right!);
    return rotateLeft(root);
  }

  return root; // no imbalance
}
