class BTreeNode {
  constructor(leaf = true) {
    this.keys = [];
    this.children = [];
    this.leaf = leaf;
  }
}
function insert(root, key) {
  if (root.keys.length === 2 * t - 1) {
    const newNode = new BTreeNode(false);
    newNode.children.push(root);
    splitChild(newNode, 0, root);
    insertNonFull(newNode, key);
    return newNode;
  } else {
    insertNonFull(root, key);
    return root;
  }
}

function insertNonFull(node, key) {
  let i = node.keys.length - 1;

  if (node.leaf) {
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
    if (node.children[i].keys.length === 2 * t - 1) {
      splitChild(node, i, node.children[i]);
      if (key > node.keys[i]) {
        i++;
      }
    }
    insertNonFull(node.children[i], key);
  }
}

function splitChild(parent, index, child) {
  const newNode = new BTreeNode(child.leaf);
  parent.keys.splice(index, 0, child.keys[t - 1]);
  parent.children.splice(index + 1, 0, newNode);
  newNode.keys = child.keys.splice(t, t - 1);
  if (!child.leaf) {
    newNode.children = child.children.splice(t, t);
  }
}
function search(node, key) {
  let i = 0;
  while (i < node.keys.length && key > node.keys[i]) {
    i++;
  }
  if (node.keys[i] === key) {
    return node;
  } else if (node.leaf) {
    return null;
  } else {
    return search(node.children[i], key);
  }
}
function deleteKey(node, key) {
  const index = node.keys.findIndex(k => k === key);

  if (index !== -1) {
    if (node.leaf) {
      node.keys.splice(index, 1);
    } else {
      // deletion from internal node
      // implement appropriate logic based on different scenarios
    }
  } else if (!node.leaf) {
    let i = 0;
    while (i < node.keys.length && key > node.keys[i]) {
      i++;
    }
    if (node.children[i].keys.length < t) {
      // handling underflow by borrowing from left or right sibling
      // implement appropriate logic
    }
    // recursively delete in the appropriate child node
    deleteKey(node.children[i], key);
  }
}
