class BTreeNode<T> {
  keys: T[];
  children: BTreeNode<T>[];
  leaf: boolean;
  t: number; // minimum degree

  constructor(t: number, leaf: boolean) {
    this.t = t;
    this.leaf = leaf;
    this.keys = [];
    this.children = [];
  }

  // Search key k in subtree rooted with this node
  search(k: T, compare: (a: T, b: T) => number): BTreeNode<T> | null {
    // Find the first key greater than or equal to k
    let i = 0;
    while (i < this.keys.length && compare(k, this.keys[i]) > 0) {
      i++;
    }

    // If found key is equal to k return this node
    if (i < this.keys.length && compare(k, this.keys[i]) === 0) {
      return this;
    }

    // If leaf node, key not found
    if (this.leaf) {
      return null;
    }

    // Else go to the child
    return this.children[i].search(k, compare);
  }

  // Insert a new key in non-full node
  insertNonFull(k: T, compare: (a: T, b: T) => number): void {
    let i = this.keys.length - 1;

    if (this.leaf) {
      // Insert the new key into the correct location in keys[]
      while (i >= 0 && compare(k, this.keys[i]) < 0) {
        i--;
      }
      this.keys.splice(i + 1, 0, k);
    } else {
      // Find the child which will have the new key
      while (i >= 0 && compare(k, this.keys[i]) < 0) {
        i--;
      }
      i++;
      // If the child is full, split it
      if (this.children[i].keys.length === 2 * this.t - 1) {
        this.splitChild(i);

        // After split, check which child to go
        if (compare(k, this.keys[i]) > 0) {
          i++;
        }
      }
      this.children[i].insertNonFull(k, compare);
    }
  }

  // Split the child y of this node at index i
  splitChild(i: number) {
    const y = this.children[i];
    const t = this.t;

    const z = new BTreeNode<T>(t, y.leaf);

    // z will have t-1 keys
    z.keys = y.keys.splice(t, t - 1);

    if (!y.leaf) {
      z.children = y.children.splice(t, t);
    }

    // Insert the middle key to this node
    const midKey = y.keys.splice(t - 1, 1)[0];
    this.keys.splice(i, 0, midKey);

    // Insert new child to children array
    this.children.splice(i + 1, 0, z);
  }
}

class BTree<T> {
  root: BTreeNode<T>;
  t: number;
  compare: (a: T, b: T) => number;

  constructor(t: number, compareFn: (a: T, b: T) => number) {
    this.t = t;
    this.root = new BTreeNode<T>(t, true);
    this.compare = compareFn;
  }

  search(k: T): BTreeNode<T> | null {
    return this.root.search(k, this.compare);
  }

  insert(k: T) {
    const r = this.root;
    if (r.keys.length === 2 * this.t - 1) {
      // Tree is full, need new root
      const s = new BTreeNode<T>(this.t, false);
      s.children.push(r);
      s.splitChild(0);

      let i = 0;
      if (this.compare(k, s.keys[0]) > 0) {
        i++;
      }
      s.children[i].insertNonFull(k, this.compare);
      this.root = s;
    } else {
      r.insertNonFull(k, this.compare);
    }
  }

  // Additional methods like delete, traversal etc. can be added here.
}
const compareNumbers = (a: number, b: number) => a - b;

const btree = new BTree<number>(3, compareNumbers); // t=3 minimum degree

btree.insert(10);
btree.insert(20);
btree.insert(5);
btree.insert(6);
btree.insert(12);
btree.insert(30);
btree.insert(7);
btree.insert(17);

const node = btree.search(6);
if (node) {
  console.log("Found 6 in node keys:", node.keys);
} else {
  console.log("6 not found");
}
