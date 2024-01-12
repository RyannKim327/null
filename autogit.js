class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
  
  insert(value) {
    const newNode = new BinaryTreeNode(value);
    
    if (this.root === null) {
      // If the tree is empty, set the new node as the root
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  
  insertNode(node, newNode) {
    // If the new value is less than the current node, go left
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } 
    // If the new value is greater than the current node, go right
    else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
  
  // To traverse the tree in a specific order, you can implement
  // various traversal methods like preorder, inorder, postorder, etc.
  
  // Example: Inorder traversal (left -> root -> right)
  inorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.value);
      this.inorder(node.right);
    }
  }
}

// Usage example:
const tree = new BinaryTree();
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(1);
tree.insert(4);

// Traversing the tree (inorder traversal)
tree.inorder(tree.root);
