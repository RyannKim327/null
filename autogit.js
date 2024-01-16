class TrieNode {
  constructor(value) {
    this.value = value;
    this.isWord = false;
    this.children = {};
  }
}
class Trie {
  constructor() {
    this.root = new TrieNode(null);
  }

  insert(word) {
    let currentNode = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!currentNode.children[char]) {
        currentNode.children[char] = new TrieNode(char);
      }
      currentNode = currentNode.children[char];
    }
    currentNode.isWord = true;
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
    return currentNode.isWord;
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
trie.insert("banana");
trie.insert("app");
console.log(trie.search("apple")); // true
console.log(trie.search("app")); // true
console.log(trie.search("ap")); // false
console.log(trie.search("banana")); // true
console.log(trie.search("bananas")); // false
console.log(trie.startsWith("app")); // true
console.log(trie.startsWith("ban")); // true
console.log(trie.startsWith("banz")); // false
