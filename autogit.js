class BTreeNode {
  constructor(order, isLeaf) {
    this.order = order;
    this.keys = [];
    this.child = [];
    this.isLeaf = isLeaf;
    this.size = 0;
  }
}
class BTree {
  constructor(order) {
    this.root = new BTreeNode(order, true);
    this.order = order;
  }

  // Method to search for a key in the tree
  search(key) {
    return this._searchRecursive(this.root, key);
  }

  _searchRecursive(node, key) {
    let i = 0;
    while (i < node.size && key > node.keys[i]) {
      i++;
    }
    if (node.keys[i] === key) {
      return true;
    }
    if (node.isLeaf) {
      return false;
    }
    return this._searchRecursive(node.child[i], key);
  }

  // Method to insert a key into the tree
  insert(key) {
    const root = this.root;
    if (root.size === (2 * this.order) - 1) {
      const newRoot = new BTreeNode(this.order, false);
      newRoot.child[0] = root;
      this.root = newRoot;
      this._splitChild(newRoot, 0);
      this._insertNonFull(newRoot, key);
    } else {
      this._insertNonFull(root, key);
    }
  }

  _insertNonFull(node, key) {
    let i = node.size - 1;
    if (node.isLeaf) {
      while (i >= 0 && node.keys[i] > key) {
        node.keys[i + 1] = node.keys[i];
        i--;
      }
      node.keys[i + 1] = key;
      node.size++;
    } else {
      while (i >= 0 && node.keys[i] > key) {
        i--;
      }
      i++;
      if (node.child[i].size === (2 * this.order) - 1) {
        this._splitChild(node, i);
        if (node.keys[i] < key) {
          i++;
        }
      }
      this._insertNonFull(node.child[i], key);
    }
  }

  _splitChild(parent, i) {
    const order = this.order;
    const child = parent.child[i];
    const newNode = new BTreeNode(order, child.isLeaf);
    parent.keys.splice(i, 0, child.keys[order - 1]);
    parent.child.splice(i + 1, 0, newNode);
    parent.size++;

    newNode.keys = child.keys.splice(order, order - 1);
    newNode.child = child.child.splice(order, order);
    newNode.size = order - 1;
  }
}
const bTree = new BTree(3); // Create a B-tree of order 3

bTree.insert(5); // Insert elements into the tree
bTree.insert(9);
bTree.insert(2);

console.log(bTree.search(5)); // Search for a key in the tree (return true if found)
console.log(bTree.search(8));

bTree.insert(8);

console.log(bTree.search(8));
console.log(bTree.search(10));
