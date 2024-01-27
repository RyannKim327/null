class Node {
  constructor(value) {
    this.value = value;
    this.children = {};
    this.isWord = false;
  }
}
class Trie {
  constructor() {
    this.root = new Node("");
  }

  // Other methods will go here
}
insert(word) {
  let node = this.root;
  for (let char of word) {
    if (!node.children[char]) {
      node.children[char] = new Node(char);
    }
    node = node.children[char];
  }
  node.isWord = true;
}
search(word) {
  let node = this.root;
  for (let char of word) {
    if (!node.children[char]) {
      return false;
    }
    node = node.children[char];
  }
  return node.isWord;
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
const myTrie = new Trie();
myTrie.insert("apple");
myTrie.insert("banana");
console.log(myTrie.search("apple")); // true
console.log(myTrie.search("banana")); // true
console.log(myTrie.startsWith("app")); // true
console.log(myTrie.startsWith("ban")); // true
console.log(myTrie.search("orange")); // false
console.log(myTrie.startsWith("ora")); // false
