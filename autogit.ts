// Node class represents each node in the BST
class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

// BST class with generic type to support any comparable data type
class BinarySearchTree<T> {
  root: TreeNode<T> | null = null;

  // Helper method to compare values — assumes T supports < and >
  // For custom types, you’d want to inject a comparator function.
  private compare(a: T, b: T): number {
    if (a < b) return -1;
    else if (a > b) return 1;
    return 0;
  }

  // Insert a value into the BST
  insert(value: T): void {
    const newNode = new TreeNode(value);

    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (this.compare(value, current.value) < 0) {
        // Go left
        if (current.left === null) {
          current.left = newNode;
          break;
        } else {
          current = current.left;
        }
      } else {
        // Go right
        if (current.right === null) {
          current.right = newNode;
          break;
        } else {
          current = current.right;
        }
      }
    }
  }

  // Search for a value in the BST, returns true if found
  search(value: T): boolean {
    let current = this.root;

    while (current !== null) {
      const comp = this.compare(value, current.value);
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

  // In-order traversal to return values in sorted order
  inorder(): T[] {
    const result: T[] = [];

    function traverse(node: TreeNode<T> | null) {
      if (node === null) return;
      traverse(node.left);
      result.push(node.value);
      traverse(node.right);
    }

    traverse(this.root);
    return result;
  }
}

// Example usage:
const bst = new BinarySearchTree<number>();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(7);

console.log(bst.search(7));  // true
console.log(bst.search(8));  // false
console.log(bst.inorder());  // [5, 7, 10, 15]
