class TrieNode {
  children: { [key: string]: TrieNode };
  isEndOfWord: boolean;

  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  private root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }

  search(word: string): boolean {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return node.isEndOfWord;
  }

  startsWith(prefix: string): boolean {
    let node = this.root;
    for (let char of prefix) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return true;
  }
}
const trie = new Trie();
trie.insert("apple");
trie.insert("banana");
trie.insert("app");

console.log(trie.search("apple")); // true
console.log(trie.search("banana")); // true
console.log(trie.search("app")); // true
console.log(trie.search("ap")); // false

console.log(trie.startsWith("ap")); // true
console.log(trie.startsWith("ban")); // true
console.log(trie.startsWith("or")); // false
