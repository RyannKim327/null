class Node {
  constructor() {
    this.label = '';
    this.children = {};
  }
}
class SuffixTree {
  constructor() {
    this.root = new Node();
  }

  // Implement additional methods here
}
class SuffixTree {
  constructor() {
    this.root = new Node();
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
        currentNode.label += currentChar;
      }
    }
  }
}
const suffixTree = new SuffixTree();
suffixTree.insert('banana');

console.log(suffixTree.root.children['b'].children['a'].children['n'].children['a']); // Output: Node { label: 'na', children: {} }
console.log(suffixTree.root.children['b'].children['a']); // Output: Node { label: 'a', children: { n: Node { label: 'na', children: {} } } }
