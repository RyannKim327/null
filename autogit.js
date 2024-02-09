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
    let current = this.root;

    for (let i = 0; i < word.length; i++) {
      const ch = word[i];
      if (!current.children[ch]) {
        current.children[ch] = new TrieNode();
      }
      current = current.children[ch];
    }

    current.isEndOfWord = true;
  }

  search(word) {
    let current = this.root;

    for (let i = 0; i < word.length; i++) {
      const ch = word[i];
      if (!current.children[ch]) {
        return false;
      }
      current = current.children[ch];
    }

    return current.isEndOfWord;
  }

  startsWith(prefix) {
    let current = this.root;

    for (let i = 0; i < prefix.length; i++) {
      const ch = prefix[i];
      if (!current.children[ch]) {
        return false;
      }
      current = current.children[ch];
    }

    return true;
  }
}
const trie = new Trie();
trie.insert("apple");
trie.insert("banana");
console.log(trie.search("apple")); // true
console.log(trie.search("banana")); // true
console.log(trie.search("orange")); // false
console.log(trie.startsWith("app")); // true
console.log(trie.startsWith("ora")); // false
