class BTreeNode<T> {
  keys: T[];
  children: BTreeNode<T>[];
  leaf: boolean;

  constructor(t: number) {
    this.keys = new Array(t - 1);
    this.children = new Array(t);
    this.leaf = true;
  }
}

class BTree<T> {
  root: BTreeNode<T>;
  t: number;

  constructor(t: number) {
    this.root = new BTreeNode(t);
    this.t = t;
  }

  insert(key: T) {
    if (this.root.keys.length === this.t - 1) {
      const newRoot = new BTreeNode(this.t);
      newRoot.children[0] = this.root;
      this.root = newRoot;
      this.splitChild(newRoot, 0);
      this.insertNonFull(newRoot, key);
    } else {
      this.insertNonFull(this.root, key);
    }
  }

  insertNonFull(node: BTreeNode<T>, key: T) {
    const i = node.keys.length - 1;
    if (node.leaf) {
      while (i >= 0 && this.compare(key, node.keys[i]) < 0) {
        node.keys[i + 1] = node.keys[i];
        i--;
      }
      node.keys[i + 1] = key;
    } else {
      while (i >= 0 && this.compare(key, node.keys[i]) < 0) {
        i--;
      }
      if (node.children[i + 1].keys.length === this.t - 1) {
        this.splitChild(node, i + 1);
        if (this.compare(key, node.keys[i + 1]) > 0) {
          i++;
        }
      }
      this.insertNonFull(node.children[i + 1], key);
    }
  }

  splitChild(parent: BTreeNode<T>, index: number) {
    const child = parent.children[index];
    const newChild = new BTreeNode(this.t);
    parent.children.splice(index + 1, 0, newChild);
    parent.keys.splice(index, 0, child.keys[this.t - 2]);
    newChild.keys = child.keys.slice(this.t - 1, 2 * this.t - 1);
    newChild.children = child.children.slice(this.t - 1, 2 * this.t - 1);
    child.keys = child.keys.slice(0, this.t - 1);
    child.children = child.children.slice(0, this.t - 1);
  }

  search(key: T): boolean {
    return this.searchNode(this.root, key);
  }

  searchNode(node: BTreeNode<T>, key: T): boolean {
    let i = 0;
    while (i < node.keys.length && this.compare(key, node.keys[i]) > 0) {
      i++;
    }
    if (i < node.keys.length && this.compare(key, node.keys[i]) === 0) {
      return true;
    } else if (node.leaf) {
      return false;
    } else {
      return this.searchNode(node.children[i], key);
    }
  }

  delete(key: T) {
    this.deleteNode(this.root, key);
  }

  deleteNode(node: BTreeNode<T>, key: T) {
    const i = 0;
    while (i < node.keys.length && this.compare(key, node.keys[i]) > 0) {
      i++;
    }
    if (i < node.keys.length && this.compare(key, node.keys[i]) === 0) {
      if (node.leaf) {
        this.deleteFromLeaf(node, i);
      } else {
        const predecessor = this.getPredecessor(node, i);
        node.keys[i] = predecessor;
        this.deleteNode(node.children[i], predecessor);
      }
    } else if (node.leaf) {
      return false;
    } else {
      this.deleteNode(node.children[i], key);
    }
  }

  deleteFromLeaf(node: BTreeNode<T>, index: number) {
    node.keys.splice(index, 1);
    if (node.keys.length === 0) {
      if (node === this.root) {
        this.root = null;
      } else {
        this.deleteFromNonLeaf(node.parent, index);
      }
    }
  }

  deleteFromNonLeaf(node: BTreeNode<T>, index: number) {
    if (node.children[index].keys.length < this.t - 1) {
      this.fill(node, index);
    }
    node.keys.splice(index, 1);
    if (node.keys.length === 0) {
      if (node === this.root) {
        this.root = null;
      } else {

