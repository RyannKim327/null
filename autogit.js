class BTreeNode {
  constructor(t, isLeaf) {
    this.t = t; // Minimum degree (defines the range for number of keys)
    this.keys = []; // Array of keys
    this.children = []; // Array of child nodes
    this.isLeaf = isLeaf; // Is true when node is a leaf, false otherwise
  }

  // Search the node for a given key
  search(key) {
    let i = 0;
    while (i < this.keys.length && key > this.keys[i]) {
      i++;
    }
    if (this.keys[i] === key) {
      return this;
    }
    if (this.isLeaf) {
      return null;
    }
    return this.children[i].search(key);
  }
}

class BTree {
  constructor(t) {
    this.root = null;
    this.t = t; // Minimum degree (defines the range for number of keys)
  }

  // Function to traverse the B-tree
  traverse() {
    if (this.root !== null) {
      this.traverseNode(this.root);
    }
  }

  traverseNode(node) {
    console.log(node.keys);

    if (!node.isLeaf) {
      for (let i = 0; i < node.children.length; i++) {
        this.traverseNode(node.children[i]);
      }
    }
  }

  // Function to insert a key
  insert(key) {
    if (this.root === null) {
      this.root = new BTreeNode(this.t, true);
      this.root.keys.push(key);
    } else {
      if (this.root.keys.length === 2 * this.t - 1) {
        let newRoot = new BTreeNode(this.t, false);
        newRoot.children.push(this.root);
        this.splitChild(newRoot, 0, this.root);
        this.root = newRoot;
      }
      this.insertNonFull(this.root, key);
    }
  }

  insertNonFull(node, key) {
    let i = node.keys.length - 1;

    if (node.isLeaf) {
      // Insert the key at the right position
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

      if (node.children[i].keys.length === 2 * this.t - 1) {
        this.splitChild(node, i, node.children[i]);
        if (key > node.keys[i]) {
          i++;
        }
      }
      this.insertNonFull(node.children[i], key);
    }
  }

  splitChild(parent, index, node) {
    let newNode = new BTreeNode(this.t, node.isLeaf);

    parent.keys.splice(index, 0, node.keys[this.t - 1]);

    if (!node.isLeaf) {
      // Move the last t-1 keys and their children to the new node
      newNode.children = node.children.splice(this.t, this.t - 1);
    }

    node.keys.splice(this.t - 1);

    parent.children.splice(index + 1, 0, newNode);
  }
}

// Example usage:
let bTree = new BTree(3);
bTree.insert(1);
bTree.insert(3);
bTree.insert(7);
bTree.insert(10);
bTree.insert(12);
bTree.insert(5);

bTree.traverse(); // Output: [5, 7, 10] [1, 3] [12]
