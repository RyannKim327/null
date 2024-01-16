class BTreeNode {
  constructor(t, leaf = true) {
    this.keys = [];
    this.children = [];
    this.leaf = leaf;
    this.t = t;
  }

  insertNonFull(key) {
    let i = this.keys.length - 1;

    if (this.leaf) {
      while (i >= 0 && key < this.keys[i]) {
        this.keys[i + 1] = this.keys[i];
        i--;
      }

      this.keys[i + 1] = key;
    } else {
      while (i >= 0 && key < this.keys[i]) {
        i--;
      }

      if (this.children[i + 1].keys.length === 2 * this.t - 1) {
        this.splitChild(i + 1, this.children[i + 1]);

        if (key > this.keys[i + 1]) {
          i++;
        }
      }

      this.children[i + 1].insertNonFull(key);
    }
  }

  splitChild(i, y) {
    const newNode = new BTreeNode(y.t, y.leaf);

    this.children.splice(i + 1, 0, newNode);
    this.keys.splice(i, 0, y.keys[y.keys.length - this.t]);

    newNode.keys = y.keys.splice(this.t, y.keys.length);
    if (!y.leaf) {
      newNode.children = y.children.splice(this.t, y.children.length);
    }
  }
}

class BTree {
  constructor(t) {
    this.root = new BTreeNode(t, true);
    this.t = t;
  }

  insert(key) {
    const root = this.root;

    if (root.keys.length === (2 * this.t) - 1) {
      const newRoot = new BTreeNode(this.t, false);
      this.root = newRoot;
      newRoot.children[0] = root;
      newRoot.splitChild(0, root);
      newRoot.insertNonFull(key);
    } else {
      root.insertNonFull(key);
    }
  }
}
const bTree = new BTree(3);
bTree.insert(10);
bTree.insert(20);
bTree.insert(30);

console.log(bTree.root); // Check the root node
