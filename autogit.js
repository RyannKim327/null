class Node {
  constructor() {
    this.children = {}; // Map children nodes
  }
}
class SuffixTree {
  constructor() {
    this.root = new Node(); // Root node of the tree
    this.text = ""; // The text to construct the suffix tree from
    this.insert = this.insert.bind(this);
    this.constructTree = this.constructTree.bind(this);
  }

  /**
   * Function to insert a suffix into the suffix tree
   * @param {string} suffix - the suffix to be inserted
   * @param {number} startIndex - the starting index of the suffix in the original text
   * @param {Node} currentNode - the current node of the tree
   */
  insert(suffix, startIndex, currentNode) {
    if (!(suffix[0] in currentNode.children)) {
      // If the first character of the suffix is not present in the children of the current node, add a new child node
      currentNode.children[suffix[0]] = new Node();
    }

    // Check the remaining characters of the suffix
    const remainingSuffix = suffix.slice(1);
    const childNode = currentNode.children[suffix[0]];
    const childNodeKeys = Object.keys(childNode.children);

    // Find the longest common substring between the suffix and any existing child node
    let commonSubstring = "";
    let i = 0;
    while (i < remainingSuffix.length && i < childNodeKeys.length) {
      if (remainingSuffix[i] !== childNodeKeys[i]) {
        break;
      }
      commonSubstring += remainingSuffix[i];
      i++;
    }

    if (commonSubstring.length > 0) {
      if (i === childNodeKeys.length) {
        // If the suffix is a substring of the child node, recursively insert the remaining suffix into the child node
        this.insert(remainingSuffix.slice(commonSubstring.length), startIndex + commonSubstring.length, childNode);
      } else {
        // If there is a partial match, split the child node and insert the remaining suffix into the new child node
        const originalChildNode = childNode.children[commonSubstring[i]];
        const newChildNode = new Node();

        // Update the existing child node to include the remaining substring
        childNode.children[commonSubstring[i]] = newChildNode;
        newChildNode.children = { [commonSubstring[i + 1]]: originalChildNode };

        // Insert the remaining suffix into the new child node
        this.insert(remainingSuffix.slice(commonSubstring.length + 1), startIndex + commonSubstring.length + 1, newChildNode);
      }
    } else {
      // If no common substring is found, simply add the suffix as a new child node
      childNode.children[remainingSuffix[0]] = new Node();
    }
  }

  /**
   * Function to construct the suffix tree from the given text
   * @param {string} text - the text to construct the suffix tree from
   */
  constructTree(text) {
    for (let i = 0; i < text.length; i++) {
      this.insert(text.slice(i), i, this.root);
    }
    this.text = text;
  }
}
// Create a new instance of the SuffixTree class
const suffixTree = new SuffixTree();

// Construct the suffix tree from a text
suffixTree.constructTree("banana");

// Access the root of the tree
console.log(suffixTree.root);

// Access the constructed tree text
console.log(suffixTree.text);
