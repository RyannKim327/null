class Node {
  constructor() {
    this.children = {};
    this.suffixLink = null;
    // Other properties...
  }
}
class SuffixTree {
  constructor() {
    this.root = new Node();
  }
}
class SuffixTree {
  // ...
  build(string) {
    for (let i = 0; i < string.length; i++) {
      this._extend(string.substring(i));
    }
  }

  _extend(suffix) {
    let node = this.root;
    let remainder = { value: 0 };

    for (let i = 0; i < suffix.length; i++) {
      remainder.value++;
      let suffixChar = suffix.charAt(i);

      while (remainder.value > 0) {
        let nextNode = node.children[suffixChar];

        if (!nextNode) {
          const leaf = new Node();
          node.children[suffixChar] = leaf;
          // Create a suffix link
          if (this.lastNewNode !== null) {
            this.lastNewNode.suffixLink = node;
            this.lastNewNode = null;
          }
        } else {
          if (this._walkDown(suffix, node, remainder, nextNode)) {
            continue;
          }
        }

        // Rule 2
        if (suffix.charAt(i) === suffix.charAt(i - remainder.value)) {
          if (this.lastNewNode !== null && node !== this.root) {
            this.lastNewNode.suffixLink = node;
            this.lastNewNode = null;
          }

          remainder.value--;
          break;
        }

        // Rule 3
        const splitNode = new Node();
        const nextNode = node.children[suffix.charAt(i - remainder.value)];
        splitNode.children[suffix.charAt(i)] = new Node();
        splitNode.children[suffix.charAt(i - remainder.value)] = nextNode;

        node.children[suffix.charAt(i - remainder.value)] = splitNode;
        nextNode.label = nextNode.label.substring(0, remainder.value);
        splitNode.children[nextNode.label.charAt(0)] = nextNode;
        nextNode.label = nextNode.label.substring(remainder.value);

        // Create a suffix link
        if (this.lastNewNode !== null) {
          this.lastNewNode.suffixLink = splitNode;
        }

        this.lastNewNode = splitNode;
      }
    }
  }

  _walkDown(suffix, node, remainder, nextNode) {
    if (remainder.value >= nextNode.label.length) {
      remainder.value -= nextNode.label.length;
      node = nextNode;
      return true;
    }
    return false;
  }
}
const suffixTree = new SuffixTree();
suffixTree.build('banana');

// Test some operations
console.log(suffixTree.root.children['a']);        // Node { children: { n: Node { ... } }, ... }
console.log(suffixTree.root.children['b']);        // Node { children: { a: Node { ... } }, ... }
console.log(suffixTree.root.children['a'].label);  // 'na'
