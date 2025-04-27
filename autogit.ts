class TrieNode {
  children: Map<string, TrieNode>;
  isEndOfWord: boolean;

  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
  }
}

class Trie {
  private root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  // Insert a word into the trie
  insert(word: string): void {
    let currentNode = this.root;
    for (const char of word) {
      if (!currentNode.children.has(char)) {
        currentNode.children.set(char, new TrieNode());
      }
      currentNode = currentNode.children.get(char)!;
    }
    currentNode.isEndOfWord = true;
  }

  // Search for a complete word
  search(word: string): boolean {
    let currentNode = this.root;
    for (const char of word) {
      if (!currentNode.children.has(char)) {
        return false;
      }
      currentNode = currentNode.children.get(char)!;
    }
    return currentNode.isEndOfWord;
  }

  // Check if any words start with the prefix
  startsWith(prefix: string): boolean {
    let currentNode = this.root;
    for (const char of prefix) {
      if (!currentNode.children.has(char)) {
        return false;
      }
      currentNode = currentNode.children.get(char)!;
    }
    return true;
  }

  // Optional: Get all words matching a prefix
  getWordsWithPrefix(prefix: string): string[] {
    let currentNode = this.root;
    for (const char of prefix) {
      if (!currentNode.children.has(char)) {
        return [];
      }
      currentNode = currentNode.children.get(char)!;
    }

    const results: string[] = [];

    function dfs(node: TrieNode, path: string) {
      if (node.isEndOfWord) {
        results.push(path);
      }
      for (const [char, childNode] of node.children) {
        dfs(childNode, path + char);
      }
    }

    dfs(currentNode, prefix);
    return results;
  }
}
const trie = new Trie();
trie.insert("hello");
trie.insert("helium");
trie.insert("happy");

console.log(trie.search("hello")); // true
console.log(trie.search("hel")); // false
console.log(trie.startsWith("hel")); // true
console.log(trie.getWordsWithPrefix("he")); // ['hello', 'helium']
