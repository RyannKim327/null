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

  // Method to insert a word into the trie
  insert(word) {
    let currentNode = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!currentNode.children.has(char)) {
        currentNode.children.set(char, new TrieNode());
      }
      currentNode = currentNode.children.get(char);
    }
    currentNode.isEndOfWord = true;
  }

  // Method to search for a word in the trie
  search(word) {
    let currentNode = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!currentNode.children.has(char)) {
        return false;
      }
      currentNode = currentNode.children.get(char);
    }
    return currentNode.isEndOfWord;
  }

  // Method to check if a node has any children
  hasChildren(node) {
    return node.children.size !== 0;
  }

  // Method to delete a word from the trie
  delete(word, currentNode = this.root, index = 0) {
    if (index === word.length) {
      if (!currentNode.isEndOfWord) {
        return false; // Word doesn't exist in the trie
      }
      currentNode.isEndOfWord = false;

      // If the current node has no children, return true to indicate that it can be deleted
      return this.hasChildren(currentNode) ? false : true;
    }

    const char = word[index];
    if (!currentNode.children.has(char)) {
      return false; // Word doesn't exist in the trie
    }

    const childNode = currentNode.children.get(char);
    const canDeleteNode = this.delete(word, childNode, index + 1);

    if (canDeleteNode) {
      currentNode.children.delete(char);
      return this.hasChildren(currentNode) ? false : true;
    }

    return false;
  }
}
const trie = new Trie();
trie.insert("apple");
trie.insert("banana");
trie.insert("app");
console.log(trie.search("apple")); // true
console.log(trie.search("app")); // true
console.log(trie.search("pear")); // false
console.log(trie.delete("app")); // true
console.log(trie.search("app")); // false
