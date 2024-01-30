function TrieNode() {
  this.children = {};
  this.isEndOfWord = false;
  // Additional properties if needed
}
function Trie() {
  this.root = new TrieNode();
}
Trie.prototype.insert = function (word) {
  let node = this.root;
  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    if (!node.children[char]) {
      node.children[char] = new TrieNode();
    }
    node = node.children[char];
  }
  node.isEndOfWord = true;
};
Trie.prototype.search = function (word) {
  let node = this.root;
  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    if (!node.children[char]) {
      return false;
    }
    node = node.children[char];
  }
  return node.isEndOfWord;
};
Trie.prototype.startsWith = function (prefix) {
  let node = this.root;
  for (let i = 0; i < prefix.length; i++) {
    const char = prefix[i];
    if (!node.children[char]) {
      return false;
    }
    node = node.children[char];
  }
  return true;
};
