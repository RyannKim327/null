class BTreeNode {
  constructor(t, leaf) {
    this.t = t; // degree of the B-tree
    this.keys = [];
    this.children = [];
    this.leaf = leaf;
  }
}

class BTree {
  constructor(t) {
    this.root = null;
    this.t = t;
  }

  insert(key) {
    if (this.root === null) {
      this.root = new BTreeNode(this.t, true);
      this.root.keys.push(key);
    } else {
      if (this.root.keys.length === 2 * this.t - 1) {
        let newRoot = new BTreeNode(this.t, false);
        newRoot.children.push(this.root);
        this.splitChild(newRoot, 0);

        let i = 0;
        if (newRoot.keys[0] < key) {
          i++;
        }
        this.insertNonFull(newRoot.children[i], key);

        this.root = newRoot;
      } else {
        this.insertNonFull(this.root, key);
      }
    }
  }

  insertNonFull(node, key) {
    let i = node.keys.length - 1;

    if (node.leaf) {
      while (i >= 0 && key < node.keys[i]) {
        node.keys[i+1] = node.keys[i];
        i--;
      }
      node.keys[i+1] = key;
    } else {
      while (i >= 0 && key < node.keys[i]) {
        i--;
      }
      i++;
      if (node.children[i].keys.length === 2 * this.t - 1) {
        this.splitChild(node, i);
        if (key > node.keys[i]) {
          i++;
        }
      }
      this.insertNonFull(node.children[i], key);
    }
  }

  splitChild(parent, index) {
    let t = this.t;
    let child = parent.children[index];
    let newChild = new BTreeNode(t, child.leaf);
    parent.keys.splice(index, 0, child.keys[t-1]);
    parent.children.splice(index+1, 0, newChild);

    newChild.keys = child.keys.splice(t);
    if (!child.leaf) {
      newChild.children = child.children.splice(t);
    }
  }
}

// Example usage
let btree = new BTree(2);
btree.insert(10);
btree.insert(20);
btree.insert(5);
btree.insert(6);
