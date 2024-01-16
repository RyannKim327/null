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

  // Insert a word into the Trie
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

  // Search for a word in the Trie
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

  // Check if a word has any prefix in the Trie
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
trie.insert('application');
trie.insert('banana');

console.log(trie.search('apple')); // true
console.log(trie.search('app')); // false

console.log(trie.startsWith('app')); // true
console.log(trie.startsWith('an')); // false
