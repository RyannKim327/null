class BTreeNode {
  keys: number[] = [];
  children: BTreeNode[] = [];
  isLeaf: boolean;
  maxKeys: number;

  constructor(t: number, isLeaf: boolean) {
    this.maxKeys = 2 * t - 1; // Maximum keys in the node
    this.isLeaf = isLeaf; // Leaf status
  }

  isFull(): boolean {
    return this.keys.length === this.maxKeys;
  }

  splitChild(index: number, child: BTreeNode): BTreeNode {
    const newChild = new BTreeNode(child.maxKeys / 2, child.isLeaf);
    // Move half the keys from the old child to the new child
    for (let i = Math.floor(child.maxKeys / 2); i < child.keys.length; i++) {
      newChild.keys.push(child.keys[i]);
    }
    // Remove the moved keys from the old child
    child.keys = child.keys.slice(0, Math.floor(child.maxKeys / 2));

    // If not a leaf, move half the children
    if (!child.isLeaf) {
      for (let i = Math.floor(child.maxKeys / 2) + 1; i < child.children.length; i++) {
        newChild.children.push(child.children[i]);
      }
      child.children = child.children.slice(0, Math.floor(child.maxKeys / 2) + 1);
    }

    return newChild;
  }
}
class BTree {
  root: BTreeNode;
  t: number; // Minimum degree (defines the range for number of keys)

  constructor(t: number) {
    this.root = new BTreeNode(t, true);
    this.t = t;
  }

  insert(key: number): void {
    if (this.root.isFull()) {
      const newRoot = new BTreeNode(this.t, false);
      newRoot.children.push(this.root);
      newRoot.splitChild(0, this.root);
      this.root = newRoot;
    }
    this.insertNonFull(this.root, key);
  }

  protected insertNonFull(node: BTreeNode, key: number): void {
    let i = node.keys.length - 1;

    if (node.isLeaf) {
      // Find the position to insert the new key
      while (i >= 0 && key < node.keys[i]) {
        i--;
      }
      node.keys.splice(i + 1, 0, key); // Insert key
    } else {
      // Find the child which is going to have the new key
      while (i >= 0 && key < node.keys[i]) {
        i--;
      }
      i++;
      const child = node.children[i];
      if (child.isFull()) {
        node.splitChild(i, child);
        // Determine which of the two children to insert into
        if (key > node.keys[i]) {
          i++;
        }
      }
      this.insertNonFull(node.children[i], key);
    }
  }

  // Utility function to print the tree (preorder traversal)
  print(): void {
    this.printTree(this.root, 0);
  }

  protected printTree(node: BTreeNode, level: number): void {
    console.log('Level ' + level + ': ' + node.keys);
    for (const child of node.children) {
      this.printTree(child, level + 1);
    }
  }
}
const bTree = new BTree(3); // Create a B-tree with a minimum degree of 3

bTree.insert(10);
bTree.insert(20);
bTree.insert(5);
bTree.insert(6);
bTree.insert(12);
bTree.insert(30);
bTree.insert(7);
bTree.insert(17);

console.log('B-Tree structure:');
bTree.print();
