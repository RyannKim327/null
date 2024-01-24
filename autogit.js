class BTreeNode {
  constructor(t, leaf = true) {
    this.t = t; // minimum degree
    this.keys = []; // array to hold keys
    this.children = []; // array to hold child nodes
    this.leaf = leaf; // boolean value to determine if node is leaf or not
  }
}

class BTree {
  constructor(t) {
    this.root = new BTreeNode(t, true); // create a new root node
    this.t = t; // minimum degree
  }
  
  insert(key) {
    let root = this.root;
    if (root.keys.length === (2 * this.t) - 1) {
      let newNode = new BTreeNode(this.t, false);
      this.root = newNode;
      newNode.children[0] = root;
      this.splitChild(newNode, 0);
      this.insertNonFull(newNode, key);
    } else {
      this.insertNonFull(root, key);
    }
  }
  
  insertNonFull(node, key) {
    let i = node.keys.length - 1;
    if (node.leaf) {
      while (i >= 0 && key < node.keys[i]) {
        node.keys[i + 1] = node.keys[i];
        i--;
      }
      node.keys[i + 1] = key;
    } else {
      while (i >= 0 && key < node.keys[i]) {
        i--;
      }
      i++;
      if (node.children[i].keys.length === (2 * this.t) - 1) {
        this.splitChild(node, i);
        if (key > node.keys[i]) {
          i++;
        }
      }
      this.insertNonFull(node.children[i], key);
    }
  }
  
  splitChild(parent, i) {
    let newNode = new BTreeNode(this.t, parent.children[i].leaf);
    let child = parent.children[i];
    parent.keys.splice(i, 0, child.keys[this.t - 1]);
    parent.children.splice(i + 1, 0, newNode);
    newNode.keys = child.keys.splice(this.t, child.keys.length - 1);
    if (!child.leaf) {
      newNode.children = child.children.splice(this.t, child.children.length);
    }
  }
  
  search(key, node = this.root) {
    let i = 0;
    while (i < node.keys.length && key > node.keys[i]) {
      i++;
    }
    if (node.keys[i] === key) {
      return node;
    } else if (node.leaf) {
      return null;
    } else {
      return this.search(key, node.children[i]);
    }
  }
}

// Example usage:
let bTree = new BTree(3);
bTree.insert(10);
bTree.insert(20);
bTree.insert(5);
bTree.insert(6);
bTree.insert(12);
bTree.insert(30);

console.log(bTree.search(6)); // Output: BTreeNode { t: 3, keys: [ 5, 6, 10, 12, 20, 30 ], children: [], leaf: true }
