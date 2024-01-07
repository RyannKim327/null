class RedBlackTreeNode {
  constructor(value, color) {
    this.value = value;
    this.color = color;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}
class RedBlackTree {
  constructor() {
    this.root = null;
  }
  
  // Insert a node into the tree
  insert(value) {
    const newNode = new RedBlackTreeNode(value, "red");
    
    if (this.root === null) {
      this.root = newNode;
      this.root.color = "black";
    } else {
      this.insertNode(this.root, newNode);
      this.fixViolation(newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
        newNode.parent = root;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
        newNode.parent = root;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }
  
  fixViolation(node) {
    while (node.parent !== null && node.parent.color === "red") {
      if (node.parent === node.parent.parent.left) {
        const uncle = node.parent.parent.right;
        
        if (uncle !== null && uncle.color === "red") {
          node.parent.color = "black";
          uncle.color = "black";
          node.parent.parent.color = "red";
          node = node.parent.parent;
        } else {
          if (node === node.parent.right) {
            node = node.parent;
            this.rotateLeft(node);
          }
          
          node.parent.color = "black";
          node.parent.parent.color = "red";
          this.rotateRight(node.parent.parent);
        }
      } else {
        const uncle = node.parent.parent.left;
        
        if (uncle !== null && uncle.color === "red") {
          node.parent.color = "black";
          uncle.color = "black";
          node.parent.parent.color = "red";
          node = node.parent.parent;
        } else {
          if (node === node.parent.left) {
            node = node.parent;
            this.rotateRight(node);
          }
          
          node.parent.color = "black";
          node.parent.parent.color = "red";
          this.rotateLeft(node.parent.parent);
        }
      }
    }
    
    this.root.color = "black";
  }
  
  rotateLeft(node) {
    const newRoot = node.right;
    node.right = newRoot.left;
    
    if (newRoot.left !== null) {
      newRoot.left.parent = node;
    }
    
    newRoot.parent = node.parent;
    
    if (node.parent === null) {
      this.root = newRoot;
    } else if (node === node.parent.left) {
      node.parent.left = newRoot;
    } else {
      node.parent.right = newRoot;
    }
    
    newRoot.left = node;
    node.parent = newRoot;
  }
  
  rotateRight(node) {
    const newRoot = node.left;
    node.left = newRoot.right;
    
    if (newRoot.right !== null) {
      newRoot.right.parent = node;
    }
    
    newRoot.parent = node.parent;
    
    if (node.parent === null) {
      this.root = newRoot;
    } else if (node === node.parent.right) {
      node.parent.right = newRoot;
    } else {
      node.parent.left = newRoot;
    }
    
    newRoot.right = node;
    node.parent = newRoot;
  }
}
const tree = new RedBlackTree();
tree.insert(10);
tree.insert(20);
tree.insert(30);
