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
  t: number; // min degree

  constructor(t: number) {
    this.t = t;
    this.root = new BTreeNode<T>(true);
  }
}
search(node: BTreeNode<T>, key: T): BTreeNode<T> | null {
  let i = 0;
  // Find the first key greater or equal to given key
  while (i < node.keys.length && key > node.keys[i]) {
    i++;
  }
  // If found exact key
  if (i < node.keys.length && key === node.keys[i]) {
    return node;
  }
  // If leaf node, key not found
  if (node.leaf) {
    return null;
  }
  // Go to the appropriate child
  return this.search(node.children[i], key);
}

searchKey(key: T): BTreeNode<T> | null {
  return this.search(this.root, key);
}
splitChild(parent: BTreeNode<T>, index: number) {
  let t = this.t;
  let fullChild = parent.children[index];
  let newChild = new BTreeNode<T>(fullChild.leaf);

  // Move t-1 keys to new child
  newChild.keys = fullChild.keys.splice(t);
  
  // If not leaf, move t children to new child
  if (!fullChild.leaf) {
    newChild.children = fullChild.children.splice(t);
  }

  // Insert new child into parent
  parent.children.splice(index + 1, 0, newChild);
  
  // Move middle key to parent
  const middleKey = fullChild.keys.splice(t - 1, 1)[0];
  parent.keys.splice(index, 0, middleKey);
}
insertNonFull(node: BTreeNode<T>, key: T) {
  let i = node.keys.length - 1;

  if (node.leaf) {
    // Insert key into this leaf node
    while (i >= 0 && key < node.keys[i]) {
      i--;
    }
    node.keys.splice(i + 1, 0, key);
  } else {
    // Move down to child node
    while (i >= 0 && key < node.keys[i]) {
      i--;
    }
    i++;
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
  let r = this.root;
  if (r.keys.length === 2 * this.t - 1) {
    let s = new BTreeNode<T>(false);
    this.root = s;
    s.children.push(r);
    this.splitChild(s, 0);
    this.insertNonFull(s, key);
  } else {
    this.insertNonFull(r, key);
  }
}
const btree = new BTree<number>(3);
btree.insert(10);
btree.insert(20);
btree.insert(5);
btree.insert(6);
btree.insert(12);
btree.insert(30);
btree.insert(7);
btree.insert(17);

console.log('Search 6:', btree.searchKey(6) !== null);  // true
console.log('Search 15:', btree.searchKey(15) !== null); // false
