class BTreeNode {
  constructor(t, leaf) {
    this.t = t; // minimum degree (defines the range for number of keys)
    this.keys = []; // array of keys
    this.childPointers = []; // array of child pointers
    this.leaf = leaf; // is the node a leaf or not
  }
}
class BTree {
  constructor(t) {
    this.root = null; // initialize the root as null
    this.t = t; // minimum degree (defines the range for number of keys)
  }
  
  // Other B-tree methods here
}
class BTree {
  // ...
  
  insert(key) {
    if (this.root === null) {
      // If tree is empty, create a new root node
      this.root = new BTreeNode(this.t, true);
      this.root.keys.push(key);
    } else {
      // If tree is not empty, traverse the tree and insert key in appropriate node
      if (this.root.keys.length === (2 * this.t) - 1) {
        // Root is full, so we need to split it
        const newNode = new BTreeNode(this.t, false);
        newNode.childPointers.push(this.root);
        this.splitChild(newNode, 0, this.root);
        this.root = newNode;
      }
      this.insertNonFull(this.root, key);
    }
  }
  
  // Other B-tree methods here
}
class BTree {
  // ...
  
  splitChild(parent, index, nodeToSplit) {
    const newNode = new BTreeNode(this.t, nodeToSplit.leaf);
    parent.keys.splice(index, 0, nodeToSplit.keys[this.t - 1]);
    parent.childPointers.splice(index + 1, 0, newNode);
    newNode.keys = nodeToSplit.keys.splice(this.t, this.t - 1);
    
    if (!nodeToSplit.leaf) {
      newNode.childPointers = nodeToSplit.childPointers.splice(this.t, this.t);
    }
  }
  
  insertNonFull(node, key) {
    let i = node.keys.length - 1;
    if (node.leaf) {
      // If node is a leaf, insert the key in sorted order
      while (i >= 0 && key < node.keys[i]) {
        i--;
      }
      node.keys.splice(i + 1, 0, key);
    } else {
      // If node is not a leaf, find the child to insert the key and recursively insert
      while (i >= 0 && key < node.keys[i]) {
        i--;
      }
      i++;
      if (node.childPointers[i].keys.length === (2 * this.t) - 1) {
        // If child is full, split it before inserting
        this.splitChild(node, i, node.childPointers[i]);
        if (key > node.keys[i]) {
          i++;
        }
      }
      this.insertNonFull(node.childPointers[i], key);
    }
  }
  
  // Other B-tree methods here
}
class BTree {
  // ...
  
  search(key) {
    return this.searchNode(this.root, key);
  }
  
  searchNode(node, key) {
    let i = 0;
    while (i < node.keys.length && key > node.keys[i]) {
      i++;
    }
  
    if (node.keys[i] === key) {
      return true;
    } else if (node.leaf) {
      return false;
    } else {
      return this.searchNode(node.childPointers[i], key);
    }
  }
  
  delete(key) {
    // TODO: Implement the delete operation
  }
  
  print() {
    this.printNode(this.root);
  }
  
  printNode(node) {
    for (let i = 0; i < node.keys.length; i++) {
      console.log(node.keys[i]);
    }
  
    if (!node.leaf) {
      for (let i = 0; i < node.childPointers.length; i++) {
        this.printNode(node.childPointers[i]);
      }
    }
  }
}
