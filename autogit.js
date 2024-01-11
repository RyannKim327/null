// Create a TrieNode class
class TrieNode {
  constructor() {
    this.children = {}; // mapping of character -> TrieNode
    this.isWord = false; // whether the node represents the end of a word
  }
}

// Create a Trie class
class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  // Insert a word into the trie
  insert(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      const ch = word[i];
      if (!(ch in node.children)) {
        node.children[ch] = new TrieNode();
      }
      node = node.children[ch];
    }
    node.isWord = true;
  }

  // Search for a word in the trie
  search(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      const ch = word[i];
      if (!(ch in node.children)) {
        return false;
      }
      node = node.children[ch];
    }
    return node.isWord;
  }

  // Determine if any word in the trie starts with the given prefix
  startsWith(prefix) {
    let node = this.root;
    for (let i = 0; i < prefix.length; i++) {
      const ch = prefix[i];
      if (!(ch in node.children)) {
        return false;
      }
      node = node.children[ch];
    }
    return true;
  }
}

// Example usage
const trie = new Trie();
trie.insert("apple");
trie.insert("banana");
console.log(trie.search("apple")); // true
console.log(trie.search("banana")); // true
console.log(trie.search("orange")); // false
console.log(trie.startsWith("app")); // true
console.log(trie.startsWith("ora")); // false
