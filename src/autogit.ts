// Define the Node class
class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Define the BinaryTree class
class BinaryTree<T> {
  root: TreeNode<T> | null;

  constructor() {
    this.root = null; // Initialize the root as null
  }

  // Insert a value into the binary tree
  insert(value: T): void {
    const newNode = new TreeNode(value);

    if (this.root === null) {
      // If the tree is empty, set the new node as the root
      this.root = newNode;
    } else {
      // Otherwise, find the correct position to insert the node
      this.insertNode(this.root, newNode);
    }
  }

  private insertNode(node: TreeNode<T>, newNode: TreeNode<T>): void {
    if (newNode.value < node.value) {
      // Insert into the left subtree
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      // Insert into the right subtree
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // In-order traversal (Left -> Root -> Right)
  inOrderTraversal(node: TreeNode<T> | null = this.root, result: T[] = []): T[] {
    if (node !== null) {
      this.inOrderTraversal(node.left, result);
      result.push(node.value);
      this.inOrderTraversal(node.right, result);
    }
    return result;
  }

  // Pre-order traversal (Root -> Left -> Right)
  preOrderTraversal(node: TreeNode<T> | null = this.root, result: T[] = []): T[] {
    if (node !== null) {
      result.push(node.value);
      this.preOrderTraversal(node.left, result);
      this.preOrderTraversal(node.right, result);
    }
    return result;
  }

  // Post-order traversal (Left -> Right -> Root)
  postOrderTraversal(node: TreeNode<T> | null = this.root, result: T[] = []): T[] {
    if (node !== null) {
      this.postOrderTraversal(node.left, result);
      this.postOrderTraversal(node.right, result);
      result.push(node.value);
    }
    return result;
  }

  // Search for a value in the binary tree
  search(value: T): boolean {
    return this.searchNode(this.root, value);
  }

  private searchNode(node: TreeNode<T> | null, value: T): boolean {
    if (node === null) {
      return false;
    }

    if (value < node.value) {
      return this.searchNode(node.left, value);
    } else if (value > node.value) {
      return this.searchNode(node.right, value);
    } else {
      return true; // Value found
    }
  }
}

// Example Usage
const tree = new BinaryTree<number>();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);

console.log("In-order Traversal:", tree.inOrderTraversal()); // [3, 5, 7, 10, 15]
console.log("Pre-order Traversal:", tree.preOrderTraversal()); // [10, 5, 3, 7, 15]
console.log("Post-order Traversal:", tree.postOrderTraversal()); // [3, 7, 5, 15, 10]

console.log("Search for 7:", tree.search(7)); // true
console.log("Search for 20:", tree.search(20)); // false
