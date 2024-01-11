// TrieNode class
class TrieNode {
  constructor() {
    this.children = new Map(); // Map of character to TrieNode
    this.isEndOfWord = false; // Indicates if the node represents the end of a word
  }
}

// Trie class
class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  // Insert a word into the trie
  insert(word) {
    let currentNode = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!currentNode.children.has(char)) {
        currentNode.children.set(char, new TrieNode());
      }
      currentNode = currentNode.children.get(char);
    }
    currentNode.isEndOfWord = true;
  }

  // Search for a word in the trie
  search(word) {
    let currentNode = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!currentNode.children.has(char)) {
        return false;
      }
      currentNode = currentNode.children.get(char);
    }
    return currentNode.isEndOfWord;
  }

  // Check if the trie has any word starting with the given prefix
  startsWith(prefix) {
    let currentNode = this.root;
    for (let i = 0; i < prefix.length; i++) {
      const char = prefix[i];
      if (!currentNode.children.has(char)) {
        return false;
      }
      currentNode = currentNode.children.get(char);
    }
    return true;
  }
}
const trie = new Trie();

trie.insert('apple');
trie.insert('banana');
trie.insert('book');
trie.insert('bat');
trie.insert('ball');

console.log(trie.search('apple')); // true
console.log(trie.search('banana')); // true
console.log(trie.search('book')); // true
console.log(trie.search('bat')); // true
console.log(trie.search('ball')); // true
console.log(trie.search('bad')); // false

console.log(trie.startsWith('ba')); // true
console.log(trie.startsWith('bo')); // true
console.log(trie.startsWith('a')); // true
console.log(trie.startsWith('bat')); // true
console.log(trie.startsWith('ballo')); // false
