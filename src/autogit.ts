class TreeNode<T> {
  data: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree<T> {
  root: TreeNode<T> | null;

  constructor() {
    this.root = null;
  }

  // Insert a new value into the BST
  insert(value: T): void {
    const newNode = new TreeNode(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let currentNode = this.root;
    while (true) {
      if (value < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          break;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          break;
        }
        currentNode = currentNode.right;
      }
    }
  }

  // Search for a value in the BST
  search(value: T): boolean {
    let currentNode = this.root;

    while (currentNode) {
      if (value === currentNode.data) {
        return true;
      } else if (value < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return false;
  }

  // In-order traversal (left, root, right)
  inOrderTraversal(node: TreeNode<T> | null, result: T[] = []): T[] {
    if (node) {
      this.inOrderTraversal(node.left, result);
      result.push(node.data);
      this.inOrderTraversal(node.right, result);
    }
    return result;
  }

  // Pre-order traversal (root, left, right)
  preOrderTraversal(node: TreeNode<T> | null, result: T[] = []): T[] {
    if (node) {
      result.push(node.data);
      this.preOrderTraversal(node.left, result);
      this.preOrderTraversal(node.right, result);
    }
    return result;
  }

  // Post-order traversal (left, right, root)
  postOrderTraversal(node: TreeNode<T> | null, result: T[] = []): T[] {
    if (node) {
      this.postOrderTraversal(node.left, result);
      this.postOrderTraversal(node.right, result);
      result.push(node.data);
    }
    return result;
  }

  // Find the minimum value in the BST
  findMin(): T | null {
    if (!this.root) return null;

    let currentNode = this.root;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }

    return currentNode.data;
  }

  // Find the maximum value in the BST
  findMax(): T | null {
    if (!this.root) return null;

    let currentNode = this.root;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }

    return currentNode.data;
  }
}
const bst = new BinarySearchTree<number>();

// Insert values
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

// Search for a value
console.log(bst.search(7)); // Output: true
console.log(bst.search(12)); // Output: false

// In-order traversal
console.log(bst.inOrderTraversal(bst.root)); // Output: [3, 5, 7, 10, 15]

// Pre-order traversal
console.log(bst.preOrderTraversal(bst.root)); // Output: [10, 5, 3, 7, 15]

// Post-order traversal
console.log(bst.postOrderTraversal(bst.root)); // Output: [3, 7, 5, 15, 10]

// Find minimum and maximum values
console.log(bst.findMin()); // Output: 3
console.log(bst.findMax()); // Output: 15
