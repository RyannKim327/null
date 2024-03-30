class Node {
  constructor(order, leaf = true) {
    this.order = order;
    this.leaf = leaf;
    this.keys = [];
    this.children = [];
  }

  insertNonFull(key) {
    let i = this.keys.length - 1;
  
    if (this.leaf) {
      while (i >= 0 && key < this.keys[i]) {
        this.keys[i + 1] = this.keys[i];
        i--;
      }
      this.keys[i + 1] = key;
    } else {
      while (i >= 0 && key < this.keys[i]) {
        i--;
      }
      let child = this.children[i + 1];
      if (child.keys.length === 2 * this.order - 1) {
        this.splitChild(i + 1, child);
        if (key > this.keys[i + 1]) {
          i++;
        }
      }
      this.children[i + 1].insertNonFull(key);
    }
  }

  splitChild(i, child) {
    let newChild = new Node(child.order, child.leaf);
    newChild.keys = child.keys.splice(this.order);
    if (!child.leaf) {
      newChild.children = child.children.splice(this.order + 1);
    }
    this.keys.splice(i, 0, child.keys.pop());
    this.children.splice(i + 1, 0, newChild);
  }
}

class BTree {
  constructor(order) {
    this.root = new Node(order);
  }

  insert(key) {
    let root = this.root;
    
    if (root.keys.length === 2 * root.order - 1) {
      let newRoot = new Node(root.order, false);
      newRoot.children.push(root);
      newRoot.splitChild(0, root);
      newRoot.insertNonFull(key);
      this.root = newRoot;
    } else {
      root.insertNonFull(key);
    }
  }
}
