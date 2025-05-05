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

  // Find the index of the first key equal or greater than key
  findKey(key: T, compare: (a: T, b: T) => number): number {
    let idx = 0;
    while (idx < this.keys.length && compare(this.keys[idx], key) < 0) {
      idx++;
    }
    return idx;
  }
}
class BTree<T> {
  root: BTreeNode<T> | null;
  t: number; // Minimum degree
  compare: (a: T, b: T) => number;

  constructor(t: number, compare: (a: T, b: T) => number) {
    this.root = null;
    this.t = t;
    this.compare = compare;
  }

  insert(key: T) {
    if (this.root === null) {
      this.root = new BTreeNode<T>(this.t, true);
      this.root.keys.push(key);
    } else {
      // If root is full, need to split
      if (this.root.keys.length === 2 * this.t - 1) {
        const s = new BTreeNode<T>(this.t, false);
        s.children.push(this.root);
        this.splitChild(s, 0, this.root);
        this.root = s;

        this.insertNonFull(s, key);
      } else {
        this.insertNonFull(this.root, key);
      }
    }
  }

  insertNonFull(node: BTreeNode<T>, key: T) {
    let i = node.keys.length - 1;
    if (node.leaf) {
      // Insert key in the correct position
      while (i >= 0 && this.compare(node.keys[i], key) > 0) {
        node.keys[i + 1] = node.keys[i];
        i--;
      }
      node.keys[i + 1] = key;
      node.keys.length++;
    } else {
      // Move down the correct child
      while (i >= 0 && this.compare(node.keys[i], key) > 0) {
        i--;
      }
      i++;
      if (node.children[i].keys.length === 2 * this.t - 1) {
        this.splitChild(node, i, node.children[i]);
        if (this.compare(node.keys[i], key) < 0) {
          i++;
        }
      }
      this.insertNonFull(node.children[i], key);
    }
  }

  splitChild(parent: BTreeNode<T>, i: number, fullChild: BTreeNode<T>) {
    const t = this.t;
    const newNode = new BTreeNode<T>(t, fullChild.leaf);
    newNode.keys = fullChild.keys.slice(t); // keys [t... 2t-1)
    fullChild.keys = fullChild.keys.slice(0, t - 1);

    if (!fullChild.leaf) {
      newNode.children = fullChild.children.slice(t);
      fullChild.children = fullChild.children.slice(0, t);
    }

    parent.children.splice(i + 1, 0, newNode);
    parent.keys.splice(i, 0, fullChild.keys.pop()!);
  }

  // Optional: implement search, delete, traversal...
}
// Numeric comparison for numbers:
const btree = new BTree<number>(3, (a, b) => a - b);

[10, 20, 5, 6, 12, 30, 7, 17].forEach(num => btree.insert(num));

console.log(JSON.stringify(btree, null, 2));
