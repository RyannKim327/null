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

  constructor(private compareFn: (a: T, b: T) => number) {}

  insert(value: T) {
    const newNode = new TreeNode(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (this.compareFn(value, current.value) < 0) {
        if (current.left === null) {
          current.left = newNode;
          break;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          break;
        }
        current = current.right;
      }
    }
  }

  search(value: T): boolean {
    let current = this.root;

    while (current) {
      const cmp = this.compareFn(value, current.value);
      if (cmp === 0) return true;
      else if (cmp < 0) current = current.left;
      else current = current.right;
    }
    return false;
  }

  inOrderTraversal(node: TreeNode<T> | null = this.root, result: T[] = []): T[] {
    if (!node) return result;

    this.inOrderTraversal(node.left, result);
    result.push(node.value);
    this.inOrderTraversal(node.right, result);

    return result;
  }
}
const bst = new BinarySearchTree<number>((a, b) => a - b);
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(7);

console.log(bst.search(7)); // true
console.log(bst.search(20)); // false

console.log(bst.inOrderTraversal()); // [5, 7, 10, 15]
