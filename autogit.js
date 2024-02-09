// TrieNode class
class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

// Trie class
class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  // Inserts a word into the trie.
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

  // Returns true if the word is in the trie, false otherwise.
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

  // Returns true if there is any word in the trie that starts with the given prefix.
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
trie.insert('apple');
console.log(trie.search('apple')); // true
console.log(trie.search('app')); // false
console.log(trie.startsWith('app')); // true
trie.insert('app');
console.log(trie.search('app')); // true
