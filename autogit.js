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

  insert(word) {
    let currentNode = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!currentNode.children[char]) {
        currentNode.children[char] = new TrieNode();
      }
      currentNode = currentNode.children[char];
    }
    currentNode.isEndOfWord = true;
  }

  search(word) {
    let currentNode = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!currentNode.children[char]) {
        return false;
      }
      currentNode = currentNode.children[char];
    }
    return currentNode.isEndOfWord;
  }

  startsWith(prefix) {
    let currentNode = this.root;
    for (let i = 0; i < prefix.length; i++) {
      const char = prefix[i];
      if (!currentNode.children[char]) {
        return false;
      }
      currentNode = currentNode.children[char];
    }
    return true;
  }
}
const trie = new Trie();

trie.insert("apple");
trie.insert("application");
trie.insert("apply");

console.log(trie.search("apple")); // Output: true
console.log(trie.search("app"));   // Output: false

console.log(trie.startsWith("app")); // Output: true
console.log(trie.startsWith("xyz")); // Output: false
