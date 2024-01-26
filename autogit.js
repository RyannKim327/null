// Node class
class Node {
  constructor(value, color) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
    this.color = color;
  }
}

// Red-Black Tree class
class RedBlackTree {
  constructor() {
    this.root = null;
  }
  
  // Left rotation
  rotateLeft(node) {
    const rightChild = node.right;
    node.right = rightChild.left;
    
    if (rightChild.left != null) {
      rightChild.left.parent = node;
    }
      
    rightChild.parent = node.parent;
    
    if (node.parent == null) {
      this.root = rightChild;
    } else if (node === node.parent.left) {
      node.parent.left = rightChild;
    } else {
      node.parent.right = rightChild;
    }
    
    rightChild.left = node;
    node.parent = rightChild;
  }
  
  // Right rotation
  rotateRight(node) {
    const leftChild = node.left;
    node.left = leftChild.right;
    
    if (leftChild.right != null) {
      leftChild.right.parent = node;
    }
    
    leftChild.parent = node.parent;
    
    if (node.parent == null) {
      this.root = leftChild;
    } else if (node === node.parent.right) {
      node.parent.right = leftChild;
    } else {
      node.parent.left = leftChild;
    }
    
    leftChild.right = node;
    node.parent = leftChild;
  }
  
  // Insertion
  insert(value) {
    const node = new Node(value, "red");
    
    if (this.root === null) {
      this.root = node;
      node.color = "black";
      return;
    }
    
    let curr = this.root;
    let prev = null;
    
    while (curr != null) {
      prev = curr;
      
      if (value < curr.value) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }
    
    node.parent = prev;
    
    if (value < prev.value) {
      prev.left = node;
    } else {
      prev.right = node;
    }
    
    this.fixViolation(node);
  }
  
  // Fix violation after insertion
  fixViolation(node) {
    while (node !== this.root && node.parent.color === "red") {
      if (node.parent === node.parent.parent.left) {
        let uncle = node.parent.parent.right;
        
        if (uncle != null && uncle.color === "red") {
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
        let uncle = node.parent.parent.left;
        
        if (uncle != null && uncle.color === "red") {
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
}
const tree = new RedBlackTree();

tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(12);
tree.insert(18);
