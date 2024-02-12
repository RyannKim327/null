class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }

  insert(word) {
    let current = this;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!current.children[char]) {
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
      if (!current.children[char]) {
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
      if (!current.children[char]) {
        return false;
      }
      current = current.children[char];
    }
    return true;
  }
}

// Example usage:
const trie = new TrieNode();
trie.insert("apple");
console.log(trie.search("apple")); // true
console.log(trie.search("app")); // false
console.log(trie.startsWith("app")); // true
trie.insert("app");
console.log(trie.search("app")); // true
