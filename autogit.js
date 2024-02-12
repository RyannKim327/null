class TrieNode {
  constructor(value = null) {
    this.value = value;
    this.children = new Map();
    this.isEndOfWord = false;
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

      if (!currentNode.children.has(char)) {
        currentNode.children.set(char, new TrieNode(char));
      }

      currentNode = currentNode.children.get(char);
    }

    currentNode.isEndOfWord = true;
  }

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

trie.insert("apple");
trie.insert("banana");
trie.insert("orange");

console.log(trie.search("apple"));   // true
console.log(trie.search("banana"));  // true
console.log(trie.search("orange"));  // true
console.log(trie.search("grape"));   // false

console.log(trie.startsWith("app"));     // true
console.log(trie.startsWith("ban"));     // true
console.log(trie.startsWith("orange"));  // true
console.log(trie.startsWith("gr"));      // false
