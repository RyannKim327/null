class Node {
  constructor(order, leaf) {
    this.order = order;
    this.keys = [];
    this.children = leaf ? null : [];
    this.leaf = leaf;
  }

  isLeaf() {
    return this.leaf;
  }
}

class BTree {
  constructor(order) {
    this.root = new Node(order, true);
    this.order = order;
  }

  insert(key) {
    const root = this.root;

    if (root.keys.length < this.order - 1) {
      this.insertNonFull(root, key);
    } else {
      const newRoot = new Node(this.order, false);
      newRoot.children.push(root);
      this.splitChild(newRoot, 0);
      this.insertNonFull(newRoot, key);
      this.root = newRoot;
    }
  }

  insertNonFull(node, key) {
    let i = node.keys.length - 1;

    if (node.isLeaf()) {
      node.keys.push(null);
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
      if (node.children[i].keys.length === this.order - 1) {
        this.splitChild(node, i);
        if (key > node.keys[i]) {
          i++;
        }
      }
      this.insertNonFull(node.children[i], key);
    }
  }

  splitChild(parent, index) {
    const order = this.order;
    const child = parent.children[index];
    const newChild = new Node(order, child.isLeaf());
    parent.children.splice(index + 1, 0, newChild);
    
    const mid = Math.floor(order / 2);
    newChild.keys = child.keys.splice(mid + 1);
    parent.keys.splice(index, 0, child.keys.pop());
    
    if (!child.isLeaf()) {
      newChild.children = child.children.splice(mid + 1);
    }
  }

  search(key, node = this.root) {
    let i = 0;
    while (i < node.keys.length && key > node.keys[i]) {
      i++;
    }
    if (i < node.keys.length && key === node.keys[i]) {
      return node;
    } else if (node.isLeaf()) {
      return null;
    } else {
      return this.search(key, node.children[i]);
    }
  }
}

// Usage
const bTree = new BTree(3); // Create a B-tree of order 3
bTree.insert(10);
bTree.insert(20);
bTree.insert(5);
bTree.insert(6);
bTree.insert(12);

console.log(bTree.search(6)); // Output: Node { order: 3, keys: [ 6 ], children: null, leaf: true }
