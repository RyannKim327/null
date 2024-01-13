class TrieNode {
  constructor() {
    this.isEndOfWord = false;
    this.children = {};
  }
}
class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  // Insert a word into the Trie
  insert(word) {
    let current = this.root;

    for (let i = 0; i < word.length; i++) {
      const ch = word[i];
      if (!current.children[ch]) {
        current.children[ch] = new TrieNode();
      }
      current = current.children[ch];
    }

    current.isEndOfWord = true;
  }

  // Search for a word in the Trie
  search(word) {
    let current = this.root;

    for (let i = 0; i < word.length; i++) {
      const ch = word[i];
      if (!current.children[ch]) {
        return false;
      }
      current = current.children[ch];
    }

    return current.isEndOfWord;
  }

  // Check if a word has any prefix in the Trie
  startsWith(prefix) {
    let current = this.root;

    for (let i = 0; i < prefix.length; i++) {
      const ch = prefix[i];
      if (!current.children[ch]) {
        return false;
      }
      current = current.children[ch];
    }

    return true;
  }
}
const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple")); // Output: true
console.log(trie.search("app")); // Output: false
console.log(trie.startsWith("app")); // Output: true
trie.insert("app");
console.log(trie.search("app")); // Output: true
