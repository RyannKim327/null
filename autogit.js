class BTreeNode {
  constructor(t, leaf) {
    this.keys = [];
    this.children = [];
    this.isLeaf = leaf || false;
    this.degree = t || 2;
  }
}

class BTree {
  constructor(t) {
    this.root = new BTreeNode(t, true);
    this.degree = t || 2;
  }

  insert(key) {
    const root = this.root;
    if (root.keys.length === (2 * this.degree) - 1) {
      const temp = new BTreeNode(this.degree);
      this.root = temp;
      temp.children[0] = root;
      this.splitChild(temp, 0);
      this.insertNonFull(temp, key);
    } else {
      this.insertNonFull(root, key);
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
    const newChild = new BTreeNode(degree, child.isLeaf);

    parent.keys.splice(index, 0, child.keys[degree - 1]);
    parent.children.splice(index + 1, 0, newChild);

    newChild.keys = child.keys.splice(degree, child.keys.length);
    if (!child.isLeaf) {
      newChild.children = child.children.splice(degree, child.children.length);
    }
  }
}
const bTree = new BTree(3); // Create a B-tree of order 3

bTree.insert(7);
bTree.insert(3);
bTree.insert(10);
bTree.insert(5);
bTree.insert(1);

console.log(bTree.root); // Outputs the root node of the B-tree
