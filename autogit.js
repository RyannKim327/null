class BTreeNode {
  constructor(t, leaf = true) {
    this.t = t;  // Minimum degree (defines the range for number of keys)
    this.keys = []; // An array of keys
    this.children = []; // An array of child pointers
    this.leaf = leaf; // Is true when node is leaf, false otherwise
  }

  // Traverse the subtree rooted with this node
  traverse() {
    let i;
    const n = this.keys.length;

    // Traverse through all keys and recursively traverse children
    for (i = 0; i < n; i++) {
      // If this is not a leaf, then before printing key[i],
      // traverse the subtree rooted with child C[i].
      if (!this.leaf) {
        this.children[i].traverse();
      }
      console.log(this.keys[i]);
    }

    // Print the subtree rooted with last child
    if (!this.leaf) {
      this.children[i].traverse();
    }
  }

  // Search key k in subtree rooted with this node
  search(k) {
    let i = 0;
    const n = this.keys.length;

    // Find the first key greater than or equal to k
    while (i < n && k > this.keys[i]) {
      i++;
    }

    // If found, return the current node
    if (this.keys[i] === k) {
      return this;
    }

    // If the key is not found here and this is a leaf node
    if (this.leaf) {
      return null;
    }

    // Go to the appropriate child
    return this.children[i].search(k);
  }

  // Insert a new key
  insertNonFull(k) {
    let i = this.keys.length - 1;

    // If this is a leaf node
    if (this.leaf) {
      // Find the location of the new key to be inserted and shift all greater keys to the right
      while (i >= 0 && this.keys[i] > k) {
        this.keys[i + 1] = this.keys[i];
        i--;
      }

      // Insert the new key at the found location
      this.keys[i + 1] = k;
    } else {
      // If this node is not a leaf, find the child which is going to have the new key
      while (i >= 0 && this.keys[i] > k) {
        i--;
      }

      // Check if the found child is full
      if (this.children[i + 1].keys.length === (2 * this.t - 1)) {
        // Split the child if it is full
        this.splitChild(i + 1, this.children[i + 1]);

        // After the split, the middle key of C[i] goes up and C[i] is split into two.
        // See if the middle key of C[i] is going to be the new key or the child pointed by the rightmost key of C[i].
        if (this.keys[i + 1] < k) {
          i++;
        }
      }
      this.children[i + 1].insertNonFull(k);
    }
  }

  // Split the child node
  splitChild(i, y) {
    const z = new BTreeNode(y.t, y.leaf);
    this.children.splice(i + 1, 0, z);
    this.keys.splice(i, 0, y.keys[y.keys.length - 1]);

    // Copy the last (t-1) keys of y to z
    z.keys = y.keys.splice(y.t, y.keys.length);

    // Copy the last t children of y to z
    if (!y.leaf) {
      z.children = y.children.splice(y.t, y.children.length);
    }
  }
}

class BTree {
  constructor(t) {
    this.root = new BTreeNode(t, true);
    this.t = t; // Minimum degree (defines the range for number of keys)
  }

  // Insert a key
  insert(k) {
    const root = this.root;

    // If the root is full, then split it and make the new key as the root
    if (root.keys.length === (2 * this.t - 1)) {
      const newRoot = new BTreeNode(this.t, false);

      newRoot.children.push(root);
      newRoot.splitChild(0, root);

      let i = 0;
      if (newRoot.keys[0] < k) {
        i++;
      }
      newRoot.children[i].insertNonFull(k);

      this.root = newRoot;
    } else {
      root.insertNonFull(k);
    }
  }

  // Search for a key
  search(k) {
    return this.root.search(k);
  }

  // Traverse the tree
  traverse() {
    this.root.traverse();
  }
}
const btree = new BTree(3); // Create a B-tree with a minimum degree of 3

btree.insert(10);
btree.insert(20);
btree.insert(5);
btree.insert(6);
btree.insert(12);
btree.insert(30);

console.log("B-tree traversal:");
btree.traverse();

const key = 6;
if (btree.search(key)) {
  console.log(`Key ${key} found.`);
} else {
  console.log(`Key ${key} not found.`);
}
B-tree traversal:
5
6
10
12
20
30
Key 6 found.
