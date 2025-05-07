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

  // comparator helps us handle generic types
  private comparator: (a: T, b: T) => number;

  constructor(comparator: (a: T, b: T) => number) {
    this.comparator = comparator;
  }

  insert(value: T): void {
    const newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (this.comparator(value, current.value) < 0) {
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

  search(value: T): boolean {
    let current = this.root;

    while (current !== null) {
      const comp = this.comparator(value, current.value);
      if (comp === 0) {
        return true;
      } else if (comp < 0) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return false;
  }
}
// For numbers, a straightforward comparator:
const numberComparator = (a: number, b: number) => a - b;

const bst = new BinarySearchTree<number>(numberComparator);

bst.insert(10);
bst.insert(5);
bst.insert(15);

console.log(bst.search(10)); // true
console.log(bst.search(7));  // false
