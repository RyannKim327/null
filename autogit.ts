class TrieNode {
  children: Map<string, TrieNode>;
  isEndOfWord: boolean;

  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
  }
}

class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

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

  // Optional: Collect all words with a given prefix
  getWordsWithPrefix(prefix: string): string[] {
    const results: string[] = [];
    let currentNode = this.root;

    // Traverse down to the end of the prefix
    for (const char of prefix) {
      if (!currentNode.children.has(char)) {
        return []; // No words with this prefix
      }
      currentNode = currentNode.children.get(char)!;
    }

    // Recursive function to explore subtree
    const dfs = (node: TrieNode, path: string) => {
      if (node.isEndOfWord) {
        results.push(path);
      }
      for (const [char, childNode] of node.children.entries()) {
        dfs(childNode, path + char);
      }
    }

    dfs(currentNode, prefix);
    return results;
  }
}
const trie = new Trie();
trie.insert('apple');
trie.insert('app');
trie.insert('application');

console.log(trie.search('app')); // true
console.log(trie.search('appl')); // false
console.log(trie.startsWith('app')); // true
console.log(trie.getWordsWithPrefix('app')); // ['app', 'apple', 'application']
