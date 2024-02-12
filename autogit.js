class Node {
  constructor(value, level = 0) {
    this.value = value;
    this.next = new Array(level + 1);
  }
}
class SkipList {
  constructor() {
    this.head = new Node(-Infinity);
    this.maxLevel = 0;
  }
}
SkipList.prototype.insert = function(value) {
  const newNode = new Node(value, this.randomLevel());
  
  while (this.maxLevel < newNode.next.length) {
    this.head.next.push(null);
    this.maxLevel++;
  }
  
  let current = this.head;
  
  for (let i = this.maxLevel; i >= 0; i--) {
    while (current.next[i] && current.next[i].value < value) {
      current = current.next[i];
    }
    newNode.next[i] = current.next[i];
    current.next[i] = newNode;
  }
};
SkipList.prototype.search = function(value) {
  let current = this.head;
  
  for (let i = this.maxLevel; i >= 0; i--) {
    while (current.next[i] && current.next[i].value < value) {
      current = current.next[i];
    }
  }
  
  current = current.next[0];
  
  if (current && current.value === value) {
    return current;
  }
  
  return null;
};
SkipList.prototype.remove = function(value) {
  let current = this.head;
  let removed = null;
  
  for (let i = this.maxLevel; i >= 0; i--) {
    while (current.next[i] && current.next[i].value < value) {
      current = current.next[i];
    }
    if (current.next[i] && current.next[i].value === value) {
      removed = current.next[i];
      current.next[i] = current.next[i].next[i];
    }
  }
  
  return removed;
};
SkipList.prototype.randomLevel = function() {
  let level = 0;
  while (Math.random() < 0.5) {
    level++;
  }
  return level;
};
const list = new SkipList();

list.insert(10);
list.insert(5);
list.insert(15);

console.log(list.search(5)); // Output: Node { value: 5, next: [ Node ] }
console.log(list.search(20)); // Output: null

list.remove(5);

console.log(list.search(5)); // Output: null
