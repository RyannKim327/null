class SkipNode {
  constructor(key = null, value = null, level = 0) {
    this.key = key;
    this.value = value;
    this.forward = new Array(level + 1);
  }
}
class SkipList {
  constructor() {
    this.head = new SkipNode();
    this.level = 0;
  }
}
SkipList.prototype.insert = function(key, value) {
  const update = new Array(this.level + 1);
  let current = this.head;

  for (let i = this.level; i >= 0; i--) {
    while (current.forward[i] && current.forward[i].key < key) {
      current = current.forward[i];
    }
    update[i] = current;
  }

  current = current.forward[0];

  if (current && current.key === key) {
    current.value = value;
  } else {
    const level = this.randomLevel();
    if (level > this.level) {
      for (let i = this.level + 1; i <= level; i++) {
        update[i] = this.head;
      }
      this.level = level;
    }
    const newNode = new SkipNode(key, value, level);
    for (let i = 0; i <= level; i++) {
      newNode.forward[i] = update[i].forward[i];
      update[i].forward[i] = newNode;
    }
  }
};
SkipList.prototype.search = function(key) {
  let current = this.head;

  for (let i = this.level; i >= 0; i--) {
    while (current.forward[i] && current.forward[i].key <= key) {
      if (current.forward[i].key === key) {
        return current.forward[i].value;
      }
      current = current.forward[i];
    }
  }

  return null;
};
SkipList.prototype.delete = function(key) {
  const update = new Array(this.level + 1);
  let current = this.head;

  for (let i = this.level; i >= 0; i--) {
    while (current.forward[i] && current.forward[i].key < key) {
      current = current.forward[i];
    }
    update[i] = current;
  }

  current = current.forward[0];

  if (current && current.key === key) {
    for (let i = 0; i <= this.level; i++) {
      if (update[i].forward[i] !== current)
        break;
      update[i].forward[i] = current.forward[i];
    }

    while (this.level > 0 && this.head.forward[this.level] === null) {
      this.level--;
    }
  }
};
SkipList.prototype.randomLevel = function() {
  const p = 0.5;
  let level = 0;
  while (Math.random() < p && level < 32) {
    level++;
  }
  return level;
};
SkipList.prototype.print = function() {
  let current = this.head;

  while (current.forward[0]) {
    console.log(`Key: ${current.forward[0].key}, Value: ${current.forward[0].value}`);
    current = current.forward[0];
  }
};
const sl = new SkipList();
sl.insert(5, 'Value 5');
sl.insert(3, 'Value 3');
sl.insert(8, 'Value 8');
sl.insert(1, 'Value 1');
sl.insert(7, 'Value 7');
sl.print(); // It will print the key-value pairs in ascending order of the keys
console.log(sl.search(3)); // Output: Value 3
sl.delete(1);
console.log(sl.search(1)); // Output: null
