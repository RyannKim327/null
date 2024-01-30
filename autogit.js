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
    let current = this.root;
    
    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      let node = current.children.get(char);

      if (!node) {
        node = new TrieNode();
        current.children.set(char, node);
      }

      current = node;
    }
    
    current.isEndOfWord = true;
  }

  search(word) {
    let current = this.root;

    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      let node = current.children.get(char);

      if (!node)
        return false;

      current = node;
    }

    return current.isEndOfWord;
  }
  
  startsWith(prefix) {
    let current = this.root;

    for (let i = 0; i < prefix.length; i++) {
      let char = prefix[i];
      let node = current.children.get(char);

      if (!node)
        return false;

      current = node;
    }

    return true;
  }
}
let trie = new Trie();

trie.insert("apple");
trie.insert("banana");
trie.insert("orange");

console.log(trie.search("apple")); // Output: true
console.log(trie.search("orange")); // Output: true
console.log(trie.search("grape")); // Output: false

console.log(trie.startsWith("app")); // Output: true
console.log(trie.startsWith("g")); // Output: false
