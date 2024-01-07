class Node {
  constructor(start, end) {
    this.start = start;
    this.end = end;
    this.children = {};
  }
}
class SuffixTree {
  constructor(text) {
    this.text = text;
    this.root = new Node(-1, -1);
    this.build();
  }

  // Add your methods for finding substrings, searching, etc. here
}
SuffixTree.prototype.build = function () {
  const root = this.root;
  const text = this.text;

  for (let i = 0; i < text.length; i++) {
    let current = root;
    for (let j = i; j < text.length; j++) {
      const char = text[j];
      if (!current.children[char]) {
        current.children[char] = new Node(j, text.length - 1);
        break;
      }
      const child = current.children[char];
      const k = this.commonPrefix(text, child.start, child.end, i, j);
      if (k === child.end) {
        current = child;
      } else {
        const newInternal = new Node(child.start, k);
        const newLeaf = new Node(j, text.length - 1);
        child.start = k + 1;
        child.end = child.start + (child.end - child.start);
        newInternal.children[text[child.start]] = child;
        newInternal.children[text[newLeaf.start]] = newLeaf;
        current.children[char] = newInternal;
        break;
      }
    }
  }
};
SuffixTree.prototype.commonPrefix = function (text, start1, end1, start2, end2) {
  let k = 0;
  while (start1 + k <= end1 && start2 + k <= end2 && text[start1 + k] === text[start2 + k]) {
    k++;
  }
  return start1 + k - 1;
};
SuffixTree.prototype.search = function (pattern) {
  // Implement the search logic here
};

SuffixTree.prototype.getLongestRepeatedSubstring = function () {
  // Implement finding the longest repeated substring logic here
};

// Add more methods as needed
