class Node {
  constructor() {
    this.value = '';
    this.isEndOfWord = false;
    this.children = {};
  }
}
class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word) {
    let currentNode = this.root;
    
    for (let i = 0; i < word.length; i++) {
      const char = word[i];

      if (!currentNode.children[char]) {
        currentNode.children[char] = new Node();
        currentNode.children[char].value = char;
      }

      currentNode = currentNode.children[char];
    }

    currentNode.isEndOfWord = true;
  }

  search(word) {
    let currentNode = this.root;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];

      if (!currentNode.children[char]) {
        return false;
      }

      currentNode = currentNode.children[char];
    }

    return currentNode.isEndOfWord;
  }

  delete(word) {
    const deleteHelper = (node, word, index) => {
      if (index === word.length) {
        node.isEndOfWord = false;

        // If the node has no children, it can be safely deleted
        return Object.keys(node.children).length === 0;
      }

      const char = word[index];

      if (!node.children[char]) {
        return false; // Word does not exist in trie
      }

      const canDeleteNode = deleteHelper(node.children[char], word, index + 1);

      if (canDeleteNode) {
        delete node.children[char];

        // If the node has no children and is not the end of a word, it can be safely deleted
        return !node.isEndOfWord && Object.keys(node.children).length === 0;
      }

      return false;
    };

    deleteHelper(this.root, word, 0);
  }
}
const trie = new Trie();

trie.insert('apple');
trie.insert('banana');
console.log(trie.search('apple')); // Output: true
console.log(trie.search('banana')); // Output: true
console.log(trie.search('orange')); // Output: false

trie.delete('apple');
console.log(trie.search('apple')); // Output: false
