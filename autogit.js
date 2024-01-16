class TrieNode {
  constructor() {
    this.value = null;
    this.isEndOfWord = false;
    this.children = new Map();
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
        const newNode = new TrieNode();
        newNode.value = char;
        currentNode.children.set(char, newNode);
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
trie.insert("application");
trie.insert("banana");

console.log(trie.search("apple")); // true
console.log(trie.search("app")); // false
console.log(trie.startsWith("app")); // true
