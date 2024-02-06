class TrieNode {
  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
  }
}
class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  // Insert a word into the trie
  insert(word) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!current.children.has(char)) {
        current.children.set(char, new TrieNode());
      }
      current = current.children.get(char);
    }
    current.isEndOfWord = true;
  }

  // Search if a word exists in the trie
  search(word) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!current.children.has(char)) {
        return false;
      }
      current = current.children.get(char);
    }
    return current.isEndOfWord;
  }

  // Check if a word prefix exists in the trie
  startsWith(prefix) {
    let current = this.root;
    for (let i = 0; i < prefix.length; i++) {
      const char = prefix[i];
      if (!current.children.has(char)) {
        return false;
      }
      current = current.children.get(char);
    }
    return true;
  }
}
const trie = new Trie();
trie.insert("hello");
trie.insert("world");
console.log(trie.search("hello")); // Output: true
console.log(trie.search("world")); // Output: true
console.log(trie.startsWith("hell")); // Output: true
console.log(trie.startsWith("wor")); // Output: true
console.log(trie.search("help")); // Output: false
console.log(trie.startsWith("abc")); // Output: false
