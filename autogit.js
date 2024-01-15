class Node {
  constructor() {
    this.children = {};
  }
}
class SuffixTree {
  constructor() {
    this.root = new Node();
  }

  // Implementation methods go here
}
insert(word) {
  for (let i = 0; i < word.length; i++) {
    let currentNode = this.root;
    for (let j = i; j < word.length; j++) {
      const currentChar = word[j];
      if (!currentNode.children[currentChar]) {
        currentNode.children[currentChar] = new Node();
      }
      currentNode = currentNode.children[currentChar];
      // You can perform additional operations on currentNode if needed
    }
  }
}
search(substring) {
  let currentNode = this.root;
  for (let i = 0; i < substring.length; i++) {
    const currentChar = substring[i];
    if (!currentNode.children[currentChar]) {
      return false; // Substring not found
    }
    currentNode = currentNode.children[currentChar];
  }
  return true; // Substring found
}
