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
  
  search(value) {
    return this.searchNode(this.root, value);
  }
  
  searchNode(node, value) {
    if (node === null) {
      return false;
    }
    
    if (value === node.value) {
      return true;
    }
    
    if (value < node.value) {
      return this.searchNode(node.left, value);
    }
    
    return this.searchNode(node.right, value);
  }
  
  remove(value) {
    this.root = this.removeNode(this.root, value);
  }
  
  removeNode(node, value) {
    if (node === null) {
      return null;
    }
    
    if (value < node.value) {
      node.left = this.removeNode(node.left, value);
      return node;
    } else if (value > node.value) {
      node.right = this.removeNode(node.right, value);
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
    }
    
    return this.findMinNode(node.left);
  }
  
  getRootNode() {
    return this.root;
  }
  
  inorderTraversal(node, callback) {
    if (node !== null) {
      this.inorderTraversal(node.left, callback);
      callback(node.value);
      this.inorderTraversal(node.right, callback);
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

console.log('Inorder Traversal:');
bst.inorderTraversal(bst.getRootNode(), value => console.log(value));

console.log('Search 7:', bst.search(7));
console.log('Search 12:', bst.search(12));

bst.remove(6);
console.log('Inorder Traversal after removal:');
bst.inorderTraversal(bst.getRootNode(), value => console.log(value));
