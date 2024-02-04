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

  // Method to insert a word into the trie
  insert(word) {
    let current = this.root;

    for (let i = 0; i < word.length; i++) {
      const ch = word[i];
      let node = current.children.get(ch);

      if (!node) {
        node = new TrieNode();
        current.children.set(ch, node);
      }

      current = node;
    }

    current.isEndOfWord = true;
  }

  // Method to search for a word in the trie
  search(word) {
    let current = this.root;

    for (let i = 0; i < word.length; i++) {
      const ch = word[i];
      const node = current.children.get(ch);

      if (!node) {
        return false;
      }

      current = node;
    }

    return current.isEndOfWord;
  }

  // Method to check if a given prefix exists in the trie
  startsWith(prefix) {
    let current = this.root;

    for (let i = 0; i < prefix.length; i++) {
      const ch = prefix[i];
      const node = current.children.get(ch);

      if (!node) {
        return false;
      }

      current = node;
    }

    return true;
  }
}
const trie = new Trie();

trie.insert("apple");
trie.insert("abacus");
trie.insert("banana");

console.log(trie.search("apple")); // true
console.log(trie.search("app")); // false

console.log(trie.startsWith("app")); // true
console.log(trie.startsWith("bat")); // false
