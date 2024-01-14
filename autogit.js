class Node {
  constructor() {
    this.children = {};  // stores child nodes
    this.startIndex = -1;  // represents the start index of the substring
    this.endIndex = -1;  // represents the end index of the substring
  }
}
class SuffixTree {
  constructor() {
    this.root = new Node();
    this.word = "";
  }

  // Method to build the suffix tree
  buildTree(word) {
    this.word = word;
    const n = word.length;

    for (let i = 0; i < n; i++) {
      let currentNode = this.root;
      const suffix = word.slice(i);

      for (let j = 0; j < suffix.length; j++) {
        const key = suffix[j];

        if (!(key in currentNode.children)) {
          const newNode = new Node();
          newNode.startIndex = i;
          newNode.endIndex = n - 1;
          currentNode.children[key] = newNode;
          return;
        }

        let nextNode = currentNode.children[key];
        let k = j + 1;

        // Traverse until no more characters are left in the edge label or a difference occurs
        while (k - j < nextNode.endIndex - nextNode.startIndex + 1 && suffix[k] === word[nextNode.startIndex + k - j]) {
          k++;
        }

        if (k - j === nextNode.endIndex - nextNode.startIndex + 1) {
          currentNode = nextNode;
        } else {
          const splitNode = new Node();
          splitNode.startIndex = nextNode.startIndex;
          splitNode.endIndex = nextNode.startIndex + k - j - 1;

          nextNode.startIndex += k - j;
          splitNode.children[word[nextNode.startIndex]] = nextNode;

          const newNode = new Node();
          newNode.startIndex = i;
          newNode.endIndex = n - 1;
          splitNode.children[word[i]] = newNode;

          currentNode.children[key] = splitNode;
          break;
        }
      }
    }
  }

  // Method to search for a pattern in the tree
  searchPattern(pattern) {
    let currentNode = this.root;
    let i = 0;

    while (i < pattern.length) {
      const key = pattern[i];

      if (!(key in currentNode.children)) {
        return false;
      }

      const node = currentNode.children[key];
      const labelEndIndex = node.endIndex;

      for (let j = node.startIndex; j <= labelEndIndex && i < pattern.length; j++) {
        if (this.word[j] !== pattern[i]) {
          return false;
        }
        i++;
      }

      if (i === pattern.length) {
        return true;
      }

      currentNode = node;
    }

    return false;
  }
}
const tree = new SuffixTree();
tree.buildTree("banana");

console.log(tree.searchPattern("ana"));  // Output: true
console.log(tree.searchPattern("bad"));  // Output: false
