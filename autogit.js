class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!(char in node.children)) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }

  search(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!(char in node.children)) {
        return false;
      }
      node = node.children[char];
    }
    return node.isEndOfWord;
  }

  startsWith(prefix) {
    let node = this.root;
    for (let i = 0; i < prefix.length; i++) {
      const char = prefix[i];
      if (!(char in node.children)) {
        return false;
      }
      node = node.children[char];
    }
    return true;
  }
}
const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple"));  // Output: true
console.log(trie.search("app"));    // Output: false

trie.insert("app");
console.log(trie.search("app"));   // Output: true

console.log(trie.startsWith("app"));  // Output: true
console.log(trie.startsWith("apt"));  // Output: false
