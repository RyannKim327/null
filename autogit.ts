interface TrieNode<T> {
  value: T | null;
  children: { [key: string]: TrieNode<T> };
}

class Trie<T> {
  private root: TrieNode<T>;

  constructor() {
    this.root = { value: null, children: {} };
  }

  insert(key: string, value: T): void {
    let currentNode = this.root;
    for (let i = 0; i < key.length; i++) {
      const char = key[i];
      if (!currentNode.children[char]) {
        currentNode.children[char] = { value: null, children: {} };
      }
      currentNode = currentNode.children[char];
    }
    currentNode.value = value;
  }

  search(key: string): T | null {
    let currentNode = this.root;
    for (let i = 0; i < key.length; i++) {
      const char = key[i];
      if (!currentNode.children[char]) {
        return null;
      }
      currentNode = currentNode.children[char];
    }
    return currentNode.value;
  }

  startsWith(prefix: string): boolean {
    let currentNode = this.root;
    for (let i = 0; i < prefix.length; i++) {
      const char = prefix[i];
      if (!currentNode.children[char]) {
        return false;
      }
      currentNode = currentNode.children[char];
    }
    return true;
  }
}
const trie = new Trie<string>();
trie.insert("hello", "world");
trie.insert("hell", "yeah");
trie.insert("goodbye", "cruel");

console.log(trie.search("hello")); // Output: "world"
console.log(trie.search("hell")); // Output: "yeah"
console.log(trie.search("goodbye")); // Output: "cruel"
console.log(trie.search("foobar")); // Output: null

console.log(trie.startsWith("hel")); // Output: true
console.log(trie.startsWith("goo")); // Output: true
console.log(trie.startsWith("foo")); // Output: false
