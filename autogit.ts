class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

class BinarySearchTree<T> {
  root: TreeNode<T> | null = null;

  // Helper function to compare values
  private compare(a: T, b: T): number {
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
  }

  insert(value: T): void {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    this.insertNode(this.root, newNode);
  }

  private insertNode(node: TreeNode<T>, newNode: TreeNode<T>): void {
    if (this.compare(newNode.value, node.value) < 0) {
      // Go left
      if (node.left === null) node.left = newNode;
      else this.insertNode(node.left, newNode);
    } else {
      // Go right
      if (node.right === null) node.right = newNode;
      else this.insertNode(node.right, newNode);
    }
  }

  search(value: T): boolean {
    return this.searchNode(this.root, value);
  }

  private searchNode(node: TreeNode<T> | null, value: T): boolean {
    if (!node) return false;
    const comp = this.compare(value, node.value);
    if (comp === 0) return true;
    else if (comp < 0) return this.searchNode(node.left, value);
    else return this.searchNode(node.right, value);
  }

  // In-order traversal to get sorted values
  inorder(): T[] {
    const result: T[] = [];
    this.inorderTraversal(this.root, result);
    return result;
  }

  private inorderTraversal(node: TreeNode<T> | null, result: T[]): void {
    if (node !== null) {
      this.inorderTraversal(node.left, result);
      result.push(node.value);
      this.inorderTraversal(node.right, result);
    }
  }
}
