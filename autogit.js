class Node {
  constructor(key, value, forward = []) {
    this.key = key;
    this.value = value;
    this.forward = forward;
  }
}
class SkipList {
  constructor(maxLevel = 16) {
    this.head = new Node(-Infinity, null, new Array(maxLevel));
    this.maxLevel = maxLevel;
  }
}
randomLevel() {
  let level = 1;
  while (Math.random() < 0.5 && level < this.maxLevel) {
    level++;
  }
  return level;
}
insert(key, value) {
  const update = new Array(this.maxLevel);
  let current = this.head;
  
  for (let i = this.maxLevel - 1; i >= 0; i--) {
    while (current.forward[i] && current.forward[i].key < key) {
      current = current.forward[i];
    }
    update[i] = current;
  }
  
  const level = this.randomLevel();
  const newNode = new Node(key, value, new Array(level));
  
  for (let i = 0; i < level; i++) {
    newNode.forward[i] = update[i].forward[i];
    update[i].forward[i] = newNode;
  }
}
search(key) {
  let current = this.head;
  
  for (let i = this.maxLevel - 1; i >= 0; i--) {
    while (current.forward[i] && current.forward[i].key < key) {
      current = current.forward[i];
    }
  }
  
  current = current.forward[0];
  if (current && current.key === key) {
    return current.value;
  } else {
    return null;
  }
}
remove(key) {
  const update = new Array(this.maxLevel);
  let current = this.head;
  
  for (let i = this.maxLevel - 1; i >= 0; i--) {
    while (current.forward[i] && current.forward[i].key < key) {
      current = current.forward[i];
    }
    update[i] = current;
  }
  
  current = current.forward[0];
  if (current && current.key === key) {
    for (let i = 0; i < this.maxLevel; i++) {
      if (update[i].forward[i] !== current) break;
      update[i].forward[i] = current.forward[i];
    }
  }
}
