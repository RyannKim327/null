class BTreeNode {
  constructor(order) {
    this.order = order;
    this.keys = [];
    this.children = [];
    this.isLeaf = true;
  }
}

class BTree {
  constructor(order) {
    this.order = order;
    this.root = new BTreeNode(order);
  }
  
  insert(key) {
    const root = this.root;
    if (root.keys.length === (2 * this.order) - 1) {
      const newRoot = new BTreeNode(this.order);
      this.root = newRoot;
      newRoot.children.push(root);
      this.splitChild(newRoot, 0);
      this.insertNonFull(newRoot, key);
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
      if (node.children[i].keys.length === (2 * this.order) - 1) {
        this.splitChild(node, i);
        if (key > node.keys[i]) {
          i++;
        }
      }
      this.insertNonFull(node.children[i], key);
    }
  }
  
  splitChild(node, i) {
    const order = this.order;
    const child = node.children[i];
    const newNode = new BTreeNode(order);
    node.children.splice(i + 1, 0, newNode);

    node.keys.splice(i, 0, child.keys[order - 1]);

    newNode.keys = child.keys.splice(order, order - 1);
    newNode.children = child.children.splice(order, order);
    
    newNode.isLeaf = child.isLeaf;
  }
  
  search(key, node = this.root) {
    let i = 0;
    while (i < node.keys.length && key > node.keys[i]) {
      i++;
    }
    
    if (node.keys[i] === key) {
      return true;
    }
    
    if (node.isLeaf) {
      return false;
    }
    
    return this.search(key, node.children[i]);
  }
}

// Usage example:
const bTree = new BTree(3);
bTree.insert(10);
bTree.insert(20);
bTree.insert(5);
bTree.insert(15);

console.log(bTree.search(5));    // true
console.log(bTree.search(12));   // false
