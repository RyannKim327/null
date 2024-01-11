class Node {
  constructor() {
    this.children = {};
    this.startIndex = null;
    this.endIndex = null;
    this.parent = null;
  }
}
class SuffixTree {
  constructor() {
    this.root = new Node();
  }

  addSuffix(suffix) {
    let currentNode = this.root;
    let remainingSuffix = suffix;

    while (remainingSuffix.length > 0) {
      const firstChar = remainingSuffix[0];

      if (!currentNode.children[firstChar]) {
        // Create a new node for the suffix
        const newNode = new Node();
        currentNode.children[firstChar] = newNode;
        newNode.startIndex = suffix.length - remainingSuffix.length;
        newNode.endIndex = suffix.length - 1;
        newNode.parent = currentNode;
      } else {
        let node = currentNode.children[firstChar];
        let walkIndex;

        for (walkIndex = node.startIndex; walkIndex <= node.endIndex; walkIndex++) {
          // Find the longest common prefix
          if (suffix[walkIndex] !== remainingSuffix[walkIndex - node.startIndex]) {
            break;
          }
        }

        if (walkIndex === node.endIndex + 1) {
          // The suffix already exists in the tree, move to the next suffix
          currentNode = node;
          remainingSuffix = remainingSuffix.substring(node.endIndex - node.startIndex + 1);
          continue;
        }

        // Split the node and create a new node with the common prefix
        const splitNode = new Node();
        splitNode.startIndex = node.startIndex;
        splitNode.endIndex = walkIndex - 1;
        splitNode.parent = currentNode;
        node.startIndex = walkIndex;

        // Create a new leaf node for the current suffix
        const leafNode = new Node();
        leafNode.startIndex = suffix.length - remainingSuffix.length;
        leafNode.endIndex = suffix.length - 1;
        leafNode.parent = splitNode;

        // Update parent and child references
        currentNode.children[firstChar] = splitNode;
        splitNode.children[remainingSuffix[splitNode.startIndex]] = node;
        splitNode.children[remainingSuffix[leafNode.startIndex]] = leafNode;

        break;
      }
    }
  }

  buildTree(string) {
    for (let i = 0; i < string.length; i++) {
      this.addSuffix(string.substring(i));
    }
  }
}
const suffixTree = new SuffixTree();
suffixTree.buildTree("banana");

console.log(suffixTree);
{
  root: {
    children: {
      b: { ... },
      a: { ... },
      n: { ... }
    }
  }
}
