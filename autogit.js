class SkipListNode {
  constructor(value) {
    this.value = value;
    this.next = [];
  }
}
class SkipList {
  constructor() {
    this.head = new SkipListNode(-Infinity);
    this.maxHeight = 1;
  }
}
insert(value) {
  const newNode = new SkipListNode(value);
  const nodePath = this.createNodePath(value);

  for (let i = 0; i < nodePath.length; i++) {
    const nextNode = nodePath[i].next[i];
    nodePath[i].next[i] = newNode;
    newNode.next[i] = nextNode;
  }

  if (nodePath.length > this.maxHeight) {
    this.maxHeight = nodePath.length;
  }
}
createNodePath(value) {
  const path = [this.head];
  let node = this.head;
  for (let i = this.maxHeight - 1; i >= 0; i--) {
    while (node.next[i] && node.next[i].value < value) {
      node = node.next[i];
    }
    path[i] = node;
  }
  return path;
}
search(value) {
  let node = this.head;
  for (let i = this.maxHeight - 1; i >= 0; i--) {
    while (node.next[i] && node.next[i].value < value) {
      node = node.next[i];
    }

    if (node.next[i] && node.next[i].value === value) {
      return node.next[i];
    }
  }
  return null;
}
remove(value) {
  const nodePath = this.createNodePath(value);
  const nodeToRemove = nodePath[0].next[0];

  if (!nodeToRemove || nodeToRemove.value !== value) {
    return; // Element not found
  }

  for (let i = 0; i < nodeToRemove.next.length; i++) {
    const prevNode = nodePath[i];
    const nextNode = nodeToRemove.next[i];
    prevNode.next[i] = nextNode;
  }

  while (this.maxHeight > 1 && !this.head.next[this.maxHeight - 1]) {
    this.maxHeight--;
  }
}
