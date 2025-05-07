class BTreeNode {
  keys: number[];             // The keys in the node
  children: BTreeNode[];      // Child pointers
  leaf: boolean;              // Is true if node is leaf
  t: number;                  // Minimum degree

  constructor(t: number, leaf: boolean) {
    this.t = t;
    this.leaf = leaf;
    this.keys = [];
    this.children = [];
  }

  // Insert a key to a non-full node
  insertNonFull(key: number) {
    let i = this.keys.length - 1;

    if (this.leaf) {
      // Insert into this leaf node at the correct position
      while (i >= 0 && key < this.keys[i]) {
        i--;
      }
      this.keys.splice(i + 1, 0, key);
    } else {
      // Find child to recurse on
      while (i >= 0 && key < this.keys[i]) {
        i--;
      }
      i++;
      if (this.children[i].keys.length === 2 * this.t - 1) {
        this.splitChild(i);

        if (key > this.keys[i]) {
          i++;
        }
      }
      this.children[i].insertNonFull(key);
    }
  }

  // Split child y at index i
  splitChild(i: number) {
    const y = this.children[i];
    const z = new BTreeNode(y.t, y.leaf);
    z.keys = y.keys.splice(this.t); // right half keys
    if (!y.leaf) {
      z.children = y.children.splice(this.t); // right half children
    }
    const midKey = y.keys.pop()!; // middle key moves up to this node

    // Insert child and key to current node
    this.keys.splice(i, 0, midKey);
    this.children.splice(i + 1, 0, z);
  }

  // A utility function to traverse the subtree rooted with this node
  traverse() {
    let i;
    for (i = 0; i < this.keys.length; i++) {
      if (!this.leaf) {
        this.children[i].traverse();
      }
      console.log(this.keys[i]);
    }
    if (!this.leaf) {
      this.children[i].traverse();
    }
  }
}

class BTree {
  root: BTreeNode | null;
  t: number;

  constructor(t: number) {
    this.root = null;
    this.t = t;
  }

  insert(key: number) {
    if (this.root === null) {
      this.root = new BTreeNode(this.t, true);
      this.root.keys.push(key);
    } else {
      if (this.root.keys.length === 2 * this.t - 1) {
        const s = new BTreeNode(this.t, false);
        s.children.push(this.root);
        s.splitChild(0);

        let i = 0;
        if (s.keys[0] < key) {
          i++;
        }
        s.children[i].insertNonFull(key);

        this.root = s;
      } else {
        this.root.insertNonFull(key);
      }
    }
  }

  traverse() {
    if (this.root !== null) {
      this.root.traverse();
    }
  }
}
const btree = new BTree(3); // B-tree of minimum degree 3

const keys = [10, 20, 5, 6, 12, 30, 7, 17];

for (const key of keys) {
  btree.insert(key);
}

btree.traverse();  // Prints keys in sorted order
