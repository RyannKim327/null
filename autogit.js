class Node {
  constructor(order) {
    this.order = order;
    this.keys = [];
    this.children = [];
    this.isLeaf = true;
  }

  insert(key) {
    let i = 0;
    while (i < this.keys.length && this.keys[i] < key) {
      i++;
    }

    if (this.isLeaf) {
      this.keys.splice(i, 0, key);
    } else {
      this.children[i].insert(key);
    }

    if (this.keys.length > this.order) {
      this.split();
    }
  }

  split() {
    const mid = Math.floor(this.keys.length / 2);
    const median = this.keys[mid];

    const left = new Node(this.order);
    left.keys = this.keys.slice(0, mid);
    left.children = this.children.slice(0, mid + 1);

    const right = new Node(this.order);
    right.keys = this.keys.slice(mid + 1);
    right.children = this.children.slice(mid + 1);

    this.keys = [median];
    this.children = [left, right];
    this.isLeaf = false;
  }

  search(key) {
    let i = 0;
    while (i < this.keys.length && key > this.keys[i]) {
      i++;
    }

    if (this.keys[i] === key) {
      return true;
    }

    if (this.isLeaf) {
      return false;
    }

    return this.children[i].search(key);
  }
}

class BTree {
  constructor(order) {
    this.order = order;
    this.root = new Node(order);
  }

  insert(key) {
    this.root.insert(key);
  }

  search(key) {
    return this.root.search(key);
  }
}
const bTree = new BTree(3); // Create a B-tree with order 3
bTree.insert(5); // Insert elements
bTree.insert(10);
bTree.insert(3);

console.log(bTree.search(10)); // Search for an element
console.log(bTree.search(7));
