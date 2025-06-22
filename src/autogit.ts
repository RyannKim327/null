// Define the Node class
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

// Define the Binary Search Tree class
class BinarySearchTree<T> {
  root: TreeNode<T> | null;

  constructor() {
    this.root = null;
  }

  // Insert a value into the BST
  insert(value: T): void {
    const newNode = new TreeNode(value);

    if (!this.root) {
      this.root = newNode; // If the tree is empty, set the new node as the root
      return;
    }

    let current = this.root;
    while (true) {
      if (value < current.data) {
        if (!current.left) {
          current.left = newNode; // Insert as the left child
          return;
        }
        current = current.left; // Move to the left child
      } else {
        if (!current.right) {
          current.right = newNode; // Insert as the right child
          return;
        }
        current = current.right; // Move to the right child
      }
    }
  }

  // Search for a value in the BST
  search(value: T): boolean {
    let current = this.root;

    while (current) {
      if (value === current.data) {
        return true; // Value found
      } else if (value < current.data) {
        current = current.left; // Move to the left child
      } else {
        current = current.right; // Move to the right child
      }
    }

    return false; // Value not found
  }

  // In-order traversal (left -> root -> right)
  inOrderTraversal(node: TreeNode<T> | null, result: T[] = []): T[] {
    if (node) {
      this.inOrderTraversal(node.left, result); // Traverse left subtree
      result.push(node.data); // Visit the current node
      this.inOrderTraversal(node.right, result); // Traverse right subtree
    }
    return result;
  }

  // Pre-order traversal (root -> left -> right)
  preOrderTraversal(node: TreeNode<T> | null, result: T[] = []): T[] {
    if (node) {
      result.push(node.data); // Visit the current node
      this.preOrderTraversal(node.left, result); // Traverse left subtree
      this.preOrderTraversal(node.right, result); // Traverse right subtree
    }
    return result;
  }

  // Post-order traversal (left -> right -> root)
  postOrderTraversal(node: TreeNode<T> | null, result: T[] = []): T[] {
    if (node) {
      this.postOrderTraversal(node.left, result); // Traverse left subtree
      this.postOrderTraversal(node.right, result); // Traverse right subtree
      result.push(node.data); // Visit the current node
    }
    return result;
  }

  // Find the minimum value in the BST
  findMin(): T | null {
    if (!this.root) return null;

    let current = this.root;
    while (current.left) {
      current = current.left; // Keep moving to the left
    }
    return current.data;
  }

  // Find the maximum value in the BST
  findMax(): T | null {
    if (!this.root) return null;

    let current = this.root;
    while (current.right) {
      current = current.right; // Keep moving to the right
    }
    return current.data;
  }

  // Delete a value from the BST
  delete(value: T): void {
    this.root = this.deleteNode(this.root, value);
  }

  private deleteNode(node: TreeNode<T> | null, value: T): TreeNode<T> | null {
    if (!node) return null;

    if (value < node.data) {
      node.left = this.deleteNode(node.left, value); // Search in the left subtree
    } else if (value > node.data) {
      node.right = this.deleteNode(node.right, value); // Search in the right subtree
    } else {
      // Node to be deleted found
      if (!node.left && !node.right) {
        return null; // Case 1: No children
      } else if (!node.left) {
        return node.right; // Case 2: Only right child
      } else if (!node.right) {
        return node.left; // Case 3: Only left child
      } else {
        // Case 4: Two children
        const minValue = this.findMinInTree(node.right); // Find the minimum value in the right subtree
        node.data = minValue; // Replace the current node's value with the minimum value
        node.right = this.deleteNode(node.right, minValue); // Delete the minimum value from the right subtree
      }
    }

    return node;
  }

  private findMinInTree(node: TreeNode<T>): T {
    while (node.left) {
      node = node.left; // Keep moving to the left
    }
    return node.data;
  }
}
const bst = new BinarySearchTree<number>();

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

console.log(bst.search(7)); // Output: true
console.log(bst.search(12)); // Output: false

console.log("In-order:", bst.inOrderTraversal(bst.root)); // Output: [3, 5, 7, 10, 15]
console.log("Pre-order:", bst.preOrderTraversal(bst.root)); // Output: [10, 5, 3, 7, 15]
console.log("Post-order:", bst.postOrderTraversal(bst.root)); // Output: [3, 7, 5, 15, 10]

console.log("Min:", bst.findMin()); // Output: 3
console.log("Max:", bst.findMax()); // Output: 15

bst.delete(5);
console.log("In-order after deletion:", bst.inOrderTraversal(bst.root)); // Output: [3, 7, 10, 15]
