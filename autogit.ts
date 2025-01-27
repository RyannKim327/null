class BTreeNode<T> {
  private _key: T;
  private _childNodes: BTreeNode<T>[];
  private _parent: BTreeNode<T> | null;
  private _balanceFactor: number;

  constructor(key: T, childNodes: BTreeNode<T>[] = [], parent: BTreeNode<T> | null = null) {
    this._key = key;
    this._childNodes = childNodes;
    this._parent = parent;
    this._balanceFactor = 0;
  }

  get key(): T {
    return this._key;
  }

  get childNodes(): BTreeNode<T>[] {
    return this._childNodes;
  }

  get parent(): BTreeNode<T> | null {
    return this._parent;
  }

  set parent(parent: BTreeNode<T> | null) {
    this._parent = parent;
  }

  get balanceFactor(): number {
    return this._balanceFactor;
  }

  set balanceFactor(balanceFactor: number) {
    this._balanceFactor = balanceFactor;
  }

  insert(key: T): BTreeNode<T> | null {
    // Insert logic goes here
  }

  search(key: T): BTreeNode<T> | null {
    // Search logic goes here
  }

  delete(key: T): BTreeNode<T> | null {
    // Delete logic goes here
  }
}

class BTree<T> {
  private _root: BTreeNode<T> | null;

  constructor() {
    this._root = null;
  }

  get root(): BTreeNode<T> | null {
    return this._root;
  }

  insert(key: T): void {
    if (!this._root) {
      this._root = new BTreeNode(key);
    } else {
      this._root.insert(key);
    }
  }

  search(key: T): BTreeNode<T> | null {
    return this._root ? this._root.search(key) : null;
  }

  delete(key: T): void {
    this._root = this._root ? this._root.delete(key) : null;
  }
}
insert(key: T): BTreeNode<T> | null {
  if (!this._childNodes.length) {
    // Leaf node
    this._childNodes.push(new BTreeNode(key, [], this));
    this._balanceFactor = 1;
    return this;
  }

  let idx = 0;
  while (idx < this._childNodes.length && this._childNodes[idx].key < key) {
    idx++;
  }

  if (idx < this._childNodes.length && this._childNodes[idx].key === key) {
    // Key already exists
    return null;
  }

  if (idx === this._childNodes.length) {
    // Insert into rightmost child node
    this._childNodes[idx - 1].insert(key);
  } else {
    const newNode = new BTreeNode(key, [], this);
    this._childNodes.splice(idx, 0, newNode);
    this._balanceFactor = this._balanceFactor + 1
