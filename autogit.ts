class BTreeNode {
  keys: number[];
  children: BTreeNode[];
  isLeaf: boolean;
  t: number;

  constructor(t: number, isLeaf: boolean) {
    this.t = t;
    this.isLeaf = isLeaf;
    this.keys = [];
    this.children = [];
  }
}

class BTree {
  root: BTreeNode;
  t: number; // Minimum degree

  constructor(t: number) {
    this.root = new BTreeNode(t, true);
    this.t = t;
  }

  // Method to search a key in the B-tree
  search(key: number, node: BTreeNode | null = this.root): BTreeNode | null {
    if (node === null) return null;

    let i = 0;
    while (i < node.keys.length && key > node.keys[i]) {
      i++;
    }

    if (i < node.keys.length && key === node.keys[i]) {
      return node; // Key found
    }

    if (node.isLeaf) {
      return null; // Not found in this leaf
    }

    // Go down to the child that may contain the key
    return this.search(key, node.children[i]);
  }

  // Method to insert a new key
  insert(key: number) {
    const root = this.root;

    if (root.keys.length === 2 * this.t - 1) {
      // Root is full. Create a new root
      const newNode = new BTreeNode(this.t, false);
      newNode.children.push(root);
      this.splitChild(newNode, 0);
      this.insertNonFull(newNode, key);
      this.root = newNode;
    } else {
      this.insertNonFull(root, key);
    }
  }

  // Helper method to insert a key in a non-full node
  private insertNonFull(node: BTreeNode, key: number) {
    let i = node.keys.length - 1;

    if (node.isLeaf) {
      // Insert the new key into the node
      node.keys.push(0); // make space for the new key
      while (i >= 0 && key < node.keys[i]) {
        node.keys[i + 1] = node.keys[i]; // Shift key to the right
        i--;
      }
      node.keys[i + 1] = key; // Insert the new key
    } else {
      // Locate the child that is going to have the new key
      while (i >= 0 && key < node.keys[i]) {
        i--;
      }
      i++;

      // Check if the found child is full
      if (node.children[i].keys.length === 2 * this.t - 1) {
        // Split the full child
        this.splitChild(node, i);
        // After splitting, determine which of the two children to recurse down to
        if (key > node.keys[i]) {
          i++;
        }
      }
      this.insertNonFull(node.children[i], key);
    }
  }

  // Method to split the full child
  private splitChild(parent: BTreeNode, index: number) {
    const fullChild = parent.children[index];
    const newChild = new BTreeNode(this.t, fullChild.isLeaf);

    // Move half of the keys to the new child
    parent.keys.splice(index, 0, fullChild.keys[this.t - 1]);
    parent.children.splice(index + 1, 0, newChild);

    // Move the keys
    newChild.keys = fullChild.keys.splice(this.t - 1);

    // Move children if fullChild is not a leaf
    if (!fullChild.isLeaf) {
      newChild.children = fullChild.children.splice(this.t);
    }
  }
}

// Example Usage
const bTree = new BTree(3);
bTree.insert(10);
bTree.insert(20);
bTree.insert(5);
bTree.insert(1);
bTree.insert(30);
bTree.insert(15);

console.log(bTree.search(10)); // Expected output: BTreeNode containing key 10
console.log(bTree.search(99)); // Expected output: null (not found)
