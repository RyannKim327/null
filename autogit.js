class TrieNode {
  constructor() {
    this.isWord = false;
    this.children = {};
  }
}
class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isWord = true;
  }

  search(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return node.isWord;
  }

  startsWith(prefix) {
    let node = this.root;
    for (let char of prefix) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return true;
  }
}
const trie = new Trie();

// Insert some words into the trie
trie.insert("hello");
trie.insert("world");

// Search for a word
console.log(trie.search("hello")); // true
console.log(trie.search("hi")); // false

// Check if a prefix exists
console.log(trie.startsWith("hell")); // true
console.log(trie.startsWith("word")); // false
