class SkipNode {
  constructor(value = null, level = 0) {
    this.value = value;
    this.next = Array(level + 1).fill(null);
  }
}
class SkipList {
  constructor() {
    this.head = new SkipNode(); // dummy node
    this.level = 0; // current level of the list
  }
}
function randomLevel() {
  let level = 0;
  while (Math.random() < 0.5) {
    level++;
  }
  return level;
}
function findInsertionPos(value, currentNode, currentLevel) {
  let nextNode = currentNode.next[currentLevel];
  while (nextNode !== null && nextNode.value < value) {
    currentNode = nextNode;
    nextNode = currentNode.next[currentLevel];
  }
  return currentNode;
}
SkipList.prototype.insert = function(value) {
  const insertionLevels = randomLevel();
  const newNode = new SkipNode(value, insertionLevels);
  
  while (this.level < insertionLevels) {
    this.head.next.push(null);
    this.level++;
  }
  
  let currentNode = this.head;
  for (let i = this.level; i >= 0; i--) {
    const prevNode = findInsertionPos(value, currentNode, i);
    const nextNode = prevNode.next[i];
    newNode.next[i] = nextNode;
    prevNode.next[i] = newNode;
  }
}
SkipList.prototype.delete = function(value) {
  let currentNode = this.head;
  for (let i = this.level; i >= 0; i--) {
    const prevNode = findInsertionPos(value, currentNode, i);
    const nextNode = prevNode.next[i];
    if (nextNode !== null && nextNode.value === value) {
      prevNode.next[i] = nextNode.next[i];
    }
  }
}
const skipList = new SkipList();
skipList.insert(3);
skipList.insert(7);
skipList.insert(1);
skipList.delete(3);
