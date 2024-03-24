// Node class for the suffix tree
class Node {
    constructor() {
        this.children = {}; // Mapping of characters to child nodes
        this.start = null; // Start index of the substring
        this.end = null; // End index of the substring
        this.suffixLink = null; // Suffix link to another node
    }
}

// Suffix tree class
class SuffixTree {
    constructor(text) {
        this.root = new Node();
        this.text = text;
        this.buildSuffixTree();
    }

    // Function to build the suffix tree
    buildSuffixTree() {
        for (let i = 0; i < this.text.length; i++) {
            this.addSuffix(this.text.substring(i), i);
        }
    }

    // Function to add a suffix to the suffix tree
    addSuffix(suffix, startIndex) {
        let currentNode = this.root;
        for (let i = 0; i < suffix.length; i++) {
            if (!currentNode.children[suffix[i]]) {
                currentNode.children[suffix[i]] = new Node();
            }
            currentNode = currentNode.children[suffix[i]];
        }
        currentNode.start = startIndex;
        currentNode.end = this.text.length - 1;
    }
}

// Usage
const text = "banana";
const suffixTree = new SuffixTree(text);
