class Node {
  constructor() {
    this.keys = [];
    this.children = [];
    this.isLeaf = true;
  }
}

class BTree {
  constructor(order) {
    this.root = new Node();
    this.order = order;
  }

  search(key, node = this.root) {
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

    return this.search(key, node.children[i]);
  }

  insert(key) {
    const node = this.root;
    if (node.keys.includes(key)) {
      return;
    }

    if (node.keys.length === 2 * this.order - 1) {
      const newRoot = new Node();
      this.root = newRoot;
      newRoot.children.push(node);
      this.splitChild(newRoot, 0);
      this.insertNonFull(newRoot, key);
    } else {
      this.insertNonFull(node, key);
    }
  }

  splitChild(parent, index) {
    const node = parent.children[index];
    const newChild = new Node();
    parent.keys.splice(index, 0, node.keys[this.order - 1]);
    parent.children.splice(index + 1, 0, newChild);
    newChild.keys = node.keys.splice(this.order, this.order - 1);
    newChild.isLeaf = node.isLeaf;

    if (!newChild.isLeaf) {
      newChild.children = node.children.splice(this.order, this.order);
    }
  }

  insertNonFull(node, key) {
    let i = node.keys.length - 1;

    if (node.isLeaf) {
      node.keys.push('');
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
      if (node.children[i].keys.length === 2 * this.order - 1) {
        this.splitChild(node, i);
        if (key > node.keys[i]) {
          i++;
        }
      }
      this.insertNonFull(node.children[i], key);
    }
  }

  delete(key) {
    const node = this.search(key);
    if (!node) {
      return;
    }

    const index = node.keys.indexOf(key);
    if (node.isLeaf) {
      node.keys.splice(index, 1);
    } else {
      const predecessor = node.children[index];
      if (predecessor.keys.length >= this.order) {
        const max = this.findMax(predecessor);
        this.delete(max);
        node.keys[index] = max;
      } else {
        const successor = node.children[index + 1];
        if (successor.keys.length >= this.order) {
          const min = this.findMin(successor);
          this.delete(min);
          node.keys[index] = min;
        } else {
          predecessor.keys.push(node.keys.splice(index, 1)[0]);
          predecessor.keys = predecessor.keys.concat(successor.keys);
          predecessor.children = predecessor.children.concat(successor.children);
          if (node === this.root && node.keys.length === 0) {
            this.root = predecessor;
          }
          node.children.splice(index + 1, 1);
          this.delete(key);
        }
      }
    }
  }

  findMin(node) {
    if (node.isLeaf) {
      return node.keys[0];
    }
    return this.findMin(node.children[0]);
  }

  findMax(node) {
    if (node.isLeaf) {
      return node.keys[node.keys.length - 1];
    }
    return this.findMax(node.children[node.children.length - 1]);
  }

  traverse() {
    this.traverseNode(this.root);
  }

  traverseNode(node) {
    const length = node.keys.length;
    let i;

    for (i = 0; i < length; i++) {
      if (node.isLeaf === false) {
        this.traverseNode(node.children[i]);
      }

      console.log(node.keys[i]);
    }

    if (node.isLeaf === false) {
      this.traverseNode(node.children[i]);
    }
  }
}

// Usage
const bTree = new BTree(3);
bTree.insert(10);
bTree.insert(20);
bTree.insert(30);
bTree.insert(40);
bTree.insert(50);
bTree.insert(60);
bTree.insert(70);

console.log('Traversal:');
bTree.traverse();

console.log('Deleting 40...');
bTree.delete(40);

console.log('Traversal after deletion:');
bTree.traverse();
