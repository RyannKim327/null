class Node {
  constructor() {
    this.children = {};
    this.suffixLink = null;
  }
}
class SuffixTree {
  constructor() {
    this.root = new Node();
    this.activeNode = this.root;
  }
}
class SuffixTree {
  // ...

  addSuffix(suffix) {
    let currentNode = this.root;
    let remainingSuffix = suffix;

    while (remainingSuffix.length > 0) {
      const firstChar = remainingSuffix[0];

      if (currentNode.children[firstChar]) {
        const childNode = currentNode.children[firstChar];
        let prefix = "";
        let i = 0;

        // Traverse through the common prefix between the remaining suffix and the child node's string
        while (i < childNode.string.length && childNode.string[i] === remainingSuffix[i]) {
          prefix += childNode.string[i];
          i++;
        }

        if (i === childNode.string.length) {
          // The entire child node's string is a prefix of the remaining suffix
          currentNode = childNode;
          remainingSuffix = remainingSuffix.slice(i);
        } else {
          // Split the child node and create a new node for the common prefix
          const newNode = new Node();
          newNode.string = prefix;
          newNode.children[childNode.string[i]] = childNode;

          // Update the child node's string
          childNode.string = childNode.string.substring(i);

          // Assign the new node as a child of the current node
          currentNode.children[firstChar] = newNode;

          // Update the remaining suffix and break out of the loop
          remainingSuffix = remainingSuffix.slice(i);
          break;
        }
      } else {
        // Create a new child node for the remaining suffix
        const newNode = new Node();
        newNode.string = remainingSuffix;

        // Assign the new node as a child of the current node
        currentNode.children[firstChar] = newNode;

        // Break out of the loop
        break;
      }
    }
  }
}
class SuffixTree {
  // ...

  build(str) {
    for (let i = 0; i < str.length; i++) {
      const suffix = str.slice(i);
      this.addSuffix(suffix);
    }
  }
}
const tree = new SuffixTree();
tree.build('banana');
console.log(tree);
