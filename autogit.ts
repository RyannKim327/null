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

  // Insert a value into the BST
  insert(value: T): void {
    const newNode = new TreeNode(value);

    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  // Search for a value in the BST
  search(value: T): boolean {
    let current = this.root;
    while (current !== null) {
      if (value === current.value) {
        return true;
      }
      current = value < current.value ? current.left : current.right;
    }
    return false;
  }

  // Inorder traversal: returns sorted array of values
  inorderTraversal(): T[] {
    const result: T[] = [];

    const inorder = (node: TreeNode<T> | null) => {
      if (node === null) return;
      inorder(node.left);
      result.push(node.value);
      inorder(node.right);
    };

    inorder(this.root);
    return result;
  }
}
const bst = new BinarySearchTree<number>();
bst.insert(10);
bst.insert(5);
bst.insert(20);
bst.insert(15);

console.log(bst.search(15)); // true
console.log(bst.search(25)); // false
console.log(bst.inorderTraversal()); // [5, 10, 15, 20]
