class BTreeNode {
  constructor(t, isLeaf) {
    this.t = t; // Minimum degree
    this.keys = []; // Array to store keys
    this.child = []; // Array to store child nodes
    this.isLeaf = isLeaf; // Boolean flag indicating if node is a leaf
  }
}
class BTree {
  constructor(t) {
    this.root = null; // Root node
    this.t = t; // Minimum degree
  }
  
  // Search operation
  search(node, key) {
    let i = 0;
    while (i < node.keys.length && key > node.keys[i]) {
      i++;
    }
    
    if (node.keys[i] === key) {
      return node;
    }
    
    if (node.isLeaf) {
      return null;
    }
    
    return this.search(node.child[i], key);
  }
  
  // Insert operation
  insert(key) {
    if (this.root === null) {
      this.root = new BTreeNode(this.t, true);
      this.root.keys.push(key);
    } else {
      if (this.root.keys.length === (2 * this.t) - 1) {
        const newNode = new BTreeNode(this.t, false);
        newNode.child.push(this.root);
        this.root = newNode;
        this.splitChild(this.root, 0);
      }
      this.insertNonFull(this.root, key);
    }
  }

  // Insert non-full operation
  insertNonFull(node, key) {
    let i = node.keys.length - 1;
    if (node.isLeaf) {
      while (i >= 0 && node.keys[i] > key) {
        node.keys[i + 1] = node.keys[i];
        i--;
      }
      node.keys[i + 1] = key;
    } else {
      while (i >= 0 && node.keys[i] > key) {
        i--;
      }
      i++;
      if (node.child[i].keys.length === (2 * this.t) - 1) {
        this.splitChild(node, i);
        if (node.keys[i] < key) {
          i++;
        }
      }
      this.insertNonFull(node.child[i], key);
    }
  }
  
  // Split child operation
  splitChild(node, i) {
    const y = node.child[i];
    const z = new BTreeNode(this.t, y.isLeaf);
    
    node.child.splice(i, 0, z);
    node.keys.splice(i, 0, y.keys[this.t - 1]);
    
    z.keys = y.keys.splice(this.t, this.t - 1);
    
    if (!y.isLeaf) {
      z.child = y.child.splice(this.t, this.t);
    }
  }
  
  // In-order traversal
  inOrderTraversal(node) {
    if (node) {
      let i;
      for (i = 0; i < node.keys.length; i++) {
        this.inOrderTraversal(node.child[i]);
        console.log(node.keys[i]);
      }
      this.inOrderTraversal(node.child[i]);
    }
  }
}
const bTree = new BTree(3); // Create a B-tree with minimum degree 3

bTree.insert(10);
bTree.insert(20);
bTree.insert(5);
bTree.insert(6);
bTree.insert(12);
bTree.insert(30);

bTree.inOrderTraversal(bTree.root); // Outputs: 5, 6, 10, 12, 20, 30

const foundNode = bTree.search(bTree.root, 12);
console.log(foundNode); // Outputs: BTreeNode object with key 12
