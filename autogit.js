class Node {
    constructor() {
        this.edges = {};
    }
}

class Edge {
    constructor(start, end, label) {
        this.start = start;
        this.end = end;
        this.label = label;
    }
}
class SuffixTree {
    constructor() {
        this.root = new Node();
    }

    // Methods to insert a string into the suffix tree
    insert(suffix) {
        // Implement insertion logic here
    }

    // Method to search for a substring in the suffix tree
    search(substring) {
        // Implement search logic here
    }
}
