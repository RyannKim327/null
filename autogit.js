class BTreeNode {
  constructor(isLeaf) {
    this.keys = [];
    this.children = [];
    this.isLeaf = isLeaf;
  }
}
class BTree {
  constructor(degree) {
    this.root = new BTreeNode(true);
    this.degree = degree;
  }
  
  insert(key) {
    // TODO: Implement the insertion operation
  }
  
  delete(key) {
    // TODO: Implement the deletion operation
  }
  
  search(key) {
    // TODO: Implement the search operation
  }
}
insert(key) {
  const root = this.root;
  
  if (root.keys.length === (2 * this.degree) - 1) {
    const newNode = new BTreeNode(false);
    this.root = newNode;
    newNode.children[0] = root;
    this.splitChild(newNode, 0);
    this.insertNonFull(newNode, key);
  } else {
    this.insertNonFull(root, key);
  }
}

insertNonFull(node, key) {
  let i = node.keys.length - 1;
  
  if (node.isLeaf) {
    while (i >= 0 && key < node.keys[i]) {
      node.keys[i + 1] = node.keys[i];
      i--;
    }
    node.keys[i + 1] = key;
  } else {
    while (i >= 0 && key < node.keys[i]) {
      i--;
    }
    i++;
    if (node.children[i].keys.length === (2 * this.degree) - 1) {
      this.splitChild(node, i);
      if (key > node.keys[i]) {
        i++;
      }
    }
    this.insertNonFull(node.children[i], key);
  }
}

splitChild(parent, index) {
  const degree = this.degree;
  const child = parent.children[index];
  
  const newNode = new BTreeNode(child.isLeaf);
  
  parent.keys.splice(index, 0, child.keys[degree - 1]);
  parent.children.splice(index + 1, 0, newNode);
  
  newNode.keys = child.keys.splice(degree, degree - 1);
  if (!child.isLeaf) {
    newNode.children = child.children.splice(degree, degree);
  }
}
delete(key) {
  const root = this.root;
  
  this.deleteKey(root, key);
  
  if (root.keys.length === 0 && root.children.length !== 0) {
    this.root = root.children[0];
  }
}

deleteKey(node, key) {
  const degree = this.degree;
  let i = node.keys.findIndex(k => k === key);
  
  if (i >= 0) {
    if (node.isLeaf) {
      node.keys.splice(i, 1);
    } else {
      const predecessor = this.findPredecessor(node, i);
      node.keys[i] = predecessor;
      this.deleteKey(node.children[i], predecessor);
    }
  } else {
    i = node.keys.findIndex(k => k > key);
    if (node.isLeaf) {
      return;
    }
    if (node.children[i].keys.length < degree) {
      this.fill(node, i);
    }
    if (i > node.keys.length || key < node.keys[i]) {
      this.deleteKey(node.children[i], key);
    } else {
      this.deleteKey(node.children[i + 1], key);
    }
  }
}

findPredecessor(node, index) {
  let current = node.children[index];
  while (!current.isLeaf) {
    current = current.children[current.keys.length];
  }
  return current.keys[current.keys.length - 1];
}

fill(node, index) {
  const degree = this.degree;
  if (index > 0 && node.children[index - 1].keys.length >= degree) {
    this.stealFromPrev(node, index);
  } else if (index < node.keys.length && node.children[index + 1].keys.length >= degree) {
    this.stealFromNext(node, index);
  } else {
    if (index > node.keys.length) {
      index--;
    }
    this.merge(node, index);
  }
}

stealFromPrev(node, index) {
  const child = node.children[index];
  const sibling = node.children[index - 1];
  
  child.keys.splice(0, 0, node.keys[index - 1]);
  node.keys[index - 1] = sibling.keys.pop();
  
  if (!child.isLeaf) {
    child.children.splice(0, 0, sibling.children.pop());
  }
}

stealFromNext(node, index) {
  const child = node.children[index];
  const sibling = node.children[index + 1];
  
  child.keys.push(node.keys[index]);
  node.keys[index] = sibling.keys.shift();
  
  if (!child.isLeaf) {
    child.children.push(sibling.children.shift());
  }
}

merge(node, index) {
  const child = node.children[index];
  const sibling = node.children[index + 1];
  
  child.keys.push(node.keys[index]);
  node.keys.splice(index, 1);
  
  child.keys.push(...sibling.keys);
  child.children.push(...sibling.children);
  node.children.splice(index + 1, 1);
}
search(key) {
  return this.searchKey(this.root, key);
}

searchKey(node, key) {
  const i = node.keys.findIndex(k => k === key);
  if (i >= 0) {
    return node;
  } else if (node.isLeaf) {
    return null;
  } else {
    const childIndex = node.keys.findIndex(k => k > key);
    return this.searchKey(node.children[childIndex], key);
  }
}
