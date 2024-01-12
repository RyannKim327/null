class BTreeNode {
  constructor(order) {
    this.order = order; // Maximum number of children
    this.keys = []; // Array of keys stored in the node
    this.children = []; // Array of child nodes
    this.isLeaf = true; // Indicates if the node is a leaf
  }
}

class BTree {
  constructor(order) {
    this.root = new BTreeNode(order);
  }

  insert(key) {
    const node = this.root;

    if (node.keys.includes(key)) {
      console.log('Key already exists');
      return;
    }

    if (node.keys.length === 2 * node.order - 1) {
      const newNode = new BTreeNode(node.order);
      this.root = newNode;
      newNode.children.push(node);
      this.splitChild(newNode, 0);
      this.insertNonFull(newNode, key);
    } else {
      this.insertNonFull(node, key);
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

      if (node.children[i].keys.length === 2 * node.order - 1) {
        this.splitChild(node, i);

        if (key > node.keys[i]) {
          i++;
        }
      }

      this.insertNonFull(node.children[i], key);
    }
  }

  splitChild(node, index) {
    const y = node.children[index];
    const newChild = new BTreeNode(y.order);
    node.children.splice(index + 1, 0, newChild);
    node.keys.splice(index, 0, y.keys[y.keys.length - 1]);

    newChild.isLeaf = y.isLeaf;
    const keysToMove = y.keys.splice(y.order, y.keys.length);
    newChild.keys = keysToMove;

    if (!y.isLeaf) {
      const childrenToMove = y.children.splice(y.order, y.children.length);
      newChild.children = childrenToMove;
    }
  }
}
const bTree = new BTree(3); // Create a B-tree with order 3

bTree.insert(10);
bTree.insert(5);
bTree.insert(15);
bTree.insert(20);
bTree.insert(12);
