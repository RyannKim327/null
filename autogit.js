class BTreeNode {
  constructor(order) {
    this.order = order; // Maximum number of children (suggested value: odd number)
    this.keys = [];     // Array to store keys
    this.children = []; // Array to store child nodes
    this.isLeaf = true; // Flag to determine if the node is a leaf
  }

  // Find the index of the first key greater than or equal to the given key
  findIndex(key) {
    let pos = 0;
    while (pos < this.keys.length && this.keys[pos] < key) {
      pos++;
    }
    return pos;
  }

  // Insert key into the node
  insertNonFull(key) {
    let pos = this.findIndex(key);

    if (this.isLeaf) {
      this.keys.splice(pos, 0, key);
    } else {
      if (this.children[pos].keys.length === (2 * this.order - 1)) {
        this.splitChild(pos);

        if (key > this.keys[pos]) {
          pos++;
        }
      }

      this.children[pos].insertNonFull(key);
    }
  }

  // Split the child node at the specified index
  splitChild(index) {
    const child = this.children[index];
    const newChild = new BTreeNode(this.order);

    this.keys.splice(index, 0, child.keys[this.order - 1]);
    this.children.splice(index + 1, 0, newChild);

    newChild.keys = child.keys.splice(this.order, this.order - 1);

    if (!child.isLeaf) {
      newChild.isLeaf = false;
      newChild.children = child.children.splice(this.order, this.order);
    }
  }

  // Search for a key in the node
  search(key) {
    let pos = this.findIndex(key);

    if (this.keys[pos] === key) {
      return true;
    }

    if (this.isLeaf) {
      return false;
    }

    return this.children[pos].search(key);
  }
}

class BTree {
  constructor(order) {
    this.order = order; // Maximum number of children in each node
    this.root = new BTreeNode(order);
  }

  insert(key) {
    if (this.root.keys.length === (2 * this.order - 1)) {
      const newRoot = new BTreeNode(this.order);
      newRoot.children.push(this.root);
      newRoot.isLeaf = false;
      this.root = newRoot;
      newRoot.splitChild(0);
    }
    this.root.insertNonFull(key);
  }

  search(key) {
    return this.root.search(key);
  }
}
const bTree = new BTree(3); // Create a B-tree with order 3
bTree.insert(10);
bTree.insert(20);
bTree.insert(5);

console.log(bTree.search(20)); // Outputs: true
console.log(bTree.search(15)); // Outputs: false
