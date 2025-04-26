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

  insert(value: T): void {
    this.root = this._insertRecursively(this.root, value);
  }

  private _insertRecursively(node: TreeNode<T> | null, value: T): TreeNode<T> {
    if (node === null) {
      return new TreeNode(value);
    }

    if (value < node.value) {
      node.left = this._insertRecursively(node.left, value);
    } else {
      node.right = this._insertRecursively(node.right, value);
    }
    return node;
  }

  // Example traversal: in-order traversal
  inOrderTraversal(node: TreeNode<T> | null = this.root, visit: (value: T) => void = console.log): void {
    if (node !== null) {
      this.inOrderTraversal(node.left, visit);
      visit(node.value);
      this.inOrderTraversal(node.right, visit);
    }
  }
}
const tree = new BinaryTree<number>();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(7);

tree.inOrderTraversal();  // Output: 5, 7, 10, 15
