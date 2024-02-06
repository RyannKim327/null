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

      if (this.children[i + 1].keys.length === (2 * this.t) - 1) {
        this.splitChild(i + 1, this.children[i + 1]);

        if (key > this.keys[i + 1]) {
          i++;
        }
      }
      
      this.children[i + 1].insertNonFull(key);
    }
  }

  splitChild(i, node) {
    const splitIndex = Math.floor(node.keys.length / 2);
    const splitValue = node.keys[splitIndex];
    const newNode = new BTreeNode(this.t, node.leaf);

    for (let j = splitIndex + 1; j < node.keys.length; j++) {
      newNode.keys.push(node.keys[j]);
    }

    if (!node.leaf) {
      for (let j = splitIndex + 1; j < node.children.length; j++) {
        newNode.children.push(node.children[j]);
      }
    }

    node.keys.length = splitIndex;

    if (!node.leaf) {
      node.children.length = splitIndex + 1;
    }

    this.keys.splice(i, 0, splitValue);
    this.children.splice(i + 1, 0, newNode);
  }

  search(key) {
    let i = 0;
    while (i < this.keys.length && key > this.keys[i]) {
      i++;
    }

    if (this.keys[i] === key) {
      return this;
    }

    if (this.leaf) {
      return null;
    }

    return this.children[i].search(key);
  }
}

class BTree {
  constructor(t) {
    this.root = new BTreeNode(t, true);
    this.t = t;
  }

  insert(key) {
    if (this.root.keys.length === (2 * this.t) - 1) {
      const oldRoot = this.root;
      this.root = new BTreeNode(this.t, false);
      this.root.children.push(oldRoot);
      this.root.splitChild(0, oldRoot);
      this.root.insertNonFull(key);
    } else {
      this.root.insertNonFull(key);
    }
  }

  search(key) {
    return this.root.search(key);
  }
}
const bTree = new BTree(3);
bTree.insert(10);
bTree.insert(20);
bTree.insert(5);
const node = bTree.search(10);
console.log(node.keys); // Output: [10]
