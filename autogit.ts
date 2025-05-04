class BTreeNode<T> {
  keys: T[];
  children: BTreeNode<T>[];
  leaf: boolean;
  t: number; // Minimum degree

  constructor(t: number, leaf: boolean) {
    this.t = t;
    this.leaf = leaf;
    this.keys = [];
    this.children = [];
  }

  // Find the key index or the child to follow
  findKey(key: T, compare: (a: T, b: T) => number): number {
    let idx = 0;
    while (idx < this.keys.length && compare(this.keys[idx], key) < 0) {
      idx++;
    }
    return idx;
  }

  // Insert key into subtree rooted with this node assuming it's not full
  insertNonFull(key: T, compare: (a: T, b: T) => number) {
    let i = this.keys.length - 1;

    if (this.leaf) {
      // Insert into leaf node
      this.keys.push(key); // temporary place at the end
      // Move key to the correct position to keep keys sorted
      while (i >= 0 && compare(this.keys[i], key) > 0) {
        this.keys[i+1] = this.keys[i];
        i--;
      }
      this.keys[i+1] = key;
    } else {
      // Node is not leaf, find child to insert into
      while (i >= 0 && compare(this.keys[i], key) > 0) {
        i--;
      }
      i++;

      if (this.children[i].keys.length == 2*this.t - 1) {
        this.splitChild(i);

        if (compare(this.keys[i], key) < 0) {
          i++;
        }
      }

      this.children[i].insertNonFull(key, compare);
    }
  }

  // Split child y of this node. y must be full when this is called
  splitChild(i: number) {
    let y = this.children[i];
    let t = this.t;
    let z = new BTreeNode<T>(t, y.leaf);
    // z gets t-1 keys from y
    z.keys = y.keys.splice(t); // last t-1 keys moved to z

    if (!y.leaf) {
      z.children = y.children.splice(t); // last t children to z
    }

    // Insert z as child of this node
    this.children.splice(i + 1, 0, z);
    // Move median key up to this node
    let median = y.keys.pop()!;  // y.keys now t-1 keys remain
    this.keys.splice(i, 0, median);
  }

  // Search key in subtree rooted with this node
  search(key: T, compare: (a: T, b: T) => number): BTreeNode<T> | null {
    let i = 0;
    while (i < this.keys.length && compare(key, this.keys[i]) > 0) {
      i++;
    }

    if (i < this.keys.length && compare(key, this.keys[i]) === 0) {
      return this;  // found key in this node
    }

    if (this.leaf) {
      return null; // not found and leaf node
    }

    return this.children[i].search(key, compare);
  }
}

export class BTree<T> {
  root: BTreeNode<T>;
  t: number;  // Minimum degree
  compare: (a: T, b: T) => number;

  constructor(t: number, compare: (a: T, b: T) => number) {
    this.t = t;
    this.compare = compare;
    this.root = new BTreeNode<T>(t, true);
  }

  search(key: T): BTreeNode<T> | null {
    return this.root ? this.root.search(key, this.compare) : null;
  }

  insert(key: T) {
    let r = this.root;
    if (r.keys.length == 2 * this.t - 1) {
      // Root is full, tree grows in height
      let s = new BTreeNode<T>(this.t, false);
      s.children.push(r);
      s.splitChild(0);

      let i = 0;
      if (this.compare(s.keys[0], key) < 0) {
        i++;
      }
      s.children[i].insertNonFull(key, this.compare);
      this.root = s;
    } else {
      r.insertNonFull(key, this.compare);
    }
  }
}
let btree = new BTree<number>(3, (a, b) => a - b);

btree.insert(10);
btree.insert(20);
btree.insert(5);
btree.insert(6);
btree.insert(12);
btree.insert(30);
btree.insert(7);
btree.insert(17);

console.log(btree.search(6)); // Node containing key 6 or null
console.log(btree.search(15)); // null, key not present
