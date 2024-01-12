class TrieNode {
  constructor() {
    this.children = new Map();
    this.isEnd = false;
  }

  setEnd() {
    this.isEnd = true;
  }

  isWordEnd() {
    return this.isEnd;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char);
    }
    node.setEnd();
  }

  search(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) {
        return false;
      }
      node = node.children.get(char);
    }
    return node.isWordEnd();
  }

  startsWith(prefix) {
    let node = this.root;
    for (const char of prefix) {
      if (!node.children.has(char)) {
        return false;
      }
      node = node.children.get(char);
    }
    return true;
  }
}
const trie = new Trie();

// Insert words
trie.insert("apple");
trie.insert("banana");
trie.insert("grape");
trie.insert("orange");

// Search for words
console.log(trie.search("apple")); // true
console.log(trie.search("grapefruit")); // false

// Check if prefix exists
console.log(trie.startsWith("ban")); // true
console.log(trie.startsWith("or")); // true
console.log(trie.startsWith("grap")); // false
