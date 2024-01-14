class BTreeNode {
  constructor(t, leaf) {
    this.keys = [];
    this.children = [];
    this.leaf = leaf || true;
    this.degree = t;
  }
}

class BTree {
  constructor(t) {
    this.root = null;
    this.degree = t;
  }

  insert(key) {
    if (this.root == null) {
      this.root = new BTreeNode(this.degree, true);
      this.root.keys.push(key);
    } else {
      if (this.root.keys.length === 2 * this.degree - 1) {
        const newNode = new BTreeNode(this.degree, false);
        newNode.children.push(this.root);
        this.splitChild(newNode, 0, this.root);

        let i = 0;
        if (newNode.keys[0] < key) {
          i++;
        }
        this.insertNonFull(newNode.children[i], key);
        this.root = newNode;
      } else {
        this.insertNonFull(this.root, key);
      }
    }
  }

  insertNonFull(node, key) {
    let i = node.keys.length - 1;
    if (node.leaf) {
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
      if (node.children[i].keys.length === 2 * this.degree - 1) {
        this.splitChild(node, i, node.children[i]);
        if (node.keys[i] < key) {
          i++;
        }
      }
      this.insertNonFull(node.children[i], key);
    }
  }

  splitChild(parent, index, node) {
    const newNode = new BTreeNode(this.degree, node.leaf);
    parent.keys.splice(index, 0, node.keys[this.degree - 1]);
    parent.children.splice(index + 1, 0, newNode);

    newNode.keys = node.keys.splice(this.degree, this.degree - 1);
    if (!node.leaf) {
      newNode.children = node.children.splice(this.degree, this.degree);
    }
  }

  search(key) {
    if (this.root) {
      return this.searchKey(this.root, key);
    }
    return false;
  }

  searchKey(node, key) {
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

    return this.searchKey(node.children[i], key);
  }
}

// Example usage
const bTree = new BTree(3); // t = 3, where t is the minimum degree

bTree.insert(10);
bTree.insert(20);
bTree.insert(30);

console.log(bTree.search(20)); // Output: true
console.log(bTree.search(40)); // Output: false
