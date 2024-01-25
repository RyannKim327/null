class Node {
  constructor(value) {
    this.value = value;
    this.children = {};
    this.isEndOfWord = false;
  }
}
class Trie {
  constructor() {
    this.root = new Node('');
  }
}
insert(word) {
  let node = this.root;
  for (let char of word) {
    if (!node.children[char]) {
      node.children[char] = new Node(char);
    }
    node = node.children[char];
  }
  node.isEndOfWord = true;
}
search(word) {
  let node = this.root;
  for (let char of word) {
    if (!node.children[char]) {
      return false;
    }
    node = node.children[char];
  }
  return node.isEndOfWord;
}
startsWith(prefix) {
  let node = this.root;
  for (let char of prefix) {
    if (!node.children[char]) {
      return false;
    }
    node = node.children[char];
  }
  return true;
}
const trie = new Trie();
trie.insert('apple');
console.log(trie.search('apple')); // Output: true
console.log(trie.search('app'));   // Output: false
console.log(trie.startsWith('app')); // Output: true
