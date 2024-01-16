class SkipListNode {
  constructor(value) {
    this.value = value;
    this.next = [];
  }
}

class SkipList {
  constructor() {
    this.head = new SkipListNode(-Infinity);
    this.tail = new SkipListNode(Infinity);
    this.head.next.push(this.tail);
  }
}
SkipList.prototype.search = function (value) {
  let currentNode = this.head;

  for (let i = this.maxLevel(); i >= 0; i--) {
    while (
      currentNode.next[i] !== this.tail &&
      currentNode.next[i].value < value
    ) {
      currentNode = currentNode.next[i];
    }
  }

  return currentNode;
};
SkipList.prototype.insert = function (value) {
  const node = new SkipListNode(value);
  const update = new Array(this.maxLevel() + 1);

  let currentNode = this.head;
  for (let i = this.maxLevel(); i >= 0; i--) {
    while (
      currentNode.next[i] !== this.tail &&
      currentNode.next[i].value < value
    ) {
      currentNode = currentNode.next[i];
    }
    update[i] = currentNode;
  }

  for (let i = 0; i < node.next.length; i++) {
    node.next[i] = update[i].next[i];
    update[i].next[i] = node;
  }
};
SkipList.prototype.remove = function (value) {
  const update = new Array(this.maxLevel() + 1);

  let currentNode = this.head;
  for (let i = this.maxLevel(); i >= 0; i--) {
    while (
      currentNode.next[i] !== this.tail &&
      currentNode.next[i].value < value
    ) {
      currentNode = currentNode.next[i];
    }
    update[i] = currentNode;
  }

  const nodeToRemove = currentNode.next[0];
  if (nodeToRemove.value === value) {
    for (let i = 0; i < nodeToRemove.next.length; i++) {
      update[i].next[i] = nodeToRemove.next[i];
    }
  }
};
SkipList.prototype.contains = function (value) {
  const node = this.search(value);
  return node.next[0].value === value;
};

SkipList.prototype.display = function () {
  let currentNode = this.head.next[0];
  while (currentNode !== this.tail) {
    console.log(currentNode.value);
    currentNode = currentNode.next[0];
  }
};
