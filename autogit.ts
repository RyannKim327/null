class BTreeNode<T> {
  keys: T[] = [];
  children: BTreeNode<T>[] = [];
  leaf: boolean;
  t: number; // minimum degree

  constructor(t: number, leaf: boolean) {
    this.t = t;
    this.leaf = leaf;
  }

  // Find the index of the first key >= k
  findKey(k: T, compare: (a: T, b: T) => number): number {
    let idx = 0;
    while (idx < this.keys.length && compare(this.keys[idx], k) < 0) {
      idx++;
    }
    return idx;
  }
}
search(k: T, compare: (a: T, b: T) => number): BTreeNode<T> | null {
  let i = 0;
  while (i < this.keys.length && compare(k, this.keys[i]) > 0) {
    i++;
  }

  if (i < this.keys.length && compare(this.keys[i], k) === 0) {
    return this;
  }

  if (this.leaf) {
    return null;
  }

  return this.children[i].search(k, compare);
}
splitChild(i: number, y: BTreeNode<T>) {
  let t = this.t;
  let z = new BTreeNode<T>(t, y.leaf);

  // z takes the last t - 1 keys from y
  z.keys = y.keys.splice(t, t - 1);
  
  // If not leaf, move the last t children from y to z
  if (!y.leaf) {
    z.children = y.children.splice(t, t);
  }

  // Insert new child z
  this.children.splice(i + 1, 0, z);

  // Move middle key of y up to this node
  this.keys.splice(i, 0, y.keys.splice(t - 1, 1)[0]);
}
insertNonFull(k: T, compare: (a: T, b: T) => number) {
  let i = this.keys.length - 1;

  if (this.leaf) {
    // Insert the new key at the correct position
    while (i >= 0 && compare(this.keys[i], k) > 0) {
      i--;
    }
    this.keys.splice(i + 1, 0, k);
  } else {
    // Find the child which is going to have the new key
    while (i >= 0 && compare(this.keys[i], k) > 0) {
      i--;
    }
    i++;

    // Split the child if it is full
    if (this.children[i].keys.length === 2 * this.t - 1) {
      this.splitChild(i, this.children[i]);

      if (compare(this.keys[i], k) < 0) {
        i++;
      }
    }
    this.children[i].insertNonFull(k, compare);
  }
}
class BTree<T> {
  root: BTreeNode<T>;
  t: number;
  compare: (a: T, b: T) => number;

  constructor(t: number, compare: (a: T, b: T) => number) {
    this.root = new BTreeNode<T>(t, true);
    this.t = t;
    this.compare = compare;
  }

  search(k: T): BTreeNode<T> | null {
    return this.root.search(k, this.compare);
  }

  insert(k: T) {
    let r = this.root;

    if (r.keys.length === 2 * this.t - 1) {
      let s = new BTreeNode<T>(this.t, false);
      s.children.push(r);
      s.splitChild(0, r);

      let i = 0;
      if (this.compare(s.keys[0], k) < 0) {
        i++;
      }
      s.children[i].insertNonFull(k, this.compare);
      this.root = s;
    } else {
      r.insertNonFull(k, this.compare);
    }
  }
}
const compareNumbers = (a: number, b: number) => a - b;
const btree = new BTree<number>(3, compareNumbers);

[10, 20, 5, 6, 12, 30, 7, 17].forEach(num => btree.insert(num));

console.log(btree.search(6)); // Should find the node containing 6
console.log(btree.search(15)); // Should return null
