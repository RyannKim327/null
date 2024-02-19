class BTreeNode {
  constructor(t, isLeaf) {
    this.keys = [];
    this.children = [];
    this.isLeaf = isLeaf || false;
    this.t = t;
  }
}

class BTree {
  constructor(t) {
    this.root = null;
    this.t = t;
  }

  splitChild(node, i) {
    const newChild = new BTreeNode(node.t, node.children[i].isLeaf);
    const splitChild = node.children[i];
    node.keys.splice(i, 0, splitChild.keys[node.t - 1]);

    newChild.keys = splitChild.keys.splice(node.t, splitChild.keys.length - 1);

    if (!splitChild.isLeaf) {
      newChild.children = splitChild.children.splice(node.t, splitChild.children.length - 1);
    }

    node.children.splice(i + 1, 0, newChild);
  }

  insert(key) {
    if (!this.root) {
      this.root = new BTreeNode(this.t, true);
      this.root.keys.push(key);
    } else {
      let current = this.root;

      if (current.keys.length === 2 * this.t - 1) {
        const newNode = new BTreeNode(this.t);
        newNode.children.push(current);
        this.root = newNode;
        this.splitChild(newNode, 0);
        this.insertNonFull(newNode, key);
      } else {
        this.insertNonFull(current, key);
      }
    }
  }

  insertNonFull(node, key) {
    let i = node.keys.length - 1;

    if (node.isLeaf) {
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
        this.splitChild(node, i);

        if (key > node.keys[i]) {
          i++;
        }
      }

      this.insertNonFull(node.children[i], key);
    }
  }

  search(key) {
    return this.searchRecursive(this.root, key);
  }

  searchRecursive(node, key) {
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

    return this.searchRecursive(node.children[i], key);
  }
}

// Usage example
const bTree = new BTree(3);
bTree.insert(10);
bTree.insert(20);
bTree.insert(5);
bTree.insert(6);

console.log(bTree.search(20));
