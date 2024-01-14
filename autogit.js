class TrieNode {
  constructor() {
    this.children = {};
    this.endOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!current.children[char]) {
        current.children[char] = new TrieNode();
      }
      current = current.children[char];
    }
    current.endOfWord = true;
  }

  search(word) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!current.children[char]) {
        return false;
      }
      current = current.children[char];
    }
    return current.endOfWord;
  }

  startsWith(prefix) {
    let current = this.root;
    for (let i = 0; i < prefix.length; i++) {
      const char = prefix[i];
      if (!current.children[char]) {
        return false;
      }
      current = current.children[char];
    }
    return true;
  }

  delete(word) {
    this._deleteRecursive(this.root, word, 0);
  }

  _deleteRecursive(current, word, index) {
    if (index === word.length) {
      if (!current.endOfWord) {
        return false; // Word doesn't exist
      }
      current.endOfWord = false;
      return Object.keys(current.children).length === 0; // Check if the current node has no other children
    }

    const char = word[index];
    if (!current.children[char]) {
      return false; // Word doesn't exist
    }

    const shouldDeleteCurrentNode = this._deleteRecursive(
      current.children[char],
      word,
      index + 1
    );

    if (shouldDeleteCurrentNode) {
      delete current.children[char];
      return Object.keys(current.children).length === 0; // Check if the current node has no other children after deletion
    }

    return false;
  }
}
const trie = new Trie();

trie.insert("apple");
trie.insert("banana");
trie.insert("app");

console.log(trie.search("apple")); // true
console.log(trie.search("app")); // true
console.log(trie.search("banana")); // true
console.log(trie.search("orange")); // false

console.log(trie.startsWith("app")); // true
console.log(trie.startsWith("ban")); // true
console.log(trie.startsWith("ora")); // false

trie.delete("apple");
console.log(trie.search("apple")); // false
console.log(trie.search("app")); // true
