// Define a class for the Red-Black Tree Node
class Node {
  constructor(key, color) {
    this.key = key;
    this.left = null;
    this.right = null;
    this.parent = null;
    this.color = color;
  }
}

// Define a class for the Red-Black Tree
class RedBlackTree {
  constructor() {
    this.root = null;
  }
  
  // Insert a key into the tree
  insert(key) {
    const newNode = new Node(key, "red");
    
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
    
    this.fixTree(newNode);
  }
  
  // Insert a new node into the correct position in the tree
  insertNode(root, newNode) {
    if (newNode.key < root.key) {
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
  
  // Fix the tree after insertion to maintain Red-Black Tree properties
  fixTree(node) {
    while (node !== this.root && node.parent.color === "red") {
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
            this.leftRotate(node);
          }
          
          node.parent.color = "black";
          node.parent.parent.color = "red";
          this.rightRotate(node.parent.parent);
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
            this.rightRotate(node);
          }
          
          node.parent.color = "black";
          node.parent.parent.color = "red";
          this.leftRotate(node.parent.parent);
        }
      }
    }
    
    this.root.color = "black";
  }
  
  // Perform a left rotation around the given node
  leftRotate(node) {
    const pivot = node.right;
    
    node.right = pivot.left;
    if (pivot.left !== null) {
      pivot.left.parent = node;
    }
    
    pivot.parent = node.parent;
    if (node.parent === null) {
      this.root = pivot;
    } else if (node === node.parent.left) {
      node.parent.left = pivot;
    } else {
      node.parent.right = pivot;
    }
    
    pivot.left = node;
    node.parent = pivot;
  }
  
  // Perform a right rotation around the given node
  rightRotate(node) {
    const pivot = node.left;
    
    node.left = pivot.right;
    if (pivot.right !== null) {
      pivot.right.parent = node;
    }
    
    pivot.parent = node.parent;
    if (node.parent === null) {
      this.root = pivot;
    } else if (node === node.parent.left) {
      node.parent.left = pivot;
    } else {
      node.parent.right = pivot;
    }
    
    pivot.right = node;
    node.parent = pivot;
  }
  
  // Perform an in-order traversal of the tree and return the result as an array
  inOrderTraversal(node, result) {
    if (node !== null) {
      this.inOrderTraversal(node.left, result);
      result.push(node.key);
      this.inOrderTraversal(node.right, result);
    }
  }
  
  // Get the in-order traversal of the tree as an array
  getInOrderTraversal() {
    const result = [];
    this.inOrderTraversal(this.root, result);
    return result;
  }
}

// Example usage
const tree = new RedBlackTree();
tree.insert(7);
tree.insert(3);
tree.insert(18);
tree.insert(10);
tree.insert(22);
tree.insert(8);
tree.insert(11);
tree.insert(26);
tree.insert(2);
tree.insert(6);
tree.insert(13);
console.log(tree.getInOrderTraversal()); // [ 2, 3, 6, 7, 8, 10, 11, 13, 18, 22, 26 ]
