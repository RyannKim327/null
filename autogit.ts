class BTreeNode<K, V> {
  private keys: K[];
  private values: V[];
  private children: BTreeNode<K, V>[];
  private leaf: boolean;

  constructor(leaf: boolean = false) {
    this.keys = [];
    this.values = [];
    this.children = [];
    this.leaf = leaf;
  }

  // Insert a key-value pair into the B-tree
  insert(key: K, value: V): void {
    if (this.leaf) {
      // Leaf node: simply insert the key-value pair
      this.keys.push(key);
      this.values.push(value);
      this.keys.sort((a, b) => (a as any) - (b as any));
    } else {
      // Non-leaf node: find the appropriate child node to insert into
      const index = this.findChildIndex(key);
      if (this.children[index].keys.length < BTreeOrder) {
        // Child node has space: insert into child node
        this.children[index].insert(key, value);
      } else {
        // Child node is full: split the child node and insert
        this.splitChild(index);
        if (key < this.keys[index]) {
          this.children[index].insert(key, value);
        } else {
          this.children[index + 1].insert(key, value);
        }
      }
    }
  }

  // Search for a key in the B-tree
  search(key: K): V | null {
    let index = this.findChildIndex(key);
    if (index >= 0 && this.keys[index] === key) {
      return this.values[index];
    }
    if (this.leaf) {
      return null;
    }
    return this.children[index].search(key);
  }

  // Delete a key from the B-tree
  delete(key: K): void {
    const index = this.findChildIndex(key);
    if (index >= 0 && this.keys[index] === key) {
      // Key found in this node: remove it
      this.keys.splice(index, 1);
      this.values.splice(index, 1);
    } else if (this.leaf) {
      // Key not found in this node: return
      return;
    } else {
      // Key not found in this node: recurse into child nodes
      this.children[index].delete(key);
    }
  }

  // Find the index of the child node that should contain the given key
  private findChildIndex(key: K): number {
    let index = 0;
    while (index < this.keys.length && key > this.keys[index]) {
      index++;
    }
    return index;
  }

  // Split a child node into two child nodes
  private splitChild(index: number): void {
    const child = this.children[index];
    const mid = Math.floor(child.keys.length / 2);
    const newChild = new BTreeNode<K, V>(child.leaf);
    newChild.keys = child.keys.slice(mid);
    newChild.values = child.values.slice(mid);
    child.keys = child.keys.slice(0, mid);
    child.values = child.values.slice(0, mid);
    this.keys.splice(index, 0, child.keys[mid - 1]);
    this.values.splice(index, 0, child.values[mid - 1]);
    this.children.splice(index + 1, 0, newChild);
  }
}

// B-tree order ( adjustable )
const BTreeOrder = 3;

// Example usage
const tree = new BTreeNode<number, string>();
tree.insert(5, 'five');
tree.insert(2, 'two');
tree.insert(8, 'eight');
tree.insert(3, 'three');
tree.insert(9, 'nine');

console.log(tree.search(2)); // Output: "two"
console.log(tree.search(6)); // Output: null
tree.delete(3);
console.log(tree.search(3)); // Output: null
