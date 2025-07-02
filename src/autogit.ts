// Define a class for the nodes of the tree
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

// Define a binary tree class
class BinaryTree<T> {
  root: TreeNode<T> | null;

  constructor() {
    this.root = null;
  }

  // Insert a value in the binary tree (for simplicity, assuming a binary search tree)
  insert(value: T): void {
    const newNode = new TreeNode(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  private insertNode(node: TreeNode<T>, newNode: TreeNode<T>): void {
    // Assuming T can be compared with < and >
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // Traversal methods:

  // In-order traversal (left, root, right)
  inorder(node: TreeNode<T> | null = this.root, result: T[] = []): T[] {
    if (node !== null) {
      this.inorder(node.left, result);
      result.push(node.value);
      this.inorder(node.right, result);
    }
    return result;
  }

  // Pre-order traversal (root, left, right)
  preorder(node: TreeNode<T> | null = this.root, result: T[] = []): T[] {
    if (node !== null) {
      result.push(node.value);
      this.preorder(node.left, result);
      this.preorder(node.right, result);
    }
    return result;
  }

  // Post-order traversal (left, right, root)
  postorder(node: TreeNode<T> | null = this.root, result: T[] = []): T[] {
    if (node !== null) {
      this.postorder(node.left, result);
      this.postorder(node.right, result);
      result.push(node.value);
    }
    return result;
  }
}

// Example usage:
const tree = new BinaryTree<number>();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(7);

console.log("In-order traversal:", tree.inorder());   // [5, 7, 10, 15]
console.log("Pre-order traversal:", tree.preorder()); // [10, 5, 7, 15]
console.log("Post-order traversal:", tree.postorder());// [7, 5, 15, 10]
