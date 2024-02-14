class BTreeNode {
  constructor(leaf = true) {
    this.leaf = leaf;
    this.keys = [];
    this.children = [];
  }

  insertNonFull(key) {
    let i = this.keys.length - 1;

    if (this.leaf) {
      while (i >= 0 && this.keys[i] > key) {
        this.keys[i + 1] = this.keys[i];
        i--;
      }

      this.keys[i + 1] = key;
    } else {
      while (i >= 0 && this.keys[i] > key) {
        i--;
      }

      if (this.children[i + 1].keys.length === 2 * t - 1) {
        this.splitChild(i + 1, this.children[i + 1]);

        if (this.keys[i + 1] < key) {
          i++;
        }
      }

      this.children[i + 1].insertNonFull(key);
    }
  }

  splitChild(i, y) {
    const newNode = new BTreeNode(y.leaf);
    this.children.splice(i + 1, 0, newNode);
    this.keys.splice(i, 0, y.keys[t - 1]);

    newNode.keys = y.keys.splice(t, t - 1);
    newNode.children = y.children.splice(t, t);

    y.keys.pop();
  }

  traverse() {
    let result = [];
    let i;

    for (i = 0; i < this.keys.length; i++) {
      if (!this.leaf) {
        result = result.concat(this.children[i].traverse());
      }
      result.push(this.keys[i]);
    }

    if (!this.leaf) {
      result = result.concat(this.children[i].traverse());
    }

    return result;
  }
}

class BTree {
  constructor(t) {
    this.root = new BTreeNode(true);
    this.t = t;
  }

  insert(key) {
    const root = this.root;

    if (root.keys.length === (2 * this.t) - 1) {
      const newNode = new BTreeNode(false);
      this.root = newNode;
      newNode.children.push(root);
      newNode.splitChild(0, root);
      newNode.insertNonFull(key);
    } else {
      root.insertNonFull(key);
    }
  }

  search(key) {
    return this.root.search(key);
  }

  traverse() {
    if (this.root) {
      return this.root.traverse();
    }
    return [];
  }
}
// Create a new B-tree with a minimum degree of 2
const btree = new BTree(2);

// Insert keys into the B-tree
btree.insert(10);
btree.insert(20);
btree.insert(5);
btree.insert(6);
btree.insert(12);

// Search for a specific key in the B-tree
const keyExists = btree.search(6);
console.log(keyExists);  // Output: true

// Traverse the B-tree in-order
const elements = btree.traverse();
console.log(elements);  // Output: [5, 6, 10, 12, 20]
