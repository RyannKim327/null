class BTreeNode<T> {
  keys: T[] = [];
  children: BTreeNode<T>[] = [];
  leaf: boolean;

  constructor(leaf: boolean) {
    this.leaf = leaf;
  }
}
class BTree<T> {
  root: BTreeNode<T>;
  t: number; // minimum degree
  compare: (a: T, b: T) => number;

  constructor(t: number, compareFn: (a: T, b: T) => number) {
    this.t = t;
    this.root = new BTreeNode<T>(true);
    this.compare = compareFn;
  }
}
search(node: BTreeNode<T>, key: T): BTreeNode<T> | null {
  let i = 0;
  while (i < node.keys.length && this.compare(key, node.keys[i]) > 0) {
    i++;
  }

  if (i < node.keys.length && this.compare(key, node.keys[i]) === 0) {
    return node; // Found key in this node
  }

  if (node.leaf) {
    return null; // Not found
  }

  return this.search(node.children[i], key);
}
splitChild(parent: BTreeNode<T>, i: number) {
  const t = this.t;
  const y = parent.children[i];
  const z = new BTreeNode<T>(y.leaf);

  // z takes t - 1 keys from y
  z.keys = y.keys.splice(t);
  
  // If y is not leaf, move second half children to z
  if (!y.leaf) {
    z.children = y.children.splice(t);
  }

  // Insert z after y in parent's children
  parent.children.splice(i + 1, 0, z);

  // Move middle key from y to parent
  const midKey = y.keys.splice(t - 1, 1)[0];
  parent.keys.splice(i, 0, midKey);
}
insert(key: T) {
  const root = this.root;

  if (root.keys.length === 2 * this.t - 1) {
    const newRoot = new BTreeNode<T>(false);
    newRoot.children.push(root);
    this.splitChild(newRoot, 0);
    this.root = newRoot;
    this.insertNonFull(newRoot, key);
  } else {
    this.insertNonFull(root, key);
  }
}

insertNonFull(node: BTreeNode<T>, key: T) {
  let i = node.keys.length - 1;

  if (node.leaf) {
    // Insert key into the correct position in node.keys
    node.keys.push(key);  // Add dummy key to extend array
    while (i >= 0 && this.compare(key, node.keys[i]) < 0) {
      node.keys[i + 1] = node.keys[i];
      i--;
    }
    node.keys[i + 1] = key;
  } else {
    while (i >= 0 && this.compare(key, node.keys[i]) < 0) {
      i--;
    }
    i++;

    if (node.children[i].keys.length === 2 * this.t - 1) {
      this.splitChild(node, i);

      if (this.compare(key, node.keys[i]) > 0) {
        i++;
      }
    }
    this.insertNonFull(node.children[i], key);
  }
}
// Comparator for numbers
function numberCompare(a: number, b: number): number {
  return a - b;
}

const btree = new BTree<number>(3, numberCompare);

// Insert multiple keys
[10, 20, 5, 6, 12, 30, 7, 17].forEach(key => btree.insert(key));

// Search
const node = btree.search(btree.root, 6);
console.log(node ? "Found key 6" : "Key 6 not found");
