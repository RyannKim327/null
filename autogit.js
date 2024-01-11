class Node {
  constructor(start, end) {
    this.children = {};
    this.start = start;
    this.end = end;
  }
}
class SuffixTree {
  constructor() {
    this.root = new Node(-1, -1);
    this.inputString = '';
  }

  buildSuffixTree(input) {
    this.inputString = input;
    const n = input.length;

    for (let i = 0; i < n; i++) {
      this._addSuffix(this.root, i, n);
    }
  }

  _addSuffix(currNode, suffixStart, suffixEnd) {
    if (suffixStart >= suffixEnd) {
      return;
    }

    const currChar = this.inputString[suffixStart];

    if (!currNode.children[currChar]) {
      currNode.children[currChar] = new Node(suffixStart, suffixEnd);
    } else {
      const childNode = currNode.children[currChar];
      let i = suffixStart;
      let j = childNode.start;

      while (i < suffixEnd && j < childNode.end && this.inputString[i] === this.inputString[j]) {
        i++;
        j++;
      }

      if (j === childNode.end) {
        this._addSuffix(childNode, i, suffixEnd);
      } else {
        const commonNode = new Node(childNode.start, j);

        childNode.start = j;

        currNode.children[currChar] = commonNode;
        commonNode.children[this.inputString[j]] = childNode;

        this._addSuffix(commonNode, i, suffixEnd);
      }
    }
  }

  searchSubstring(substring) {
    const n = substring.length;
    let currNode = this.root;

    for (let i = 0; i < n; i++) {
      const currChar = substring[i];
      if (currNode.children[currChar]) {
        currNode = currNode.children[currChar];
      } else {
        return false;
      }
    }

    return true;
  }
}
const suffixTree = new SuffixTree();
suffixTree.buildSuffixTree('banana');

console.log(suffixTree.searchSubstring('ana')); // true
console.log(suffixTree.searchSubstring('nan')); // true
console.log(suffixTree.searchSubstring('peach')); // false
true
true
false
