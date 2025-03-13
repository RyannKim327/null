class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

class BinarySearchTree<T> {
  private root: TreeNode<T> | null = null;

  // Insert a value into the BST
  insert(value: T): void {
    this.root = this._insertRecursive(this.root, value);
  }

  private _insertRecursive(node: TreeNode<T> | null, value: T): TreeNode<T> {
    // If the tree is empty, create a new node
    if (node === null) {
      return new TreeNode(value);
    }

    // Compare and recursively insert in left or right subtree
    if (value < node.value) {
      node.left = this._insertRecursive(node.left, value);
    } else if (value > node.value) {
      node.right = this._insertRecursive(node.right, value);
    }

    return node;
  }

  // Search for a value in the BST
  search(value: T): boolean {
    return this._searchRecursive(this.root, value);
  }

  private _searchRecursive(node: TreeNode<T> | null, value: T): boolean {
    // If tree is empty or value is found
    if (node === null) {
      return false;
    }

    if (value === node.value) {
      return true;
    }

    // Recursively search left or right subtree
    if (value < node.value) {
      return this._searchRecursive(node.left, value);
    } else {
      return this._searchRecursive(node.right, value);
    }
  }

  // Delete a value from the BST
  delete(value: T): void {
    this.root = this._deleteRecursive(this.root, value);
  }

  private _deleteRecursive(node: TreeNode<T> | null, value: T): TreeNode<T> | null {
    // If tree is empty
    if (node === null) {
      return null;
    }

    // Find the node to delete
    if (value < node.value) {
      node.left = this._deleteRecursive(node.left, value);
    } else if (value > node.value) {
      node.right = this._deleteRecursive(node.right, value);
    } else {
      // Node with only one child or no child
      if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      }

      // Node with two children: Get the inorder successor
      node.value = this._findMinValue(node.right);
      
      // Delete the inorder successor
      node.right = this._deleteRecursive(node.right, node.value);
    }

    return node;
  }

  // Find the minimum value in a subtree
  private _findMinValue(node: TreeNode<T>): T {
    let current = node;
    while (current.left !== null) {
      current = current.left;
    }
    return current.value;
  }

  // Inorder traversal (sorted order)
  inorderTraversal(): T[] {
    const result: T[] = [];
    this._inorderRecursive(this.root, result);
    return result;
  }

  private _inorderRecursive(node: TreeNode<T> | null, result: T[]): void {
    if (node !== null) {
      this._inorderRecursive(node.left, result);
      result.push(node.value);
      this._inorderRecursive(node.right, result);
    }
  }
}

// Example usage
function main() {
  const bst = new BinarySearchTree<number>();
  
  // Inserting values
  bst.insert(5);
  bst.insert(3);
  bst.insert(7);
  bst.insert(1);
  bst.insert(4);

  // Search
  console.log(bst.search(3)); // true
  console.log(bst.search(6)); // false

  // Inorder traversal (will print sorted values)
  console.log(bst.inorderTraversal()); // [1, 3, 4, 5, 7]

  // Delete
  bst.delete(3);
  console.log(bst.inorderTraversal()); // [1, 4, 5, 7]
}

main();
