class BTreeNode {
  constructor(leaf = true) {
    this.keys = [];
    this.children = [];
    this.leaf = leaf;
  }

  isFull(order) {
    return this.keys.length === 2 * order - 1;
  }
}
class BTree {
  constructor(order) {
    this.root = new BTreeNode(true);
    this.order = order;
  }

  insert(key) {
    const root = this.root;
    if (root.isFull(this.order)) {
      const newNode = new BTreeNode(false);
      newNode.children.push(root);
      this.root = newNode;
      this.splitChild(newNode, 0);
      this.insertNonFull(newNode, key);
    } else {
      this.insertNonFull(root, key);
    }
  }

  insertNonFull(node, key) {
    let i = node.keys.length - 1;
    if (node.leaf) {
      while (i >= 0 && key < node.keys[i]) {
        i--;
      }
      node.keys.splice(i + 1, 0, key);
    } else {
      while (i >= 0 && key < node.keys[i]) {
        i--;
      }
      i++;
      if (node.children[i].isFull(this.order)) {
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
    const newNode = new BTreeNode(child.leaf);

    parent.keys.splice(index, 0, child.keys[order - 1]);

    newNode.keys = child.keys.splice(order, order - 1);

    if (!child.leaf) {
      newNode.children = child.children.splice(order, order);
    }

    parent.children.splice(index + 1, 0, newNode);
  }
}
const bTree = new BTree(3); // Create a B-tree of order 3

bTree.insert(10);
bTree.insert(20);
bTree.insert(5);
bTree.insert(6);

console.log(bTree.root); // Prints the root node of the B-tree
