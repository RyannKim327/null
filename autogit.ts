type TKey = number; // or string, depending on your use case

class BTreeNode {
  keys: TKey[];
  children: BTreeNode[];
  leaf: boolean;

  constructor(leaf: boolean) {
    this.keys = [];
    this.children = [];
    this.leaf = leaf;
  }
}

class BTree {
  root: BTreeNode | null;
  t: number; // minimum degree

  constructor(t: number) {
    this.t = t;
    this.root = null;
  }

  // To be implemented:
  insert(key: TKey): void { /* insertion logic */ }
  search(key: TKey): BTreeNode | null { /* search logic */ }
}
insert(key: TKey): void {
  if (!this.root) {
    this.root = new BTreeNode(true);
    this.root.keys.push(key);
    return;
  }

  if (this.root.keys.length === 2 * this.t - 1) {
    const newRoot = new BTreeNode(false);
    newRoot.children.push(this.root);
    this.splitChild(newRoot, 0);
    this.root = newRoot;
    this.insertNonFull(newRoot, key);
  } else {
    this.insertNonFull(this.root, key);
  }
}

private splitChild(parent: BTreeNode, index: number): void {
  const node = parent.children[index];
  const newNode = new BTreeNode(node.leaf);
  const mid = this.t - 1;

  // Move second half keys to new node
  newNode.keys = node.keys.splice(mid + 1);
  const medianKey = node.keys.splice(mid, 1)[0];

  // If not leaf, move corresponding children
  if (!node.leaf) {
    newNode.children = node.children.splice(mid + 1);
  }

  parent.keys.splice(index, 0, medianKey);
  parent.children.splice(index + 1, 0, newNode);
}

private insertNonFull(node: BTreeNode, key: TKey): void {
  let i = node.keys.length - 1;

  if (node.leaf) {
    // Insert at the correct position
    while (i >= 0 && key < node.keys[i]) {
      i--;
    }
    node.keys.splice(i + 1, 0, key);
  } else {
    // Find child to recurse into
    while (i >= 0 && key < node.keys[i]) i--;
    i++;
    if (node.children[i].keys.length === 2 * this.t - 1) {
      this.splitChild(node, i);
      if (key > node.keys[i]) i++;
    }
    this.insertNonFull(node.children[i], key);
  }
}
