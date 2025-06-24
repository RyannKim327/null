class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  root: TreeNode | null;

  constructor() {
    this.root = null;
  }

  // Insert a value into the BST
  insert(value: number): void {
    const newNode = new TreeNode(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let currentNode = this.root;
    while (true) {
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }

  // Search for a value in the BST
  search(value: number): boolean {
    let currentNode = this.root;

    while (currentNode) {
      if (value === currentNode.value) {
        return true;
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return false;
  }

  // In-order traversal (Left, Root, Right)
  inOrderTraversal(node: TreeNode | null, result: number[] = []): number[] {
    if (node) {
      this.inOrderTraversal(node.left, result);
      result.push(node.value);
      this.inOrderTraversal(node.right, result);
    }
    return result;
  }

  // Helper function to find the minimum value in a subtree
  private findMinNode(node: TreeNode): TreeNode {
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  // Delete a value from the BST
  delete(value: number): TreeNode | null {
    this.root = this.deleteNode(this.root, value);
    return this.root;
  }

  private deleteNode(node: TreeNode | null, value: number): TreeNode | null {
    if (!node) return null;

    if (value < node.value) {
      node.left = this.deleteNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.deleteNode(node.right, value);
    } else {
      // Node to be deleted found
      if (!node.left && !node.right) {
        // Case 1: Leaf node
        return null;
      } else if (!node.left) {
        // Case 2: Node with only right child
        return node.right;
      } else if (!node.right) {
        // Case 3: Node with only left child
        return node.left;
      } else {
        // Case 4: Node with two children
        const minNode = this.findMinNode(node.right);
        node.value = minNode.value;
        node.right = this.deleteNode(node.right, minNode.value);
      }
    }

    return node;
  }
}

// Example Usage
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

console.log("In-order Traversal:", bst.inOrderTraversal(bst.root)); // [3, 5, 7, 10, 15]
console.log("Search for 7:", bst.search(7)); // true
console.log("Search for 20:", bst.search(20)); // false

bst.delete(5);
console.log("In-order Traversal after deleting 5:", bst.inOrderTraversal(bst.root)); // [3, 7, 10, 15]
