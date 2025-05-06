class BTreeNode<T> {
  keys: T[];
  children: BTreeNode<T>[];
  leaf: boolean;

  constructor(leaf: boolean) {
    this.keys = [];
    this.children = [];
    this.leaf = leaf;
  }
}
class BTree<T> {
  root: BTreeNode<T> | null;
  t: number; // minimum degree

  constructor(t: number) {
    this.root = null;
    this.t = t;
  }
}
// Helper function to search for a key in a subtree rooted at node
search(node: BTreeNode<T> | null, key: T): BTreeNode<T> | null {
  if (!node) return null;

  let i = 0;
  // Find first key >= key
  while (i < node.keys.length && key > node.keys[i]) {
    i++;
  }
  if (i < node.keys.length && node.keys[i] === key) {
    return node; // Found
  } else if (node.leaf) {
    return null; // Not found
  } else {
    // Search subtree
    return this.search(node.children[i], key);
  }
}
splitChild(parent: BTreeNode<T>, index: number) {
  const t = this.t;
  const node = parent.children[index];
  const newNode = new BTreeNode<T>(node.leaf);

  // Move t-1 keys to newNode
  for (let j = 0; j < t - 1; j++) {
    newNode.keys.push(node.keys[j + t]);
  }

  if (!node.leaf) {
    for (let j = 0; j < t; j++) {
      newNode.children.push(node.children[j + t]);
    }
  }

  // Reduce keys in node
  node.keys.length = t - 1;
  node.children.length = node.leaf ? 0 : t;

  // Insert newNode as child of parent
  parent.children.splice(index + 1, 0, newNode);

  // Move middle key to parent
  parent.keys.splice(index, 0, node.keys[t - 1]);
  node.keys.splice(t - 1, 1);
}
insertNonFull(node: BTreeNode<T>, key: T) {
  let i = node.keys.length - 1;

  if (node.leaf) {
    // Insert key into leaf node
    while (i >= 0 && key < node.keys[i]) {
      i--;
    }
    node.keys.splice(i + 1, 0, key);
  } else {
    // Find child to insert into
    while (i >= 0 && key < node.keys[i]) {
      i--;
    }
    i++;

    // Split child if full
    if (node.children[i].keys.length === 2 * this.t - 1) {
      this.splitChild(node, i);
      if (key > node.keys[i]) {
        i++;
      }
    }
    this.insertNonFull(node.children[i], key);
  }
}
insert(key: T) {
  if (!this.root) {
    this.root = new BTreeNode<T>(true);
    this.root.keys.push(key);
    return;
  }

  if (this.root.keys.length === 2 * this.t - 1) {
    const s = new BTreeNode<T>(false);
    s.children.push(this.root);
    this.splitChild(s, 0);
    this.root = s;
  }
  this.insertNonFull(this.root, key);
}
const btree = new BTree<number>(3); // Minimum degree 3

btree.insert(10);
btree.insert(20);
btree.insert(5);
btree.insert(6);
btree.insert(12);
btree.insert(30);
btree.insert(7);
btree.insert(17);

console.log(btree.search(btree.root, 6)); // Should find node containing 6
console.log(btree.search(btree.root, 15)); // null (not found)
