class TrieNode {
  constructor() {
    this.isEndOfWord = false;
    this.children = new Map(); // or use an object: {}
  }
}
class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  // Method to insert a word into the trie
  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char);
    }
    node.isEndOfWord = true;
  }

  // Method to search for a word in the trie
  search(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children.has(char)) {
        return false;
      }
      node = node.children.get(char);
    }
    return node.isEndOfWord;
  }

  // Method to delete a word from the trie
  delete(word) {
    this._deleteRecursive(word, this.root, 0);
  }

  _deleteRecursive(word, currentNode, index) {
    if (index === word.length) {
      currentNode.isEndOfWord = false;
      return;
    }
    const char = word[index];
    if (!currentNode.children.has(char)) {
      return;
    }
    const nextNode = currentNode.children.get(char);
    this._deleteRecursive(word, nextNode, index + 1);

    if (Object.keys(nextNode.children).length === 0 && !nextNode.isEndOfWord) {
      currentNode.children.delete(char);
    }
  }
}
const trie = new Trie();
trie.insert("apple");
trie.insert("banana");
trie.insert("apply"); // Note: "apply" is not the same word as "apple"

console.log(trie.search("apple"));   // Output: true
console.log(trie.search("banana"));  // Output: true
console.log(trie.search("apply"));   // Output: true
console.log(trie.search("appl"));    // Output: false
console.log(trie.search("orange"));  // Output: false

trie.delete("apple");
console.log(trie.search("apple"));   // Output: false
