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
class BinaryTree<T> {
  root: TreeNode<T> | null;

  constructor() {
    this.root = null;
  }

  // Insert a new value into the binary tree
  insert(value: T): void {
    const newNode = new TreeNode(value);

    if (!this.root) {
      // If the tree is empty, set the new node as the root
      this.root = newNode;
      return;
    }

    // Use a queue to find the first available position
    const queue: TreeNode<T>[] = [];
    queue.push(this.root);

    while (queue.length > 0) {
      const current = queue.shift()!; // Get the first node in the queue

      if (!current.left) {
        // If the left child is empty, insert the new node here
        current.left = newNode;
        return;
      } else {
        queue.push(current.left);
      }

      if (!current.right) {
        // If the right child is empty, insert the new node here
        current.right = newNode;
        return;
      } else {
        queue.push(current.right);
      }
    }
  }

  // In-order traversal (left-root-right)
  inOrderTraversal(node: TreeNode<T> | null = this.root): void {
    if (node) {
      this.inOrderTraversal(node.left);
      console.log(node.value);
      this.inOrderTraversal(node.right);
    }
  }

  // Pre-order traversal (root-left-right)
  preOrderTraversal(node: TreeNode<T> | null = this.root): void {
    if (node) {
      console.log(node.value);
      this.preOrderTraversal(node.left);
      this.preOrderTraversal(node.right);
    }
  }

  // Post-order traversal (left-right-root)
  postOrderTraversal(node: TreeNode<T> | null = this.root): void {
    if (node) {
      this.postOrderTraversal(node.left);
      this.postOrderTraversal(node.right);
      console.log(node.value);
    }
  }

  // Search for a value in the binary tree
  search(value: T): boolean {
    const queue: TreeNode<T>[] = [];
    queue.push(this.root!);

    while (queue.length > 0) {
      const current = queue.shift()!;
      if (current.value === value) {
        return true;
      }
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }

    return false;
  }
}
const tree = new BinaryTree<number>();

tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(40);
tree.insert(50);

console.log("In-order Traversal:");
tree.inOrderTraversal(); // Output: 40, 20, 50, 10, 30

console.log("Pre-order Traversal:");
tree.preOrderTraversal(); // Output: 10, 20, 40, 50, 30

console.log("Post-order Traversal:");
tree.postOrderTraversal(); // Output: 40, 50, 20, 30, 10

console.log("Search for 30:", tree.search(30)); // Output: true
console.log("Search for 60:", tree.search(60)); // Output: false
