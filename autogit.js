class Node {
    constructor() {
        this.children = {};
    }
}

class SuffixTree {
    constructor(inputString) {
        this.root = new Node();
        this.buildSuffixTree(inputString);
    }

    buildSuffixTree(input) {
        // Implement Ukkonen's algorithm to build the suffix tree
    }

    search(substring) {
        // Implement substring search logic
    }

    // Other operations like finding longest common substring, etc.
}

// Example usage
const suffixTree = new SuffixTree("banana");
console.log(suffixTree.search("ana")); // Output: true
