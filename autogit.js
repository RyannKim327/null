class SkipNode {
  constructor(key = null, value = null, level = 0) {
    this.key = key;
    this.value = value;
    this.next = new Array(level + 1);
  }
}
class SkipList {
  constructor() {
    this.head = new SkipNode();
    this.maxLevel = 0;
  }
  
  // Generate a random level for a new node
  randomLevel() {
    let level = 0;
    while (Math.random() < 0.5 && level < this.maxLevel + 1) {
      level++;
    }
    return level;
  }
  
  // Insert a key-value pair into the skip list
  insert(key, value) {
    const update = new Array(this.maxLevel + 1);
    let currentNode = this.head;
    
    for (let i = this.maxLevel; i >= 0; i--) {
      while (currentNode.next[i] != null && currentNode.next[i].key < key) {
        currentNode = currentNode.next[i];
      }
      update[i] = currentNode;
    }
    
    currentNode = currentNode.next[0];
    
    if (currentNode != null && currentNode.key === key) {
      currentNode.value = value;
      return;
    }
    
    const level = this.randomLevel();
    
    if (level > this.maxLevel) {
      for (let i = this.maxLevel + 1; i <= level; i++) {
        update[i] = this.head;
      }
      this.maxLevel = level;
    }
    
    const newNode = new SkipNode(key, value, level);
    for (let i = 0; i <= level; i++) {
      newNode.next[i] = update[i].next[i];
      update[i].next[i] = newNode;
    }
  }
  
  // Search for a key in the skip list and return its value
  search(key) {
    let currentNode = this.head;
    
    for (let i = this.maxLevel; i >= 0; i--) {
      while (currentNode.next[i] && currentNode.next[i].key <= key) {
        if (currentNode.next[i].key === key) {
          return currentNode.next[i].value;
        }
        currentNode = currentNode.next[i];
      }
    }
    
    return null;
  }
  
  // Remove a key-value pair from the skip list
  remove(key) {
    const update = new Array(this.maxLevel + 1);
    let currentNode = this.head;
    
    for (let i = this.maxLevel; i >= 0; i--) {
      while (currentNode.next[i] != null && currentNode.next[i].key < key) {
        currentNode = currentNode.next[i];
      }
      update[i] = currentNode;
    }
    
    currentNode = currentNode.next[0];
    
    if (currentNode != null && currentNode.key === key) {
      for (let i = 0; i <= this.maxLevel; i++) {
        if (update[i].next[i] !== currentNode) {
          break;
        }
        update[i].next[i] = currentNode.next[i];
      }
    }
  }
}
// Create a new skip list
const skipList = new SkipList();

// Insert key-value pairs
skipList.insert(3, 'Apple');
skipList.insert(6, 'Banana');
skipList.insert(2, 'Orange');
skipList.insert(4, 'Mango');

// Search for a key and retrieve its value
console.log(skipList.search(6));  // Output: 'Banana'

// Remove a key from the skip list
skipList.remove(6);

// Search for the removed key
console.log(skipList.search(6));  // Output: null
