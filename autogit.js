class TrieNode {
  constructor(value) {
    this.value = value;
    this.isEndOfWord = false;
    this.children = new Map();
  }
}
class Trie {
  constructor() {
    this.root = new TrieNode('');
  }
}
Trie.prototype.insert = function(word) {
  let node = this.root;

  for (let i = 0; i < word.length; i++) {
    const char = word[i];

    if (!node.children.has(char)) {
      node.children.set(char, new TrieNode(char));
    }

    node = node.children.get(char);
  }

  // Mark the end of the inserted word
  node.isEndOfWord = true;
};
Trie.prototype.search = function(word) {
  let node = this.root;

  for (let i = 0; i < word.length; i++) {
    const char = word[i];

    if (!node.children.has(char)) {
      return false;
    }

    node = node.children.get(char);
  }

  // Check if the last node marks the end of a word
  return node.isEndOfWord;
};
Trie.prototype.startsWith = function(prefix) {
  let node = this.root;

  for (let i = 0; i < prefix.length; i++) {
    const char = prefix[i];

    if (!node.children.has(char)) {
      return false;
    }

    node = node.children.get(char);
  }

  return true;
};
class TrieNode {
  constructor(value) {
    this.value = value;
    this.isEndOfWord = false;
    this.children = new Map();
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode('');
  }

  insert(word) {
    let node = this.root;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];

      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode(char));
      }

      node = node.children.get(char);
    }

    node.isEndOfWord = true;
  }

  search(word) {
    let node = this.root;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];

      if (!node.children.has(char)) {
        return false;
      }

      node = node.children.get(char);
    }

    return node.isEndOfWord;
  }

  startsWith(prefix) {
    let node = this.root;

    for (let i = 0; i < prefix.length; i++) {
      const char = prefix[i];

      if (!node.children.has(char)) {
        return false;
      }

      node = node.children.get(char);
    }

    return true;
  }
}

// Example Usage

const trie = new Trie();
trie.insert("apple");
trie.insert("banana");
trie.insert("orange");

console.log(trie.search("apple"));    // true
console.log(trie.search("grape"));    // false

console.log(trie.startsWith("app"));  // true
console.log(trie.startsWith("appl")); // true
console.log(trie.startsWith("gr"));   // false
