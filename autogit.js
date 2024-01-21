class BTreeNode {
  constructor(isLeaf) {
    this.keys = [];
    this.children = [];
    this.isLeaf = isLeaf;
  }
}
class BTree {
  constructor(degree) {
    this.root = null;
    this.degree = degree;
  }
}
class BTree {
  // ...

  insert(key) {
    if (!this.root) {
      this.root = new BTreeNode(true);
      this.root.keys.push(key);
    } else {
      if (this.root.keys.length === (2 * this.degree) - 1) {
        const newRoot = new BTreeNode(false);
        newRoot.children.push(this.root);
        this.root = newRoot;
        this.splitChild(this.root, 0);
      }

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

      if (node.children[i].keys.length === (2 * this.degree) - 1) {
        this.splitChild(node, i);

        if (key > node.keys[i]) {
          i++;
        }
      }

      this.insertNonFull(node.children[i], key);
    }
  }

  splitChild(parent, index) {
    const degree = this.degree;
    const child = parent.children[index];

    const newChild = new BTreeNode(child.isLeaf);
    parent.keys.splice(index, 0, child.keys[degree - 1]);
    parent.children.splice(index + 1, 0, newChild);

    newChild.keys = child.keys.splice(degree, degree - 1);
    newChild.children = child.children.splice(degree, degree);
  }
}
const btree = new BTree(3);
btree.insert(10);
btree.insert(20);
btree.insert(5);
btree.insert(15);
btree.insert(25);
