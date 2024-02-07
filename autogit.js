class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }

  insert(word) {
    let current = this;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!(char in current.children)) {
        current.children[char] = new TrieNode();
      }
      current = current.children[char];
    }
    current.isEndOfWord = true;
  }

  search(word) {
    let current = this;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!(char in current.children)) {
        return false;
      }
      current = current.children[char];
    }
    return current.isEndOfWord;
  }

  startsWith(prefix) {
    let current = this;
    for (let i = 0; i < prefix.length; i++) {
      const char = prefix[i];
      if (!(char in current.children)) {
        return false;
      }
      current = current.children[char];
    }
    return true;
  }
}
const trie = new TrieNode();

// Insert words into the trie
trie.insert("apple");
trie.insert("banana");
trie.insert("car");

// Search for a word
console.log(trie.search("apple")); // true
console.log(trie.search("orange")); // false

// Check if a prefix exists
console.log(trie.startsWith("app")); // true
console.log(trie.startsWith("ora")); // false
