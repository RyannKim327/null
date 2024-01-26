class RedBlackTree {
  constructor() {
    this.root = null;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
    this.color = "RED"; // Nodes are initially red
  }
}
// Left rotation function
function rotateLeft(root, node) {
  const rightChild = node.right;
  node.right = rightChild.left;
  
  if (rightChild.left !== null) {
    rightChild.left.parent = node;
  }
  
  rightChild.parent = node.parent;
  
  if (node.parent === null) {
    root = rightChild;
  } else if (node === node.parent.left) {
    node.parent.left = rightChild;
  } else {
    node.parent.right = rightChild;
  }
  
  rightChild.left = node;
  node.parent = rightChild;
}

// Right rotation function
function rotateRight(root, node) {
  const leftChild = node.left;
  node.left = leftChild.right;
  
  if (leftChild.right !== null) {
    leftChild.right.parent = node;
  }
  
  leftChild.parent = node.parent;
  
  if (node.parent === null) {
    root = leftChild;
  } else if (node === node.parent.right) {
    node.parent.right = leftChild;
  } else {
    node.parent.left = leftChild;
  }
  
  leftChild.right = node;
  node.parent = leftChild;
}
// Insertion function
function insert(root, value) {
  const newNode = new Node(value);
  let parent = null;
  let current = root;
  
  while (current !== null) {
    parent = current;
    
    if (newNode.value < current.value) {
      current = current.left;
    } else {
      current = current.right;
    }
  }
  
  newNode.parent = parent;
  
  if (parent === null) {
    root = newNode;
  } else if (newNode.value < parent.value) {
    parent.left = newNode;
  } else {
    parent.right = newNode;
  }
  
  // Call the fixInsert function to maintain the properties of the red-black tree
  fixInsert(root, newNode);
}

// Fix the violations after insertion
function fixInsert(root, node) {
  while (node.parent !== null && node.parent.color === "RED") {
    let parent = node.parent;
    let grandParent = node.parent.parent;
    
    if (parent === grandParent.left) {
      let uncle = grandParent.right;

      if (uncle !== null && uncle.color === "RED") {
        parent.color = "BLACK";
        uncle.color = "BLACK";
        grandParent.color = "RED";
        node = grandParent;
      } else {
        if (node === parent.right) {
          node = parent;
          rotateLeft(root, node);
        }
        
        parent = node.parent;
        grandParent = parent.parent;

        parent.color = "BLACK";
        grandParent.color = "RED";
        rotateRight(root, grandParent);
      }
    } else {
      let uncle = grandParent.left;

      if (uncle !== null && uncle.color === "RED") {
        parent.color = "BLACK";
        uncle.color = "BLACK";
        grandParent.color = "RED";
        node = grandParent;
      } else {
        if (node === parent.left) {
          node = parent;
          rotateRight(root, node);
        }
        
        parent = node.parent;
        grandParent = parent.parent;
        
        parent.color = "BLACK";
        grandParent.color = "RED";
        rotateLeft(root, grandParent);
      }
    }
  }
  
  root.color = "BLACK";
}
const tree = new RedBlackTree();

insert(tree.root, 10);
insert(tree.root, 20);
insert(tree.root, 30);
insert(tree.root, 40);
insert(tree.root, 50);
