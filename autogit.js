class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Method to insert a value in the BST
  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  // Helper method for inserting a new node recursively
  insertNode(node, newNode) {
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

  // Method to search for a value in the BST
  search(value) {
    return this.searchNode(this.root, value);
  }

  // Helper method for searching a value recursively
  searchNode(node, value) {
    if (node === null) {
      return false;
    }

    if (value < node.value) {
      return this.searchNode(node.left, value);
    } else if (value > node.value) {
      return this.searchNode(node.right, value);
    } else {
      return true;
    }
  }

  // Method to delete a value from the BST
  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  // Helper method for deleting a node recursively
  deleteNode(node, value) {
    if (node === null) {
      return null;
    }

    if (value < node.value) {
      node.left = this.deleteNode(node.left, value);
      return node;
    } else if (value > node.value) {
      node.right = this.deleteNode(node.right, value);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      const minValue = this.findMinNode(node.right);
      node.value = minValue;
      node.right = this.deleteNode(node.right, minValue);
      return node;
    }
  }

  // Helper method to find the minimum value node in a subtree
  findMinNode(node) {
    if (node.left === null) {
      return node.value;
    } else {
      return this.findMinNode(node.left);
    }
  }

  // Method to print the elements of the BST in inorder traversal (left-root-right)
  inorder() {
    this.inorderTraversal(this.root);
  }

  // Helper method for inorder traversal recursively
  inorderTraversal(node) {
    if (node !== null) {
      this.inorderTraversal(node.left);
      console.log(node.value);
      this.inorderTraversal(node.right);
    }
  }
}
const bst = new BinarySearchTree();

bst.insert(8);
bst.insert(3);
bst.insert(10);
bst.insert(1);
bst.insert(6);
bst.insert(14);
bst.insert(4);
bst.insert(7);
bst.insert(13);

console.log('Inorder traversal:');
bst.inorder();

console.log('Search 6:', bst.search(6)); // Output: true
console.log('Search 12:', bst.search(12)); // Output: false

bst.delete(3);
console.log('Inorder traversal after deleting 3:');
bst.inorder();
