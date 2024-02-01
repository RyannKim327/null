class Node {
  constructor(substring) {
    this.substring = substring; // substring represented by the node
    this.children = {}; // child nodes
  }
}
class SuffixTree {
  constructor() {
    this.root = new Node("");
  }

  // Implement tree construction and search methods here
}
class SuffixTree {
  // ...

  buildTree(input) {
    for (let i = 0; i < input.length; i++) {
      this.addSuffix(input.substring(i));
    }
  }

  addSuffix(suffix) {
    let currentNode = this.root;
    for (let i = 0; i < suffix.length; i++) {
      const char = suffix[i];
      if (!currentNode.children[char]) {
        currentNode.children[char] = new Node(suffix.substring(i));
        return;
      }
      const childNode = currentNode.children[char];
      const substring = childNode.substring;
      let j = 0;
      while (j < substring.length && j < suffix.length && substring[j] === suffix[i + j]) {
        j++;
      }
      if (j === substring.length) {
        currentNode = childNode;
        continue;
      }
      const oldSubstring = substring;
      childNode.substring = substring.substring(0, j);
      const newNode = new Node(oldSubstring.substring(j));
      newNode.children[suffix[i + j]] = new Node(suffix.substring(i + j));
      newNode.children[substring[j]] = childNode;
      childNode.substring = substring.substring(j);
      currentNode.children[char] = newNode;
      return;
    }
  }

  // ...
}
class SuffixTree {
  // ...

  searchSubstring(substring) {
    let currentNode = this.root;
    let i = 0;
    while (i < substring.length) {
      const char = substring[i];
      if (!currentNode.children[char]) return false;
      const childNode = currentNode.children[char];
      const nodeSubstring = childNode.substring;
      let j = 0;
      while (j < nodeSubstring.length && i < substring.length && nodeSubstring[j] === substring[i]) {
        i++;
        j++;
      }
      if (j === nodeSubstring.length) {
        currentNode = childNode;
      } else {
        return false;
      }
    }
    return true;
  }

  // ...
}
const suffixTree = new SuffixTree();
suffixTree.buildTree("banana");

console.log(suffixTree.searchSubstring("ana")); // true
console.log(suffixTree.searchSubstring("apple")); // false
