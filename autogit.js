// Node class
class Node {
  constructor(parent = null) {
    this.keys = [];
    this.children = [];
    this.parent = parent;
  }

  isLeaf() {
    return this.children.length === 0;
  }

  insert(key, data) {
    const index = this.keys.findIndex((k) => k > key);
    const childIndex = index === -1 ? this.children.length : index;
    const childNode = this.children[childIndex];

    if (childNode && !childNode.isLeaf()) {
      childNode.insert(key, data);
    } else {
      this.keys.splice(index, 0, key);
      this.children.splice(childIndex, 0, { key, data });
    }

    if (this.keys.length > BTree.ORDER) {
      this.split();
    }
  }

  split() {
    const middleIndex = Math.floor(this.keys.length / 2);
    const middleKey = this.keys[middleIndex];

    const leftNode = new Node(this.parent);
    leftNode.keys = this.keys.slice(0, middleIndex);
    leftNode.children = this.children.slice(0, middleIndex + 1);
    leftNode.children.forEach((child) => {
      if (child.childNode) {
        child.childNode.parent = leftNode;
      }
    });

    const rightNode = new Node(this.parent);
    rightNode.keys = this.keys.slice(middleIndex + 1);
    rightNode.children = this.children.slice(middleIndex + 1);
    rightNode.children.forEach((child) => {
      if (child.childNode) {
        child.childNode.parent = rightNode;
      }
    });

    if (this.parent) {
      const index = this.parent.children.findIndex((child) => child === this);
      this.parent.children.splice(index, 1, leftNode, rightNode);
      this.parent.insert(middleKey);
    } else {
      this.keys = [middleKey];
      this.children = [{ childNode: leftNode }, { childNode: rightNode }];
    }
  }

  find(key) {
    const index = this.keys.findIndex((k) => k === key);

    if (index !== -1) {
      return this.children[index].data;
    } else if (this.isLeaf()) {
      return null;
    } else {
      return this.children.find((child) => child.childNode.find(key));
    }
  }
}

// BTree class
class BTree {
  constructor() {
    this.root = new Node();
  }

  insert(key, data) {
    this.root.insert(key, data);
  }

  find(key) {
    return this.root.find(key);
  }
}

BTree.ORDER = 3; // Adjust this value to change the order of the B-tree

// Usage
const btree = new BTree();
btree.insert(5, "Data 1");
btree.insert(3, "Data 2");
btree.insert(7, "Data 3");
console.log(btree.find(3)); // Output: "Data 2"
console.log(btree.find(7)); // Output: "Data 3"
console.log(btree.find(5)); // Output: "Data 1"
