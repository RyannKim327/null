class Node {
    constructor(t, leaf) {
        this.keys = [];
        this.children = [];
        this.leaf = leaf;
        this.degree = t;
    }
}
class BTree {
    constructor(t) {
        this.root = new Node(t, true);
        this.t = t;
    }
    
    // Implement methods for insertion, deletion, search, and other operations
}
