class SuffixTree {
  constructor() {
    // Implementation goes here
  }

  // Methods go here
}
constructor() {
  this.root = {
    children: {},
  };
}
insert(word) {
  // Implementation goes here
}
for (let i = 0; i < word.length; i++) {
  // Implementation goes here
}
let currentNode = this.root;
for (let i = 0; i < word.length; i++) {
  const char = word[i];
  if (!currentNode.children[char]) {
    currentNode.children[char] = { children: {} };
  }
  currentNode = currentNode.children[char];
}
currentNode.children['$'] = { children: {} };
search(word) {
  // Implementation goes here
}
let currentNode = this.root;
for (let i = 0; i < word.length; i++) {
  const char = word[i];
  if (!currentNode.children[char]) {
    return false;
  }
  currentNode = currentNode.children[char];
}
return currentNode.children['$'] !== undefined;
class SuffixTree {
  constructor() {
    this.root = {
      children: {},
    };
  }

  insert(word) {
    let currentNode = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!currentNode.children[char]) {
        currentNode.children[char] = { children: {} };
      }
      currentNode = currentNode.children[char];
    }
    currentNode.children['$'] = { children: {} };
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
    return currentNode.children['$'] !== undefined;
  }
}
const suffixTree = new SuffixTree();
suffixTree.insert('banana');
suffixTree.insert('apple');
suffixTree.insert('orange');

console.log(suffixTree.search('ana')); // true
console.log(suffixTree.search('orange')); // true
console.log(suffixTree.search('berry')); // false
