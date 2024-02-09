class BTreeNode {
  constructor(t, leaf = true) {
    this.t = t;
    this.keys = [];
    this.children = [];
    this.leaf = leaf;
  }
}

class BTree {
  constructor(t) {
    this.root = new BTreeNode(t);
    this.t = t;
  }

  insert(key) {
    const rootNode = this.root;
    if (rootNode.keys.length === (2 * this.t) - 1) {
      const newRoot = new BTreeNode(this.t, false);
      this.root = newRoot;
      newRoot.children.push(rootNode);
      this.splitChild(newRoot, 0);
      this.insertNonFull(newRoot, key);
    } else {
      this.insertNonFull(rootNode, key);
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

  splitChild(parent, index) {
    const node = parent.children[index];
    const newNode = new BTreeNode(this.t, node.leaf);
    parent.keys.splice(index, 0, node.keys[this.t - 1]);
    parent.children.splice(index + 1, 0, newNode);

    newNode.keys = node.keys.splice(this.t, node.keys.length - 1);
    if (!node.leaf) {
      newNode.children = node.children.splice(this.t, node.children.length - 1);
    }
  }

  search(node, key) {
    let i = 0;
    while (i < node.keys.length && key > node.keys[i]) {
      i++;
    }

    if (node.keys[i] === key) {
      return true;
    }
    if (node.leaf) {
      return false;
    }
    return this.search(node.children[i], key);
  }

  traverse(node) {
    const result = [];
    for (let i = 0; i < node.keys.length; i++) {
      if (!node.leaf) {
        result.push(...this.traverse(node.children[i]));
      }
      result.push(node.keys[i]);
    }
    if (!node.leaf) {
      result.push(...this.traverse(node.children[node.keys.length]));
    }
    return result;
  }
}

// Example usage:
const btree = new BTree(3);
btree.insert(5);
btree.insert(3);
btree.insert(8);
btree.insert(7);
btree.insert(1);

console.log(btree.search(btree.root, 8)); // Output: true
console.log(btree.search(btree.root, 2)); // Output: false

console.log(btree.traverse(btree.root)); // Output: [1, 3, 5, 7, 8]
