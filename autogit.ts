class BTreeNode<K> {
  keys: K[] = [];
  children: BTreeNode<K>[] = [];
  leaf: boolean;

  constructor(leaf: boolean) {
    this.leaf = leaf;
  }
}
class BTree<K> {
  root: BTreeNode<K>;
  t: number; // minimum degree

  constructor(t: number) {
    this.t = t;
    this.root = new BTreeNode<K>(true);
  }

  // search, insert, split, and other methods here
}
search(node: BTreeNode<K> = this.root, key: K, compare: (a: K, b: K) => number): { node: BTreeNode<K>, index: number } | null {
  let i = 0;
  while (i < node.keys.length && compare(key, node.keys[i]) > 0) {
    i++;
  }

  if (i < node.keys.length && compare(key, node.keys[i]) === 0) {
    return { node, index: i };
  } else if (node.leaf) {
    return null;
  } else {
    return this.search(node.children[i], key, compare);
  }
}
splitChild(parent: BTreeNode<K>, i: number): void {
  const t = this.t;
  const child = parent.children[i];
  const newChild = new BTreeNode<K>(child.leaf);
  
  // Move last t-1 keys from child to newChild
  newChild.keys = child.keys.splice(t);
  
  // If not leaf, move the last t children to newChild
  if (!child.leaf) {
    newChild.children = child.children.splice(t);
  }
  
  // Insert new child to parent's children
  parent.children.splice(i + 1, 0, newChild);
  
  // Move middle key up to parent
  const middleKey = child.keys.splice(t - 1, 1)[0];
  parent.keys.splice(i, 0, middleKey);
}
insertNonFull(node: BTreeNode<K>, key: K, compare: (a: K, b: K) => number): void {
  let i = node.keys.length - 1;
  
  if (node.leaf) {
    // Insert key into correct position
    while (i >= 0 && compare(key, node.keys[i]) < 0) {
      i--;
    }
    node.keys.splice(i + 1, 0, key);
  } else {
    // Find child to insert into
    while (i >= 0 && compare(key, node.keys[i]) < 0) {
      i--;
    }
    i++;
    
    if (node.children[i].keys.length === 2 * this.t - 1) {
      this.splitChild(node, i);
      if (compare(key, node.keys[i]) > 0) {
        i++;
      }
    }
    this.insertNonFull(node.children[i], key, compare);
  }
}
insert(key: K, compare: (a: K, b: K) => number): void {
  const root = this.root;
  if (root.keys.length === 2 * this.t - 1) {
    const newRoot = new BTreeNode<K>(false);
    newRoot.children.push(root);
    this.splitChild(newRoot, 0);
    this.root = newRoot;
    this.insertNonFull(newRoot, key, compare);
  } else {
    this.insertNonFull(root, key, compare);
  }
}
const compareNumbers = (a: number, b: number) => a - b;

const btree = new BTree<number>(3); // t=3 (min degree)
btree.insert(10, compareNumbers);
btree.insert(20, compareNumbers);
btree.insert(5, compareNumbers);

const found = btree.search(btree.root, 10, compareNumbers);
console.log(found ? `Found key at index ${found.index}` : "Key not found");
