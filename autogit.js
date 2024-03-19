class Node {
    constructor(start, end) {
        this.children = {};
        this.start = start;
        this.end = end;
        this.suffixLink = null; // Optional: Implement suffix links for faster traversal
    }
}
class SuffixTree {
    constructor(input) {
        this.root = new Node(-1, -1);
        this.input = input;
        this.buildSuffixTree();
    }

    buildSuffixTree() {
        // Your implementation of building the suffix tree from the input string
        // You can use Ukkonen's algorithm or another approach for construction
    }

    search(substring) {
        // Your implementation of searching for a specific substring in the tree
    }
}
