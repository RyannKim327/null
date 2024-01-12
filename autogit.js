class BTreeNode {
  constructor(order, isLeaf) {
    this.keys = [];
    this.children = [];
    this.isLeaf = isLeaf || false;
    this.order = order;
  }
}
class BTree {
  constructor(order) {
    this.root = new BTreeNode(order, true);
    this.order = order;
  }

  insert(key) {
    if (this.root.keys.length === (2 * this.order) - 1) {
      const newNode = new BTreeNode(this.order);
      newNode.children[0] = this.root;
      this.splitChild(newNode, 0);
      this.root = newNode;
      this.insertNonFull(newNode, key);
    } else {
      this.insertNonFull(this.root, key);
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

      if (node.children[i].keys.length === (2 * this.order) - 1) {
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
    const newNode = new BTreeNode(order, child.isLeaf);

    parent.keys.splice(index, 0, child.keys[order - 1]);
    parent.children.splice(index, 0, newNode);

    newNode.keys = child.keys.splice(order, order - 1);

    if (!child.isLeaf) {
      newNode.children = child.children.splice(order, order);
    }
  }

  search(key, node = this.root) {
    let i = 0;
    while (i < node.keys.length && key > node.keys[i]) {
      i++;
    }

    if (node.keys[i] === key) {
      return node;
    } else if (node.isLeaf) {
      return null;
    } else {
      return this.search(key, node.children[i]);
    }
  }
}
const btree = new BTree(3);

btree.insert(10);
btree.insert(20);
btree.insert(5);
btree.insert(6);
btree.insert(12);

console.log(btree.search(6)); // Output: BTreeNode { keys: [ 5, 6, 10, 12 ], children: [], isLeaf: true, order: 3 }
console.log(btree.search(15)); // Output: null
