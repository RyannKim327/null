interface TrieNode {
  value: any;
  children: { [key: string]: TrieNode };
}

class Trie {
  private root: TrieNode;

  constructor() {
    this.root = {};
  }

  insert(word: string, value: any) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = {};
      }
      node = node.children[char];
    }
    node.value = value;
  }

  search(word: string): any {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        return null;
      }
      node = node.children[char];
    }
    return node.value;
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

// Example usage:
let trie = new Trie();
trie.insert("apple", 10);
trie.insert("app", 20);
trie.insert("banana", 30);

console.log(trie.search("apple")); // 10
console.log(trie.search("app")); // 20
console.log(trie.search("banana")); // 30
console.log(trie.search("ban")); // null

console.log(trie.startsWith("app")); // true
console.log(trie.startsWith("ban")); // true
console.log(trie.startsWith("or")); // false
