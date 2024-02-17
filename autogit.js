class Node {
    constructor(start, end) {
        this.children = {};
        this.start = start; // start index of the substring represented by this node
        this.end = end; // end index of the substring represented by this node
    }
}
class SuffixTree {
    constructor(text) {
        this.root = new Node(-1, -1);
        this.text = text;
        this.buildTree();
    }

    buildTree() {
        // Implement the Ukkonen's algorithm here to build the suffix tree
    }
}
