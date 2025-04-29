class BTreeNode<T> {
  keys: T[];
  children: BTreeNode<T>[];
  leaf: boolean;

  constructor(leaf: boolean = false) {
    this.keys = [];
    this.children = [];
    this.leaf = leaf;
  }
}
class BTree<T> {
  root: BTreeNode<T> | null;
  t: number; // minimum degree

  constructor(t: number) {
    this.t = t;
    this.root = null;
  }

  // Search, insert, delete methods to follow
}
search(node: BTreeNode<T> | null, key: T): { node: BTreeNode<T>, index: number } | null {
  if (!node) return null;
  
  let i = 0;
  // Find the first key greater than or equal to target
  while (i < node.keys.length && key > node.keys[i]) {
    i++;
  }

  if (i < node.keys.length && key === node.keys[i]) {
    return { node, index: i };
  } else if (node.leaf) {
    return null;
  } else {
    return this.search(node.children[i], key);
  }
}
insert(key: T) {
  if (this.root === null) {
    this.root = new BTreeNode<T>(true);
    this.root.keys.push(key);
    return;
  }

  if (this.root.keys.length === 2 * this.t - 1) {
    const newRoot = new BTreeNode<T>();
    newRoot.children.push(this.root);
    this.splitChild(newRoot, 0);
    this.root = newRoot;
  }

  this.insertNonFull(this.root, key);
}

private insertNonFull(node: BTreeNode<T>, key: T) {
  let i = node.keys.length - 1;

  if (node.leaf) {
    // Insert key into node
    while (i >= 0 && key < node.keys[i]) {
      i--;
    }
    node.keys.splice(i + 1, 0, key);
  } else {
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

private splitChild(parent: BTreeNode<T>, index: number) {
  const nodeToSplit = parent.children[index];
  const newNode = new BTreeNode<T>(nodeToSplit.leaf);
  const t = this.t;

  // Move the second half keys to new node
  newNode.keys = nodeToSplit.keys.splice(t);
  if (!nodeToSplit.leaf) {
    newNode.children = nodeToSplit.children.splice(t);
  }
  // Move middle key up to parent
  parent.keys.splice(index, 0, nodeToSplit.keys.pop()!);
  parent.children.splice(index + 1, 0, newNode);
}
