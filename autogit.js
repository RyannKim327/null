class TrieNode {
  constructor() {
    this.value = null;
    this.children = {};
    this.isEndOfWord = false;
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
    current.isEndOfWord = true;
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
    return current.isEndOfWord;
  }

  delete(word) {
    function deleteHelper(node, word, index) {
      if (index === word.length) {
        node.isEndOfWord = false;
        return Object.keys(node.children).length === 0;
      }

      const char = word[index];
      if (!node.children[char]) {
        return false;
      }

      const shouldDeleteNode = deleteHelper(node.children[char], word, index + 1);

      if (shouldDeleteNode) {
        delete node.children[char];
        return Object.keys(node.children).length === 0;
      }

      return false;
    }

    deleteHelper(this.root, word, 0);
  }
}
const trie = new Trie();

trie.insert("hello");
trie.insert("world");

console.log(trie.search("hello"));  // Output: true
console.log(trie.search("world"));  // Output: true
console.log(trie.search("hell"));   // Output: false

trie.delete("world");

console.log(trie.search("world"));  // Output: false
