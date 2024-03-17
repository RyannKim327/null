class Node {
    constructor() {
        this.outgoingEdges = {};
    }
}

class SuffixTree {
    constructor() {
        this.root = new Node();
    }

    addString(str) {
        // Implement the logic to add a string to the suffix tree
    }

    searchSubstring(subStr) {
        // Implement the logic to search for a substring in the suffix tree
    }
}

// Usage
const suffixTree = new SuffixTree();
suffixTree.addString("banana");

