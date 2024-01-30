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

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

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

  remove(value) {
    this.root = this.removeNode(this.root, value);
  }

  removeNode(node, key) {
    if (node === null) {
      return null;
    } else if (key < node.value) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.value) {
      node.right = this.removeNode(node.right, key);
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

      const minNode = this.findMinNode(node.right);
      node.value = minNode.value;
      node.right = this.removeNode(node.right, minNode.value);
      return node;
    }
  }

  findMinNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }

  inorderTraversal(callback) {
    this.inorderTraversalNode(this.root, callback);
  }

  inorderTraversalNode(node, callback) {
    if (node !== null) {
      this.inorderTraversalNode(node.left, callback);
      callback(node.value);
      this.inorderTraversalNode(node.right, callback);
    }
  }

  preorderTraversal(callback) {
    this.preorderTraversalNode(this.root, callback);
  }

  preorderTraversalNode(node, callback) {
    if (node !== null) {
      callback(node.value);
      this.preorderTraversalNode(node.left, callback);
      this.preorderTraversalNode(node.right, callback);
    }
  }

  postorderTraversal(callback) {
    this.postorderTraversalNode(this.root, callback);
  }

  postorderTraversalNode(node, callback) {
    if (node !== null) {
      this.postorderTraversalNode(node.left, callback);
      this.postorderTraversalNode(node.right, callback);
      callback(node.value);
    }
  }

  search(value) {
    return this.searchNode(this.root, value);
  }

  searchNode(node, value) {
    if (node === null) {
      return false;
    } else if (value < node.value) {
      return this.searchNode(node.left, value);
    } else if (value > node.value) {
      return this.searchNode(node.right, value);
    } else {
      return true;
    }
  }
}
const bst = new BinarySearchTree();

bst.insert(4);
bst.insert(2);
bst.insert(6);
bst.insert(1);
bst.insert(3);
bst.insert(5);
bst.insert(7);

console.log("Inorder traversal: ");
bst.inorderTraversal((value) => console.log(value));

console.log("Preorder traversal: ");
bst.preorderTraversal((value) => console.log(value));

console.log("Postorder traversal: ");
bst.postorderTraversal((value) => console.log(value));

console.log("Search for value 5: ", bst.search(5));
console.log("Search for value 8: ", bst.search(8));

bst.remove(3);
console.log("Inorder traversal after removing 3: ");
bst.inorderTraversal((value) => console.log(value));
Inorder traversal:
1
2
3
4
5
6
7
Preorder traversal:
4
2
1
3
6
5
7
Postorder traversal:
1
3
2
5
7
6
4
Search for value 5: true
Search for value 8: false
Inorder traversal after removing 3:
1
2
4
5
6
7
