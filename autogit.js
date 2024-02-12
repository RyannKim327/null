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

  insert(word) {
    let currentNode = this.root;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      let node = currentNode.children.get(char);

      if (!node) {
        node = new TrieNode();
        currentNode.children.set(char, node);
      }

      currentNode = node;
    }

    currentNode.isEndOfWord = true;
  }

  search(word) {
    let currentNode = this.root;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      const node = currentNode.children.get(char);

      if (!node) {
        return false;
      }

      currentNode = node;
    }

    return currentNode.isEndOfWord;
  }

  startsWith(prefix) {
    let currentNode = this.root;

    for (let i = 0; i < prefix.length; i++) {
      const char = prefix[i];
      const node = currentNode.children.get(char);

      if (!node) {
        return false;
      }

      currentNode = node;
    }

    return true;
  }
}
const trie = new Trie();

trie.insert("apple");
trie.insert("banana");
trie.insert("app");

console.log(trie.search("apple")); // true
console.log(trie.search("app")); // true
console.log(trie.search("banana")); // true
console.log(trie.search("ap")); // false

console.log(trie.startsWith("app")); // true
console.log(trie.startsWith("ban")); // true
console.log(trie.startsWith("bat")); // false
