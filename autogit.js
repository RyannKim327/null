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

  // Method to insert a word into the trie
  insert(word) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!current.children.has(char)) {
        const newNode = new TrieNode();
        newNode.value = char;
        current.children.set(char, newNode);
      }
      current = current.children.get(char);
    }
    current.isEndOfWord = true;
  }

  // Method to search for a word in the trie
  search(word) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!current.children.has(char)) {
        return false;
      }
      current = current.children.get(char);
    }
    return current.isEndOfWord;
  }

  // Method to delete a word from the trie
  delete(word) {
    const deleteHelper = (node, index) => {
      if (index === word.length) {
        node.isEndOfWord = false;
        return node.children.size === 0;
      }

      const char = word[index];
      const nextNode = node.children.get(char);
      if (!nextNode) return false;

      const shouldDeleteChild = deleteHelper(nextNode, index + 1);
      if (shouldDeleteChild) {
        node.children.delete(char);
        return node.children.size === 0;
      }

      return false;
    };

    deleteHelper(this.root, 0);
  }
}
// Usage
const trie = new Trie();

trie.insert("apple");
trie.insert("banana");
trie.insert("orange");

console.log(trie.search("apple")); // true
console.log(trie.search("banana")); // true
console.log(trie.search("orange")); // true
console.log(trie.search("grape")); // false

trie.delete("apple");
console.log(trie.search("apple")); // false
