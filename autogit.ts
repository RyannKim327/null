class BTreeNode<T> {
  keys: T[] = [];
  children: BTreeNode<T>[] = [];
  leaf: boolean;

  constructor(leaf = false) {
    this.leaf = leaf;
  }
}

class BTree<T> {
  root: BTreeNode<T>;
  t: number; // Minimum degree (defines the range for number of keys)

  constructor(t: number) {
    this.t = t;
    this.root = new BTreeNode<T>(true);
  }

  // Search key k in subtree rooted with this node
  search(k: T, node: BTreeNode<T> = this.root): BTreeNode<T> | null {
    let i = 0;
    
    // Find the first key greater or equal to k
    while (i < node.keys.length && k > node.keys[i]) {
      i++;
    }
    
    if (i < node.keys.length && k === node.keys[i]) {
      return node;
    }
    
    if (node.leaf) {
      return null;
    }
    
    return this.search(k, node.children[i]);
  }

  // Insert a new key in the B-tree
  insert(k: T): void {
    const r = this.root;

    if (r.keys.length === 2 * this.t - 1) {
      // Root is full, tree grows in height
      const s = new BTreeNode<T>(false);
      this.root = s;
      s.children.push(r);
      this.splitChild(s, 0);
      this.insertNonFull(s, k);
    } else {
      this.insertNonFull(r, k);
    }
  }

  private insertNonFull(node: BTreeNode<T>, k: T) {
    let i = node.keys.length - 1;

    if (node.leaf) {
      // Insert the new key at correct position
      node.keys.push(k); // Add dummy key to extend array
      while (i >= 0 && k < node.keys[i]) {
        node.keys[i + 1] = node.keys[i];
        i--;
      }
      node.keys[i + 1] = k;
    } else {
      // Move to the correct child
      while (i >= 0 && k < node.keys[i]) i--;
      i++;

      if (node.children[i].keys.length === 2 * this.t - 1) {
        this.splitChild(node, i);

        if (k > node.keys[i]) i++;
      }

      this.insertNonFull(node.children[i], k);
    }
  }

  private splitChild(parent: BTreeNode<T>, i: number) {
    const t = this.t;
    const y = parent.children[i];
    const z = new BTreeNode<T>(y.leaf);

    // Move last t-1 keys from y to z
    z.keys = y.keys.splice(t);
    // If y is not leaf, move last t children from y to z
    if (!y.leaf) {
      z.children = y.children.splice(t);
    }

    parent.children.splice(i + 1, 0, z);
    parent.keys.splice(i, 0, y.keys.splice(t - 1, 1)[0]);
  }

  // To visualize the tree — helpful for debugging
  traverse(node: BTreeNode<T> = this.root, depth: number = 0) {
    console.log('  '.repeat(depth) + node.keys.join(', '));
    if (!node.leaf) {
      node.children.forEach(child => this.traverse(child, depth + 1));
    }
  }
}

// Usage example:
const tree = new BTree<number>(2); // t=2 => max 3 keys per node
[10, 20, 5, 6, 12, 30, 7, 17].forEach(num => tree.insert(num));
tree.traverse();
console.log('Search 6:', tree.search(6) ? 'Found' : 'Not found');
console.log('Search 15:', tree.search(15) ? 'Found' : 'Not found');
